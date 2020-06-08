
const Normalizer = require('./lib/strategy/concreteNormalizeStrategyV1');

let arguments = process.argv.slice(2);
let title = arguments[0];
myTitle = new Normalizer(title);
myTitle.normalize();
myTitle.printTitle();
