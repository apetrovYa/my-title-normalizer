var assert = require('assert');
var ConcreteNormalizeStrategyV1 = require('../lib/strategy/concreteNormalizeStrategyV1');
var Title = require('../lib/facade/title');

describe('ConcreteNormalizeStrategyV1', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What Is A Meta Title Tag', function () {
            let title = new ConcreteNormalizeStrategyV1("What Is A Meta Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('ConcreteNormalizeStrategyV1', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What    Is A Meta Title Tag', function () {
            let title = new ConcreteNormalizeStrategyV1("What    Is A Meta Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('ConcreteNormalizeStrategyV1', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What:Is A Meta Title Tag', function () {
            let title = new ConcreteNormalizeStrategyV1("What:Is A Meta Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('ConcreteNormalizeStrategyV1', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What/Is A Meta Title Tag', function () {
            let title = new ConcreteNormalizeStrategyV1("What/Is A Meta Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('ConcreteNormalizeStrategyV1', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What Is A Meta/Title Tag', function () {
            let title = new ConcreteNormalizeStrategyV1("What Is A Meta/Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('Title', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What Is A Meta Title Tag', function () {
            let title = new Title("What Is A Meta Title Tag");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('Title', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What Is A Meta Title Tag ::::', function () {
            let title = new Title("What Is A Meta Title Tag ::::");
            title.normalize();
            let t = "what-is-a-meta-title-tag";
            assert.equal(title.getText(), t);
        });
    });
});

describe('Title', function () {
    describe('#normalize()', function () {
        it('should normalize as expected the string What', function () {
            let title = new Title("What");
            title.normalize();
            let t = "what";
            assert.equal(title.getText(), t);
        });
    });
});