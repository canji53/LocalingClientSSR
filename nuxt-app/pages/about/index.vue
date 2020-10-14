<template>
  <main class="aboutPage">
    <PageTitle :title="title" class="aboutPage__title" />
    <RenderMarkdown :markdown-string="stringMarkdown" class="aboutMd" />
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
    title: "ローカりんぐとは？",
    stringMarkdown: markdown,
  }),
  head() {
    return {
      title: "ローカりんぐとは？",
    }
  },
}
</script>

<style lang="scss" scoped>
.aboutPage {
  max-width: 600px;
  margin: auto;
  padding: 40px 0;

  &__title {
    margin: 0 auto 0 24px;
  }
}

.aboutMd {
  margin: 32px 16px;
}
</style>
