<template>
  <main class="policyPage">
    <PageTitle :title="title" class="policyPage__title" />
    <RenderMarkdown :markdown-string="stringMarkdown" class="policyMd" />
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
    title: "個人情報保護方針",
    stringMarkdown: markdown,
  }),
  head() {
    return {
      title: "プライバシーポリシー",
    }
  },
}
</script>

<style lang="scss" scoped>
.policyPage {
  max-width: 600px;
  margin: auto;
  padding: 40px 0;

  &__title {
    margin: 0 auto 0 24px;
  }
}

.policyMd {
  margin: 32px 16px;
}
</style>
