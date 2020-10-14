<template>
  <article class="mediaCard">
    <div class="mediaCard__mediaIcon">
      <MediaIcon
        :canonical="media.canonical"
        :title="media.title"
        :icon-url="media.iconUrl"
      />
    </div>
    <div class="mediaCard__mediaDescription">
      <div class="mediaCard__mediaArea">
        <MediaPrefectureList
          :prefecture-code-list="media.prefectureList"
          class="mediaCard__mediaArea__prefectureList"
        />
        <MediaMunicipalities
          :municipalities="media.municipalities"
          class="mediaCard__mediaArea__municipalities"
        />
      </div>
      <div class="mediaCard__mediaTitle">
        <MediaTitle
          :title="media.title"
          :canonical="media.canonical"
          class="mediaCard__mediaTitle__title"
        />
        <MediaSubTitle
          :sub-title="media.subTitle"
          :canonical="media.canonical"
          class="mediaCard__mediaTitle__subTitle"
        />
      </div>
    </div>
  </article>
</template>

<script>
import MediaIcon from "@/components/Atoms/MediaIcon"
import MediaTitle from "@/components/Atoms/MediaTitle"
import MediaSubTitle from "@/components/Atoms/MediaSubTitle"
import MediaPrefectureList from "@/components/Atoms/MediaPrefectureList"
import MediaMunicipalities from "@/components/Atoms/MediaMunicipalities"

export default {
  components: {
    MediaIcon,
    MediaTitle,
    MediaSubTitle,
    MediaPrefectureList,
    MediaMunicipalities,
  },
  props: {
    media: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toFormat(timestamp) {
      return this.$dayjs(timestamp * 1000).format("YYYY/MM/DD")
    },
  },
}
</script>

<style lang="scss" scoped>
.mediaCard {
  padding: 16px 0;
  margin: 0 16px;
  display: flex;
  flex-flow: row nowrap;

  &__mediaIcon {
    margin-right: 16px;
  }

  &__mediaArea {
    display: flex;
    flex-flow: row wrap;

    &__prefectureList {
      margin-right: 4px;
    }
  }

  &__mediaDescription {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  &__mediaTitle {
    margin: 2px 0;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;

    &__title {
      margin: 4px 8px 4px 0;
    }

    &__subTitle {
      margin: 4px 0;
    }
  }
}
</style>
