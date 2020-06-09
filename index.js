#!/usr/bin / env node

var Title = require('./lib/facade/title');
const cli = require('cac')("my-title-normalizer");

cli
    .command('[input]', 'Transform the given title')
    .example('my-title-normalizer "This Text Will Be Transformed"')
    .action((input) => {
        if (typeof input !== 'undefined') {
            console.log("ORIGINAL TITLE: " + input);
            let t = new Title(input);
            t.normalize();
            console.log("NORMALIZED TITLE: " + t.getText());
        }
    });
cli.help();
cli.version('1.0.0');
cli.parse();

