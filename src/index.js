import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

import run from './index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

run(gon);
