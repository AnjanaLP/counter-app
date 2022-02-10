const CounterModel = require('./counterModel');

describe('CounterModel class', () => {

  it('starts at 0', () => {
    const model = new CounterModel();
    expect(model.getCounter()).toBe(0);
  });

  it('incrementing once increases the counter by 1', () => {
    const model = new CounterModel();
    model.increment();

    expect(model.getCounter()).toBe(1);
  });

  it('incrementing 10 times increases the counter by 10 ', () => {
    const model = new CounterModel();

    for (let i = 0; i < 10; i++) {
      model.increment();
    }

    expect(model.getCounter()).toBe(10);
  });

  it('decrementing once decreases the counter by 1', () => {
    const model = new CounterModel();
    model.increment();
    model.increment();
    model.decrement();

    expect(model.getCounter()).toBe(1);
  });

  it('decrementing 10 times decreases the counter by 10', () => {
    const model = new CounterModel();
    for (let i = 0; i < 20; i++) {
      model.increment();
    }

    for (let i = 0; i < 10; i++) {
      model.decrement();
    }

    expect(model.getCounter()).toBe(10);
  });
});
