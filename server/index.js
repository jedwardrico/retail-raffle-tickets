const express = require('express');
const path = require('path')
const app = express();

app.use(require('body-parser').json());

app.use('/public', express.static('public'));
app.use('/vendor', express.static('node_modules'));

app.use('/api', require('./routes'));

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err,req,res,next) => {
  console.log(`*** There is an error! ${err.stack} ***`)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Connected to port ${port}`));