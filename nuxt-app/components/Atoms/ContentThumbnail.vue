<template>
  <a :href="canonical" :target="target" :rel="rel" class="contentThumbnail">
    <img :src="isThumbnailUrl(thumbnailUrl)" :alt="alt" />
  </a>
</template>

<script>
export default {
  props: {
    thumbnailUrl: {
      type: String,
      required: false,
      default: "",
    },
    alt: {
      type: String,
      required: false,
      default: "",
    },
    canonical: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: () => ({
    target: "_blank",
    rel: "noopener",
  }),
  methods: {
    isThumbnailUrl(thumbnailUrl) {
      if (
        typeof thumbnailUrl === "undefined" ||
        thumbnailUrl === null ||
        thumbnailUrl === ""
      ) {
        return require("@/assets/images/plane.svg")
      }
      return thumbnailUrl
    },
  },
}
</script>

<style lang="scss" scoped>
.contentThumbnail {
  & > img {
    width: 100%;
    border-radius: 16px;
    border: solid $thin-color 1px;
  }
}
</style>
