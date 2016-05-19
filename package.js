Package.describe({
  name: "hisayan:autoform-react-intl-mui",
  summary: "Internationalization for Autoform",
  version: "0.1.9_1",
  git: "https://github.com/gwendall/meteor-autoform-i18n.git"
});

var packages = [
  "aldeed:simple-schema@1.3.2",
  "tap:i18n@1.4.1",
  "templating@1.1.1",
  "underscore@1.0.3"
];

Package.onUse(function (api, where) {

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    "package-tap.i18n",
    "shared/lib.js"
  ]);

});
