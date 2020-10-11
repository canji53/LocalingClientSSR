<template>
  <section class="contactInputSubject">
    <ContactInputLabel
      :name="name"
      :text="text"
      :required="required"
      class="contactInputSubject__label"
    />
    <ContactInput
      :form-id="formId"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="subject"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      class="contactInputSubject__input"
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
    subject: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  data: () => ({
    name: "subject",
    text: "件名",
    type: "text",
    placeholder: "無題",
    required: false,
    autofocus: false,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss" scoped>
.contactInputSubject {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 0 0 0 8px;
  }
}
</style>
