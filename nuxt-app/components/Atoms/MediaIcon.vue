<template>
  <a :href="canonical" :target="target" :rel="rel" class="mediaIcon">
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
      required: true,
    },
  },
  data: () => ({
    target: "_blank",
    rel: "noopener",
  }),
}
</script>

<style lang="scss" scoped>
.mediaIcon {
  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 1px $thin-color;
  }
}
</style>
