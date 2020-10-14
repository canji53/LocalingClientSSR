<template>
  <main class="termsPage">
    <PageTitle :title="title" class="termsPage__title" />
    <RenderMarkdown :markdown-string="stringMarkdown" class="termsMd" />
  </main>
</template>

<script>
import PageTitle from "@/components/Atoms/PageTitle"
import RenderMarkdown from "@/components/Organisms/RenderMarkdown"
import markdown from "./index.md"

export default {
  components: {
    PageTitle,
    RenderMarkdown,
  },
  data: () => ({
    title: "ご利用規約",
    stringMarkdown: markdown,
  }),
  head() {
    return {
      title: "ご利用規約",
    }
  },
}
</script>

<style lang="scss" scoped>
.termsPage {
  max-width: 600px;
  margin: auto;
  padding: 40px 0;

  &__title {
    margin: 0 auto 0 24px;
  }
}

.termsMd {
  margin: 32px 16px;
}
</style>
