import { addRoute } from 'meteor/vulcan:core';

import LoginPage from '../components/LoginPage.jsx';
import WelcomeFlow from '../components/WelcomeFlow.jsx';
import Tutorial1 from '../components/Tutorial1.jsx';
import Tutorial2 from '../components/Tutorial2.jsx';
import Tutorial3 from '../components/Tutorial3.jsx';
import QuickUpload from '../components/QuickUpload.jsx';

addRoute({ name: 'home', path: '/', component: LoginPage });
addRoute({ name: 'welcome', path: '/welcome', component: WelcomeFlow });
addRoute({ name: 'upload', path: '/upload', component: QuickUpload });
addRoute({ name: 'tutorial1', path: '/tutorial1', component: Tutorial1 });
addRoute({ name: 'tutorial2', path: '/tutorial2', component: Tutorial2 });
addRoute({ name: 'tutorial3', path: '/tutorial3', component: Tutorial3 });

