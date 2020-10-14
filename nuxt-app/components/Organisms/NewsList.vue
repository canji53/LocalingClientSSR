<template>
  <section class="newsList">
    <ul>
      <li v-for="(news, key) in newsList" :key="key">
        <NewsCard :news="news" />
      </li>
    </ul>
  </section>
</template>

<script>
import NewsCard from "@/components/Molecules/NewsCard"

export default {
  components: {
    NewsCard,
  },
  props: {
    newsList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsList {
  padding: 40px 0;

  & > ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    list-style-type: none;
    border-top: solid 1px $base-thin-color;

    & > li {
      width: 100%;
      padding: 16px 0;
      border-bottom: solid 1px $base-thin-color;
    }
  }
}
</style>
