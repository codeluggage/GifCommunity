import { addRoute } from 'meteor/vulcan:core';

import LoginPage from '../components/LoginPage.jsx';
import WelcomeFlow from '../components/WelcomeFlow.jsx';
import WelcomeInstall from '../components/WelcomeInstall.jsx';
import WelcomePermissions from '../components/WelcomePermissions.jsx';
import Tutorials from '../components/Tutorials.jsx';
import QuickUpload from '../components/QuickUpload.jsx';

addRoute({ name: 'home', path: '/', component: LoginPage });
addRoute({ name: 'welcome', path: '/welcome', component: WelcomeFlow });
addRoute({ name: 'install', path: '/welcome-install', component: WelcomeInstall });
addRoute({ name: 'permissions', path: '/welcome-permissions', component: WelcomePermissions });
addRoute({ name: 'tutorials', path: '/tutorials', component: Tutorials });
addRoute({ name: 'upload', path: '/upload', component: QuickUpload });

