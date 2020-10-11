<template>
  <nav class="siteSns">
    <h2 class="siteSns__title">
      {{ text }}
    </h2>
    <ul class="siteSns__list">
      <li class="siteSns__item">
        <a
          :href="twitter.href"
          :target="target"
          :rel="rel"
          class="siteSns__item__twitter"
        >
          <FontAwesome
            :type="twitter.awesomeType"
            :icon="twitter.awesomeIcon"
          />
        </a>
      </li>
      <li class="siteSns__item">
        <a
          :href="rss.href"
          :target="target"
          :rel="rel"
          class="siteSns__item__rss"
        >
          <FontAwesome :type="rss.awesomeType" :icon="rss.awesomeIcon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import FontAwesome from "@/components/Atoms/FontAwesome"

export default {
  component: {
    FontAwesome,
  },
  data: () => ({
    twitter: {
      href: "#",
      awesomeType: "fab",
      awesomeIcon: "twitter",
    },
    rss: {
      href: "#",
      awesomeType: "fas",
      awesomeIcon: "rss",
    },
    text: "Follow Me",
    target: "_blank",
    rel: "noopener",
  }),
}
</script>

<style lang="scss" scoped>
.siteSns {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  &__title {
    margin-right: 8px;
    font-weight: normal;
    font-size: $base-font-size;
    color: $base-color;
  }

  &__list {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
  }

  &__item {
    margin-right: 8px;

    > a {
      border-radius: 50%;

      > svg {
        line-height: 24px;
        font-size: 24px;
      }
    }

    &__twitter {
      color: #1da1f3;
    }

    &__rss {
      color: #ec9401;
    }
  }
}
</style>
