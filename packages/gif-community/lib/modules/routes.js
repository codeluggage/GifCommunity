import { addRoute } from 'meteor/vulcan:core';

import PicsList from '../components/pics/PicsList.jsx';
import LoginPage from '../components/LoginPage.jsx';

addRoute({ name: 'home', path: '/', component: LoginPage });
addRoute({ name: 'gifs', path: '/gifs', component: PicsList });
