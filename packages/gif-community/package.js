Package.describe({
  name: 'gif-community',
});

Package.onUse(function (api) {

  api.use([

    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:forms',
    'vulcan:accounts',
    'vulcan:forms-upload',
    
    // third-party packages
    'fourseven:scss@4.5.0',

  ]);

  api.addFiles('lib/stylesheets/style.scss');

  api.addAssets([
    'lib/static/GifCommunity.png'
  ], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
