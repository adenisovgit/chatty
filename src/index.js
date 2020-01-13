import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import Cookies from 'js-cookie';
import gon from 'gon';
import faker from 'faker';

import run from './index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const user = {
  fullName: Cookies.get('fullname'),
  login: Cookies.get('login'),
};

if (!user.login) {
  user.fullName = faker.name.findName();
  user.login = user.fullName.split(' ').join('').toLowerCase();
  Cookies.set('fullname', user.fullName, { expires: 1 });
  Cookies.set('login', user.login, { expires: 1 });
}

run(gon, user);
