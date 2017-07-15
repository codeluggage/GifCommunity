import { replaceComponent, Utils } from 'meteor/vulcan:core';
import './gifs/collection.js';
import './comments/collection.js';

import Layout from '../components/common/Layout.jsx';
replaceComponent('Layout', Layout);

Utils.icons.comment = 'comment';

import './routes.js';
