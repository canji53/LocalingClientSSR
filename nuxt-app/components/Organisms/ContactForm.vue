<template>
  <client-only>
    <form :id="id" class="contactForm" @submit.prevent="send()">
      <div class="contactForm__description">
        <ContactDescription />
      </div>
      <div class="contactForm__name">
        <ContactInputName
          :form-id="id"
          :value="contact.name"
          :maxlength="nameLength"
          @input="contact.name = $event"
        />
        <ContactError :error="error.name" class="contactForm__name--error" />
      </div>
      <div class="contactForm__email">
        <ContactInputEmail
          :form-id="id"
          :email="contact.email"
          @input="contact.email = $event"
        />
        <ContactError :error="error.email" class="contactForm__email--error" />
      </div>
      <div class="contactForm__subject">
        <ContactInputSubject
          :form-id="id"
          :subject="contact.subject"
          :maxlength="subjectLength"
          @input="contact.subject = $event"
        />
        <ContactError
          :error="error.subject"
          class="contactForm__subject--error"
        />
      </div>
      <div class="contactForm__body">
        <ContactTextareaBody
          :form-id="id"
          :body="contact.body"
          :maxlength="bodyLength"
          @input="contact.body = $event"
        />
        <ContactError :error="error.body" class="contactForm__body--error" />
      </div>
      <div class="contactForm__interactive">
        <ContactResponse
          :response="response"
          class="contactForm__interactive__response"
        />
        <client-only>
          <LoadingSpiningDubbles
            :is-loading="isLoading"
            :width="loadingWidth"
            :height="loadingHeight"
            class="contactForm__interactive__loading"
          />
        </client-only>
      </div>
      <div class="contactForm__operation">
        <ContactOperation :form="id" />
      </div>
    </form>
  </client-only>
</template>

<script>
import * as axios from "axios"
import * as validator from "email-validator"

import ContactDescription from "@/components/Atoms/ContactDescription"
import ContactInputName from "@/components/Molecules/ContactInputName"
import ContactInputEmail from "@/components/Molecules/ContactInputEmail"
import ContactInputSubject from "@/components/Molecules/ContactInputSubject"
import ContactTextareaBody from "@/components/Molecules/ContactTextareaBody"
import ContactError from "@/components/Atoms/ContactError"
import LoadingSpiningDubbles from "@/components/Atoms/LoadingSpiningDubbles"
import ContactResponse from "@/components/Atoms/ContactResponse"
import ContactOperation from "@/components/Organisms/ContactOperation"

export default {
  components: {
    ContactDescription,
    ContactInputName,
    ContactInputEmail,
    ContactInputSubject,
    ContactTextareaBody,
    ContactError,
    LoadingSpiningDubbles,
    ContactResponse,
    ContactOperation,
  },
  data: () => ({
    id: "contact",
    contact: {
      name: "",
      email: "",
      subject: "",
      body: "",
    },
    error: {
      name: "",
      email: "",
      subject: "",
      body: "",
    },
    response: "",
    isLoading: false,
    loadingHeight: 25,
    loadingWidth: 25,
    nameLength: 20,
    subjectLength: 100,
    bodyLength: 400,
  }),
  watch: {
    "contact.name"(name) {
      if (!name) {
        this.error.name = "お名前をご入力ください。"
      } else if (name.length > this.nameLength) {
        this.error.name = `${this.nameLength}文字以内でご入力ください。`
      } else {
        this.error.name = " "
      }
    },
    "contact.email"(email) {
      if (!email) {
        this.error.email = "メールアドレスをご入力ください。"
      } else if (email.match(/[^\x01-\x7E\xA1-\xDF]/g) !== null) {
        this.error.email = "全角文字が含まれています。"
      } else if (!validator.validate(email)) {
        this.error.email = "正しいメールアドレスをご入力ください。"
      } else {
        this.error.email = " "
      }
    },
    "contact.subject"(subject) {
      if (subject.length > this.subjectLength) {
        this.error.subject = `${this.subjectLength}文字以内でご入力ください。`
      } else {
        this.error.subject = " "
      }
    },
    "contact.body"(body) {
      if (!body) {
        this.error.body = "本文を入力してください。"
      } else if (body.length > this.bodyLength) {
        this.error.body = `${this.bodyLength}文字以内でご入力ください。`
      } else {
        this.error.body = " "
      }
    },
  },
  methods: {
    /**
     * フォームの送信
     */
    async send() {
      this.isLoading = true // ローディング開始
      const messageURI = `https://api.localing.ml/${process.env.ENVIRONEMNT}/message`

      const response = await axios
        .post(messageURI, {
          name: this.contact.name,
          email: this.contact.email,
          subject: this.contact.subject,
          body: this.contact.body,
        })
        .then((response) => {
          return response
        })
        .catch((error) => {
          return { data: { message: error.message } }
        })

      if (response.status === 200) {
        this.isLoading = false // ローディング終了
        this.$router.push({ path: "/contact/finish" }) // 完了画面に
      } else {
        this.response = response.data.message
      }

      this.isLoading = false // ローディング終了
    },
  },
}
</script>

<style lang="scss" scoped>
.contactForm {
  margin: 8px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  &__description {
    width: 95%;
    margin: 0 auto 24px auto;
  }

  &__name,
  &__email,
  &__subject,
  &__body {
    width: 95%;
    margin: 8px auto;

    &--error {
      height: $base-font-size; // エラー表示が挿入されるとスタイルが崩れるため、予めheightを指定してスペースを確保しておくこと！！
      margin: 12px 8px;
    }
  }

  &__note {
    width: 95%;
    margin: 8px auto;
  }

  &__interactive {
    height: 25px; // loadingエフェクトの縦幅と同一にすること
    width: 95%;
    margin: 4px auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &__response {
      margin: 0 auto 0 0;
    }

    &__loading {
      margin: 0 24px 0 auto;
    }
  }

  &__operation {
    width: 95%;
    margin: 8px auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
