export default function (context) {
  if (context.from.name === context.route.name) {
    context.redirect("/")
  }
}
