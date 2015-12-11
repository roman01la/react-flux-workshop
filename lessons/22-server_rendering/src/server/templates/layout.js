export default function getLayout(html, state, { lang = 'en', charset = 'UTF-8', title = '' } = {}) {

  return (

`<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="${charset}">
    <title>${title}</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="/javascripts/app.js"></script>
    <script>renderState(${JSON.stringify(state)});</script>
  </body>
</html>`);
}
