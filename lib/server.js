require('newrelic');

const path = require('path');
const FOAAS = require(path.resolve(__dirname,'foaas'));

const foaas = new FOAAS({
  renderersPath: path.resolve(__dirname,'renderers'),
  filtersPath: path.resolve(__dirname,'filters'),
  operationsPath: path.resolve(__dirname,'itsp_operations')
});

const port = process.env.PORT || 5000;

foaas.start(port);


