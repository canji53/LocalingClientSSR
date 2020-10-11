<template>
  <section class="contactNote">
    <span>*</span>
    <p>
      {{ note }}
    </p>
  </section>
</template>

<script>
export default {
  data: () => ({
    note: "必須の入力項目です。",
  }),
}
</script>

<style lang="scss" scoped>
.contactNote {
  margin: 0 0 0 8px;
  display: flex;
  flex-flow: row nowrap;

  & > span {
    margin-right: 4px;
    color: orangered;
  }

  & > p {
    font-size: $base-font-size;
    color: $base-thin-color;
  }
}
</style>
