export default function getLayout(MailBoxHtml, LabelsManagerHtml, state) {

  return (

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="/styles/normalize.css">
  <link rel="stylesheet" href="/styles/app.css">
</head>
<body>
  <div id="mail-box">${MailBoxHtml}</div>
  <div id="labels-manager">${LabelsManagerHtml}</div>
  <script src="/javascripts/app.js"></script>
  <script>renderState(${JSON.stringify(state)});</script>
</body>
</html>`);
}
