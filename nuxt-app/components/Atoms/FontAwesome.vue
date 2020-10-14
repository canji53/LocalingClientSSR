<template>
  <client-only>
    <font-awesome-icon :icon="[type, icon]" />
  </client-only>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "far",
    },
    icon: {
      type: String,
      required: true,
      default: "heart",
    },
  },
}
</script>
