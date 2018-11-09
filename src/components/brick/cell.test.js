import Cell, { CLOCK } from './cell';
import * as Api from '../../api/index';

import demo from '../../public/data/demo.json';

Api.project.add({test:1});

window[CLOCK] = 0;
const cell = new Cell(demo);

function tick() {
  window[CLOCK]++;
  console.log('== output ==', cell.output());
}

describe('cell.js', () => {

  it('test-1', () => {
    console.log('-- cell --', cell);
    tick();
    expect(1).toBe(1);
  });
});
