<template>
  <main class="contactPage">
    <PageTitle :title="title" class="contactPage__title" />
    <ContactForm />
  </main>
</template>

<script>
import PageTitle from "@/components/Atoms/PageTitle"
import ContactForm from "@/components/Organisms/ContactForm"

export default {
  components: {
    PageTitle,
    ContactForm,
  },
  data: () => ({
    title: "お問い合わせ・情報提供",
  }),
  head() {
    return {
      title: "お問い合わせ",
    }
  },
}
</script>

<style lang="scss" scoped>
.contactPage {
  max-width: 600px;
  margin: auto;
  padding: 40px 0;
  display: flex;
  flex-flow: column nowrap;

  &__title {
    width: 95%;
    margin: 0 auto 20px auto;
    padding-left: 8px;
  }
}
</style>
