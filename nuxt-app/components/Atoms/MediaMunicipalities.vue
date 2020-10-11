<template>
  <span class="mediaMunicipalities">
    {{ municipalities }}
  </span>
</template>

<script>
export default {
  props: {
    municipalities: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.mediaMunicipalities {
  line-height: 10px;
  font-size: 10px;
  color: $base-color;
}
</style>
