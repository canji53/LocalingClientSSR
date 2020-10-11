<template>
  <section class="contactInputName">
    <ContactInputLabel
      :name="name"
      :text="text"
      :required="required"
      class="contactInputName__label"
    />
    <ContactInput
      :form-id="formId"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      class="contactInputName__input"
      @input="$emit('input', $event)"
    />
  </section>
</template>

<script>
import ContactInput from "@/components/Atoms/ContactInput"
import ContactInputLabel from "@/components/Atoms/ContactInputLabel"

export default {
  components: {
    ContactInput,
    ContactInputLabel,
  },
  props: {
    formId: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      required: false,
      default: 20,
    },
  },
  data: () => ({
    name: "name",
    text: "お名前",
    type: "text",
    placeholder: "ローカル 太郎",
    required: true,
    autofocus: true,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss" scoped>
.contactInputName {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 0 0 0 8px;
  }
}
</style>
