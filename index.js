
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './src/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// Generate build with webpack
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(`
      <!DOCTYPE html>
        <html lang="en">
        	<head>
        		<title>Server Side Rendering</title>
        	</head>
        	<body>
        		<div id="app">${content}</div>
            <script src="client-build.js"></script>
        	</body>
        </html>
      <!doctype html>
    `);
    res.end();
  }

})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})
