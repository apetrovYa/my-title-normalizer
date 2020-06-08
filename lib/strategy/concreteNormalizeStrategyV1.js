
var NormalizeStrategy = require('./normalizeStrategy');

class ConcreteNormalizeStrategyV1 extends NormalizeStrategy {
    constructor(a) {
        super(a);
        this.separator = "-";
        this.toReplace = / /g;
    }

    normalize() {
        super.normalize();
        this.substituteWhitespace();
        this.removeSemiColon();
        this.removeForwardSlash();
        this.removeDuplicatesOfSeparators();
    }

    substituteWhitespace() {
        super.replacePattern(this.toReplace, this.separator);
    }
    removeSemiColon() {
        super.replacePattern(/:+/g, this.separator);
    }

    removeForwardSlash() {
        super.replacePattern(/\/+/g, this.separator);
    }

    removeDuplicatesOfSeparators() {
        super.replacePattern(/-*-/g, this.separator);
    }
    getText() {
        let t = super.getText();
        return t;
    }


}

module.exports = ConcreteNormalizeStrategyV1;