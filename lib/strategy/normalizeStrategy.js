class NormalizeStrategy {

    constructor(t) {
        this.text = t;
    }

    normalize() {
        this.convertToLowerCase();
    }

    convertToLowerCase() {
        let s = this.text.toLowerCase();
        this.text = s;
    }

    replacePattern(what, how) {
        let t = this.text.replace(what, how);
        this.text = t;
    }

    getText() {
        return this.text;
    }
}

module.exports = NormalizeStrategy;