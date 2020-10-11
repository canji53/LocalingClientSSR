<template>
  <section class="contactTextareaBody">
    <ContactInputLabel
      :name="name"
      :text="text"
      :required="required"
      class="contactTextareaBody__label"
    />
    <ContactTextarea
      :form-id="formId"
      :name="name"
      :placeholder="placeholder"
      :value="body"
      :required="required"
      :rows="rows"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      @input="$emit('input', $event)"
    />
  </section>
</template>

<script>
import ContactTextarea from "@/components/Atoms/ContactTextarea"
import ContactInputLabel from "@/components/Atoms/ContactInputLabel"

export default {
  components: {
    ContactTextarea,
    ContactInputLabel,
  },
  props: {
    formId: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      required: false,
      default: 400,
    },
  },
  data: () => ({
    name: "body",
    text: "本文",
    placeholder: "ここに本文を記入してください。（400文字以内）",
    rows: 8,
    required: true,
    autofocus: false,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss" scoped>
.contactTextareaBody {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 8px 0 4px 8px;
  }
}
</style>
