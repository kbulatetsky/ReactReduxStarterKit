import express from 'express';
import open from 'open';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack.config.dev';
import * as serverCommon from './serverCommon';

const port = 3000;
const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler);
const hotMiddleware = webpackHotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

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
