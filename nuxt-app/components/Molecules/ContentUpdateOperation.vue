<template>
  <section class="contentUpdateOperation">
    <div class="contentUpdateOperation__back">
      <ButtonBack @back="$router.push({ path: '/content' })" />
    </div>
    <div class="contentUpdateOperation__submit">
      <ButtonSubmit />
    </div>
  </section>
</template>

<script>
import ButtonBack from "@/components/Molecules/ButtonBack"
import ButtonSubmit from "@/components/Molecules/ButtonSubmit"

export default {
  components: {
    ButtonBack,
    ButtonSubmit,
  },
}
</script>

<style lang="scss" scoped>
.contentUpdateOperation {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  &__back {
    margin-right: 8px;
  }
}
</style>
