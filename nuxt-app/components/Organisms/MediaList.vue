<template>
  <section class="mediaList">
    <ul class="mediaList__list">
      <li v-for="(media, key) in mediaList" :key="key" class="mediaList__item">
        <MediaCard :media="media" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import MediaCard from "@/components/Molecules/MediaCard"

export default {
  components: {
    MediaCard,
  },
  computed: {
    mediaList() {
      return this.getMediaList()
    },
  },
  methods: {
    ...mapGetters({
      getMediaList: "media/get",
    }),
    toFormat(timestamp) {
      return this.$dayjs(timestamp * 1000).format("YYYY/MM/DD")
    },
  },
}
</script>

<style lang="scss">
.mediaList {
  margin: 20px 0;

  &__list {
    list-style-type: none;
  }

  &__item {
    border-radius: 16px;
    transition-duration: $transition-time;

    &:hover {
      background-color: $thin-color;
    }
  }
}
</style>
