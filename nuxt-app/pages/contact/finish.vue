<template>
  <main class="contactFinishPage">
    <PageTitle :title="title" class="contactFinishPage__title" />
    <ContactFinish />
  </main>
</template>

<script>
import PageTitle from "@/components/Atoms/PageTitle"
import ContactFinish from "@/components/Organisms/ContactFinish"

export default {
  components: {
    PageTitle,
    ContactFinish,
  },
  middleware: "disable-direct-access",
  data: () => ({
    title: "送信完了",
  }),
  head() {
    return {
      title: "お問い合わせ/完了",
    }
  },
}
</script>

<style lang="scss" scoped>
.contactFinishPage {
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
