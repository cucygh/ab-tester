class AB {
    constructor() {
        this.version = require('../package').version;
    }

    static create(name, option) {
        if (!AB.category) {
            AB.category = new Map();
        }
        if (name && option) {
            AB.category.set(Symbol.for(name), option);
        }
    }

    static run(name){
      let _name=Symbol.for(name);
      if(AB.category.has(_name)){
        let ab=AB.category.get(_name);
        let cur=AB.randomHit(Object.values(ab));
        return Object.keys(ab)[cur]
      }else{
        return false
      }
    }

    static randomHit(weights) {
        let factory = function(weights) {
            let total,
                current = 0,
                parts = [],
                i = 0,
                l = weights.length;
            // reduce 方法的简单兼容
            if (weights.reduce) {
                total = weights.reduce(function(a, b) {
                    return a + b;
                }, 0)
            } else {
                total = eval(weights.join('+'))
            }
            for (; i < l; i++) {
                current += weights[i];
                parts.push('if( p < ', current / total, ' ) return ', i / l, ' + n;');
            }
            return Function('var p = Math.random(), n = Math.random() / ' + l + ';' + parts.join(''));
        };
        if (arguments.length > 0) {
            weights = [].slice.call(arguments);
        }
        return Math.floor(weights[0].length * factory.apply(null, weights)())
    }
}


export default AB;
