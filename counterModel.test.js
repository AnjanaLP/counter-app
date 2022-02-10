const CounterModel = require('./counterModel');

describe('CounterModel class', () => {

  it('starts at 0', () => {
    const counter = new CounterModel();
    expect(counter.count).toBe(0);
  });
});
