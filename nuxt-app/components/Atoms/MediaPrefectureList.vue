<template>
  <ul class="mediaPrefectureList">
    <li v-for="(item, key) in codeToText(prefectureCodeList)" :key="key">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    prefectureCodeList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    prefecture: [
      { text: "北海道", code: 1 },
      { text: "青森県", code: 2 },
      { text: "岩手県", code: 3 },
      { text: "宮城県", code: 4 },
      { text: "秋田県", code: 5 },
      { text: "山形県", code: 6 },
      { text: "福島県", code: 7 },
      { text: "茨城県", code: 8 },
      { text: "栃木県", code: 9 },
      { text: "群馬県", code: 10 },
      { text: "埼玉県", code: 11 },
      { text: "千葉県", code: 12 },
      { text: "東京都", code: 13 },
      { text: "神奈川県", code: 14 },
      { text: "新潟県", code: 15 },
      { text: "富山県", code: 16 },
      { text: "石川県", code: 17 },
      { text: "福井県", code: 18 },
      { text: "山梨県", code: 19 },
      { text: "山梨県", code: 20 },
      { text: "岐阜県", code: 21 },
      { text: "静岡県", code: 22 },
      { text: "愛知県", code: 23 },
      { text: "三重県", code: 24 },
      { text: "滋賀県", code: 25 },
      { text: "京都府", code: 26 },
      { text: "大阪府", code: 27 },
      { text: "兵庫県", code: 28 },
      { text: "奈良県", code: 29 },
      { text: "和歌山県", code: 30 },
      { text: "鳥取県", code: 31 },
      { text: "島根県", code: 32 },
      { text: "岡山県", code: 33 },
      { text: "広島県", code: 34 },
      { text: "山口県", code: 35 },
      { text: "徳島県", code: 36 },
      { text: "香川県", code: 37 },
      { text: "愛媛県", code: 38 },
      { text: "高知県", code: 39 },
      { text: "福岡県", code: 40 },
      { text: "佐賀県", code: 41 },
      { text: "長崎県", code: 42 },
      { text: "熊本県", code: 43 },
      { text: "大分県", code: 44 },
      { text: "宮崎県", code: 45 },
      { text: "鹿児島県", code: 46 },
      { text: "沖縄県", code: 47 },
    ],
  }),
  methods: {
    codeToText(codeList) {
      return codeList.map((code) => {
        return this.prefecture[code - 1].text
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.mediaPrefectureList {
  display: flex;
  flex-flow: row;
  list-style-type: none;

  & > li {
    margin-right: 4px;
    font-size: 10px;
    color: $base-color;
  }
}
</style>
