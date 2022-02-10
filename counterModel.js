class CounterModel {
  constructor() {
    this._counter = 0;
  }

  getCounter() {
    return this._counter;
  }

  increment() {
    this._counter += 1;
  }
}

module.exports = CounterModel;
