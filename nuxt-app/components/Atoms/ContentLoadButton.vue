<template>
  <button
    v-if="isDisplay"
    :type="type"
    class="contentLoadButton"
    @click="$emit('load')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    isDisplay: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    text: "読み込む",
    type: "button",
  }),
}
</script>

<style lang="scss" scoped>
.contentLoadButton {
  width: 100%;
  padding: 6px 24px;
  font-size: 11px;
  color: $base-color;
  border-radius: 16px;
  border: solid $base-thin-color 1px;
  transition-duration: $transition-time;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    border: solid $base-color 1px;
  }

  &:focus {
    outline: none;
  }
}
</style>
