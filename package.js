Package.describe({
  summary: "Provides SlickGrid 2.1"
});

Package.on_use(function (api) {
  api.use('jquery');

  api.add_files('SlickGrid/slick.core.js', 'client');
  api.add_files('SlickGrid/slick.dataview.js', 'client');
  api.add_files('SlickGrid/slick.editors.js', 'client');
  api.add_files('SlickGrid/slick.formatters.js', 'client');
  api.add_files('SlickGrid/slick.grid.js', 'client');
  api.add_files('SlickGrid/slick.groupitemmetadataprovider.js', 'client');
  api.add_files('SlickGrid/slick.remotemodel.js', 'client');
  api.add_files('SlickGrid/controls', 'slick.columnpicker.js', 'client');
  api.add_files('SlickGrid/controls', 'slick.pager.js', 'client');


  api.add_files('SlickGrid/asset_path, ''SlickGrid/slick.core.css', 'client');
  api.add_files('SlickGrid/asset_path, ''SlickGrid/controls', 'slick.columnpicker.css', 'client');
  api.add_files('SlickGrid/asset_path, ''SlickGrid/controls', 'slick.pager.css', 'client');
  
});