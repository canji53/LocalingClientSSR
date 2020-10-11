<template>
  <label :for="name" class="contactInputLabel">
    {{ text }}
    <span v-if="required">*</span>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.contactInputLabel {
  color: $base-color;
  font-size: $base-font-size;

  & > span {
    color: orangered;
  }
}
</style>
