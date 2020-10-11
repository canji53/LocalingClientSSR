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
  line-height: 11px;
  font-size: 11px;
  color: $base-color;
}
</style>
