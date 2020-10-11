<template>
  <input
    :form="formId"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :readonly="readonly"
    :maxlength="maxlength"
    :value="value"
    class="contactInput"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    formId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "https://example.com/feed",
    },
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
      default: true,
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    autocomplete: {
      type: String,
      required: false,
      default: "on",
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxlength: {
      type: Number,
      required: false,
      default: 100,
    },
  },
}
</script>

<style lang="scss" scoped>
.contactInput {
  padding: 8px;
  border-bottom: solid $thin-color 1px;
  font-size: $base-font-size;
  color: $base-color;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition-duration: $transition-time;

  &::placeholder {
    color: $thin-color;
  }

  &:focus {
    outline: none;
    border-bottom: solid $base-thin-color 1px;
  }
}
</style>
