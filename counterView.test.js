/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const CounterModel = require('./counterModel');
const CounterView = require('./counterView');


describe('CounterView class', () => {

  it('initially displays 0', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new CounterModel();
    const view = new CounterView(model);
    view.display();
    
    expect(document.querySelector('#count').innerText).toBe(0);
  });
});
