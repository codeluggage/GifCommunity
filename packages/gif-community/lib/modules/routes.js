import { addRoute } from 'meteor/vulcan:core';

import LoginPage from '../components/LoginPage.jsx';

addRoute({ name: 'home', path: '/', component: LoginPage });
