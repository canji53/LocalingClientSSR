<template>
  <section class="contactFinish">
    <div class="contactFinish__body">
      <p>この度はお問い合わせいただきありがとうございます。</p>
      <br />
      <p>
        お問い合わせ内容に応じては、返信にお時間をいただく場合がございます、<br />あらかじめご容赦ください。
      </p>
      <br />
      <p>引き続き ローカりんぐ をお楽しみください。</p>
    </div>
    <div class="contactFinish__return">
      <nuxt-link :to="to"> ホームに戻る </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    to: "/",
  }),
}
</script>

<style lang="scss" scoped>
.contactFinish {
  width: 95%;
  margin: 10px auto 30px auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  &__body {
    margin-left: 8px;
    & > p {
      font-size: $base-font-size;
      color: $base-color;
    }
  }

  &__return {
    margin: 20px auto 20px 8px;
    & > a {
      font-size: $base-font-size;
      color: $link-color;
    }
  }
}
</style>
