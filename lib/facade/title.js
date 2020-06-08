var ConcreteNormalizeStrategyV1 = require('../strategy/concreteNormalizeStrategyV1');

class Title {
    constructor(title) {
        this.title = new ConcreteNormalizeStrategyV1(title);
    }

    normalize() {
        this.title.normalize();
    }

    getText() {
        let o = this.title.getText();
        return o;
    }
}

module.exports = Title;