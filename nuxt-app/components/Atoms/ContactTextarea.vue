<template>
  <textarea
    :form="formId"
    :name="name"
    :maxlength="maxlength"
    :cols="cols"
    :rows="rows"
    :placeholder="placeholder"
    :required="required"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :readonly="readonly"
    :value="value"
    class="contactTextarea"
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
    placeholder: {
      type: String,
      default: "ここに記入してください。",
    },
    value: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      required: false,
      default: 200,
    },
    cols: {
      type: Number,
      required: false,
      default: 20,
    },
    rows: {
      type: Number,
      required: false,
      default: 4,
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
  },
}
</script>

<style lang="scss" scoped>
.contactTextarea {
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
