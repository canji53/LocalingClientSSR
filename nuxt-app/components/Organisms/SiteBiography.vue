<template>
  <section class="siteBiography">
    <SiteTitle :title="title" class="siteBiography__title" />
    <SiteDescription
      :description="description"
      class="siteBiography__description"
    />
  </section>
</template>

<script>
import SiteTitle from "@/components/Atoms/SiteTitle"
import SiteDescription from "@/components/Atoms/SiteDescription"
import SiteSns from "@/components/Molecules/SiteSns"

export default {
  component: {
    SiteTitle,
    SiteDescription,
    SiteSns,
  },
  data: () => ({
    title: "ローカりんぐ",
    description: "全国のローカルコンテンツをお手元に",
  }),
}
</script>

<style lang="scss" scoped>
.siteBiography {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  &__title,
  &__description {
    margin: 4px 0;
  }

  &__sns {
    margin: 8px 0;
  }
}
</style>
