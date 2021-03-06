#! /usr/bin/env node

import getApp from '../index.js';

const port = process.env.PORT || 4000;
const app = getApp();
app.listen(port, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Server has been started on ${port}`);
});
