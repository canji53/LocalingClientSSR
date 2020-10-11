import dayjs from "dayjs"

// eslint-disable-next-line no-unused-vars
export default ({ app }, inject) => {
  inject("dayjs", (string) => dayjs(string))
}
