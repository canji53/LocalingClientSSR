<template>
  <button
    :type="type"
    :form="formId"
    class="buttonSubmit"
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
    text: "送信",
    type: "submit",
  }),
}
</script>

<style lang="scss" scoped>
.buttonSubmit {
  padding: 6px 24px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  background-color: $accent-color;
  border: solid $accent-color 1px;
  transition-duration: $transition-time;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    background-color: $accent-hover-color;
    border: solid $accent-hover-color 1px;
  }

  &:focus {
    outline: none;
  }
}
</style>
