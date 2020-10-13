<template>
  <client-only>
    <section class="contentList">
      <div
        v-for="(columnNumber, columnNumberKey) in columnsNumber"
        :key="columnNumberKey"
        class="contentList--column"
      >
        <div
          v-for="(content, contentKey) in columnContentList(
            columnNumber,
            columnsNumber
          )"
          :key="contentKey"
          class="contentList__item"
        >
          <ContentCard :content="content" />
        </div>
      </div>
      <section class="contentList__loadButton">
        <ContentLoadButton
          :is-display="isLastEvaluatedKey()"
          @load="readContentList()"
        />
      </section>
    </section>
  </client-only>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ContentCard from "@/components/Molecules/ContentCard"
import ContentLoadButton from "@/components/Atoms/ContentLoadButton"

export default {
  components: {
    ContentCard,
    ContentLoadButton,
  },
  data: () => ({
    loadingWidth: 50,
    loadingHeight: 50,
  }),
  computed: {
    contentList() {
      return this.getContentList()
    },
    columnsNumber() {
      const $columnWidth = 252 // カラム幅
      const columnNumber = Math.floor(this.$window.width / $columnWidth) // カラム数
      // 252px以下はカラム数は1とする
      if (this.$window.width < $columnWidth) {
        return 1
      }
      // カラム数の最大値は6とする
      if (columnNumber > 6) {
        return 6
      }
      return columnNumber
    },
    columnContentList() {
      return (offset, interval) => {
        return this.contentList.filter((content, index) => {
          return index % interval === offset - 1
        })
      }
    },
  },
  methods: {
    ...mapActions({
      readContentList: "content/readContentList",
    }),
    ...mapGetters({
      getContentList: "content/get",
      getLastEvaluatedKey: "lastEvaluatedKey/get",
      getLoading: "loading/get",
    }),
    toFormat(timestamp) {
      return this.$dayjs(timestamp * 1000).format("YYYY/MM/DD")
    },
    isLastEvaluatedKey() {
      return this.getLastEvaluatedKey() !== null
    },
  },
}
</script>

<style lang="scss" scoped>
.contentList {
  padding: 40px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  &--column {
    display: flex;
    flex-flow: column nowrap;
  }

  &__loadButton {
    width: 50%;
    margin: 40px 0;
    text-align: center;

    // contents < 504px; // スマホ対応
    @include max-screen($column3-width) {
      width: 95%;
    }

    &__loadingEffect {
      line-height: 50px;
    }
  }
}
</style>
