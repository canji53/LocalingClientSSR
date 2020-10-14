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
  font-size: 10px;
  color: $base-color;
}
</style>
