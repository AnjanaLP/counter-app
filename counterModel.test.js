const CounterModel = require('./counterModel');

describe('CounterModel class', () => {
  const counter = new CounterModel();
  it('starts at 0', () => {
    expect(counter.count).toBe(0);
  });
});
