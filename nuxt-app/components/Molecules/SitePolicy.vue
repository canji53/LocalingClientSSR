<template>
  <nav class="sitePolicy">
    <ul>
      <li v-for="site in sitePolicyLinkList" :key="site.link">
        <nuxt-link :to="site.link">
          {{ site.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    sitePolicyLinkList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.sitePolicy {
  & > ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    list-style-type: none;

    & > li {
      margin-bottom: 8px;

      & > a {
        line-height: $base-font-size;
        font-size: $base-font-size;
        color: $base-color;
      }

      @include max-screen($column3-width) {
        & > a {
          line-height: $small-font-size;
          font-size: $small-font-size;
        }
      }
    }
  }
}
</style>
