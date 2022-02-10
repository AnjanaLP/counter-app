class CounterView {

  constructor(model) {
    this._model = model;

    document.querySelector('#increment-btn').addEventListener('click', () => {
      this._model.increment();
      this.display();
    });
  }

  display() {
    document.querySelector('#counter').innerText = this._model.getCounter();
  }
}

module.exports = CounterView;
