const express = require('express');
const beautify = require('js-beautify').js;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/beautify', (req, res) => {
  const userCode = req.body.userCode;
  const beautifiedCode = beautifyCode(userCode);
  res.json({ beautifiedCode });
});

function beautifyCode(compressedCode) {
  return beautify(compressedCode, { indent_size: 2 });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});