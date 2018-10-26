import express from 'express';
import open from 'open';

import * as serverCommon from './serverCommon';

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const componentString = serverCommon.getComponentString(req);
  res.end(serverCommon.renderHTML(componentString));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
