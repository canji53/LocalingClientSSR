<template>
  <section class="contactInputEmail">
    <ContactInputLabel
      :name="name"
      :text="text"
      :required="required"
      class="contactInputEmail__label"
    />
    <ContactInput
      :form-id="formId"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="email"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      class="contactInputEmail__input"
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
    email: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    name: "email",
    text: "メールアドレス",
    type: "email",
    placeholder: "sample-tarou@sample.com",
    required: true,
    autofocus: false,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss" scoped>
.contactInputEmail {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 0 0 0 8px;
  }
}
</style>
