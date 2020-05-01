const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8888;
const cors = require('cors');
const compression = require('compression');
app.use(cors());
app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.resolve(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
