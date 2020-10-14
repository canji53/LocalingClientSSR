<template>
  <button
    :type="type"
    :form="formId"
    class="buttonReset"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    text: "クリア",
    type: "reset",
  }),
}
</script>

<style lang="scss" scoped>
.buttonReset {
  padding: 6px 40px;
  font-size: 11px;
  font-weight: bold;
  border: solid 1px $thin-color;
  border-radius: 4px;
  transition-duration: $transition-time;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    border: solid 1px $base-thin-color;
  }

  &:focus {
    outline: none;
  }
}
</style>
