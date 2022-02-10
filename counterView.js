class CounterView {

  constructor(model) {
    this._model = model;
  }

  display() {
    document.querySelector('#count').innerText = this._model.count;
  }

}

module.exports = CounterView;
