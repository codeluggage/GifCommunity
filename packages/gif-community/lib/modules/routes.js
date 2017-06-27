import { addRoute } from 'meteor/vulcan:core';

import LoginPage from '../components/LoginPage.jsx';
import WelcomeFlow from '../components/WelcomeFlow.jsx';
import WelcomeInstall from '../components/WelcomeInstall.jsx';
import WelcomePermissions from '../components/WelcomePermissions.jsx';

addRoute({ name: 'home', path: '/', component: LoginPage });
addRoute({ name: 'welcome', path: '/welcome', component: WelcomeFlow });
addRoute({ name: 'install', path: '/welcome-install', component: WelcomeInstall });
addRoute({ name: 'permissions', path: '/welcome-permissions', component: WelcomePermissions });

