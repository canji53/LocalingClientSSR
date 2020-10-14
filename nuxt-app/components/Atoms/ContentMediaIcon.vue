<template>
  <a :href="canonical" :target="target" :rel="rel" class="contentMediaIcon">
    <img :src="iconUrl" :alt="title" />
  </a>
</template>

<script>
export default {
  props: {
    canonical: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: false,
      default: "@/assets/images/plane.svg",
    },
  },
  data: () => ({
    target: "_blank",
    rel: "noopener",
  }),
}
</script>

<style lang="scss" scoped>
.contentMediaIcon {
  & > img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid 1px $thin-color;
  }
}
</style>
