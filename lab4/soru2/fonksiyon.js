'use strict';

module.exports = {
    x: 0,
    a: 0,
    b: 0,
    c: 0,

    yerinekoy: function (x, a, b, c) {
        this.x = x;
        this.a = a;
        this.b = b;
        this.c = c;
    },

    
    hesapla: function () {
        return (this.a * this.x * this.x) + (this.b * this.x) + this.c;
    }
};
