<template>
  <section class="contactDescription">
    <p>
      ローカルメディアの情報をざっくばらんにご提供ください。<br />基準にそぐわない場合は対応しかねることがありますが、あらかじめご容赦ください。
    </p>
    <p>
      修正依頼や削除依頼もこちらからご連絡ください。<br />内容を確認した上で対応いたします。
    </p>
    <p>また、その他お問い合わせも受け付けております。</p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contactDescription {
  margin: 0 0 0 8px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  & > p {
    margin: 4px 0;
    font-size: $base-font-size;
    color: $base-color;
  }
}
</style>
