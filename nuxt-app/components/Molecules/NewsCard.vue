<template>
  <section class="newsCard">
    <div class="newsCard__date">
      <NewsDate :published-date="news.date" />
    </div>
    <div class="newsCard__body">
      <NewsTitle :title="news.title" class="newsCard__body__title" />
      <NewsDescription
        :description="news.text"
        class="newsCard__body__description"
      />
    </div>
  </section>
</template>

<script>
import NewsDate from "@/components/Atoms/NewsDate"
import NewsTitle from "@/components/Atoms/NewsTitle"
import NewsDescription from "@/components/Atoms/NewsDescription"

export default {
  components: {
    NewsDate,
    NewsTitle,
    NewsDescription,
  },
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsCard {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  &__date {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__body {
    width: 80%;
    padding: 0 12px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    &__title {
      margin-bottom: 8px;
    }
  }
}
</style>
