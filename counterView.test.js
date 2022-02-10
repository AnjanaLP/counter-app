/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const CounterModel = require('./counterModel');
const CounterView = require('./counterView');


describe('CounterView class', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  it('initially displays 0', () => {
    const model = new CounterModel();
    const view = new CounterView(model);
    view.display();

    expect(document.querySelector('#counter').innerText).toBe(0);
  });

  it('clicking on the increment button once displays 1', () => {
    const model = new CounterModel();
    const view = new CounterView(model);

    document.querySelector('#increment-btn').click();
    view.display();

    expect(document.querySelector('#counter').innerText).toBe(1);
  });

  it('clicking on the increment button 10 times displays 10', () => {
    const model = new CounterModel();
    const view = new CounterView(model);

    for (let i = 0; i < 10; i++) {
      document.querySelector('#increment-btn').click();
    }

    view.display();

    expect(document.querySelector('#counter').innerText).toBe(10);
  });
});
