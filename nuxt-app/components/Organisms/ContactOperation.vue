<template>
  <section class="contactOperation">
    <ButtonReset :form-id="form" class="contactOperation__reset" />
    <ButtonSubmit :form-id="form" class="contactOperation__submit" />
  </section>
</template>

<script>
import ButtonReset from "@/components/Atoms/ButtonReset"
import ButtonSubmit from "@/components/Atoms/ButtonSubmit"

export default {
  components: {
    ButtonReset,
    ButtonSubmit,
  },
  props: {
    form: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.contactOperation {
  display: flex;
  flex-flow: row nowrap;

  &__reset {
    margin-right: 8px;
  }
}
</style>
