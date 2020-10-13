<template>
  <p class="siteDescription">
    {{ description }}
  </p>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.siteDescription {
  font-size: $small-font-size;
  color: $base-color;
}
</style>
