<template>
  <article class="contentCard">
    <div class="contentCard__media">
      <ContentMediaIcon
        :canonical="content.mediaUrl"
        :title="content.mediaTitle"
        :icon-url="content.mediaIconUrl"
        class="contentCard__mediaIcon"
      />
      <div class="contentCard__mediaDescription">
        <MediaPrefectureList :prefecture-code-list="content.prefectureList" />
        <ContentMediaTitle
          :media-title="content.mediaTitle"
          :media-url="content.mediaUrl"
        />
      </div>
    </div>
    <div class="contentCard__thumbnail">
      <ContentThumbnail
        :canonical="content.canonical"
        :thumbnail-url="content.thumbnailUrl"
        :alt="content.title"
      />
    </div>
    <div class="contentCard__date">
      <ContentDate :published-date="toFormat(content.publishedDate)" />
    </div>
    <div class="contentCard__title">
      <ContentTitle :title="content.title" :canonical="content.canonical" />
    </div>
  </article>
</template>

<script>
import ContentThumbnail from "@/components/Atoms/ContentThumbnail"
import ContentTitle from "@/components/Atoms/ContentTitle"
import ContentDate from "@/components/Atoms/ContentDate"
import ContentMediaTitle from "@/components/Atoms/ContentMediaTitle"
import ContentMediaIcon from "@/components/Atoms/ContentMediaIcon"
import MediaPrefectureList from "@/components/Atoms/MediaPrefectureList"

export default {
  components: {
    ContentDate,
    ContentThumbnail,
    ContentTitle,
    ContentMediaTitle,
    ContentMediaIcon,
    MediaPrefectureList,
  },
  props: {
    content: {
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
.contentCard {
  width: $column-width;
  margin: 8px 0;
  padding: 12px;
  border-radius: 16px;
  transition-duration: $transition-time;

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    width: 100%;
  }

  &:hover {
    background-color: $thin-color;
  }

  &__media {
    margin: 2px 0;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }

  &__mediaIcon {
    margin-right: 4px;
  }

  &__mediaDescription {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
  }

  &__thumbnail {
    margin: 6px 0;
  }

  &__date {
    line-height: 10px;
  }

  &__title {
    margin: 3px 0;
  }
}
</style>
