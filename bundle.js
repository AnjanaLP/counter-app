(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // counterModel.js
  var require_counterModel = __commonJS({
    "counterModel.js"(exports, module) {
      var CounterModel2 = class {
        constructor() {
          this.count = 0;
        }
      };
      module.exports = CounterModel2;
    }
  });

  // counterView.js
  var require_counterView = __commonJS({
    "counterView.js"(exports, module) {
      var CounterView2 = class {
        constructor(model2) {
          this._model = model2;
        }
        display() {
          document.querySelector("#count").innerText = this._model.count;
        }
      };
      module.exports = CounterView2;
    }
  });

  // index.js
  var CounterModel = require_counterModel();
  var CounterView = require_counterView();
  var model = new CounterModel();
  var view = new CounterView(model);
  view.display();
})();
