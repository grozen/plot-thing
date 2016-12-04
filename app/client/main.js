import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {canvas, div, input, makeDOMDriver} from '@cycle/dom';
import {makeCanvasDriver, rect} from 'cycle-canvas';

const Tools = {
  circle: Symbol('circle')
}

function main(sources) {
  points = {};
  activeTool = Tools.circle;

  handleCanvasClicks(sources.canvas);
}

run (main, {
  DOM: makeDOMDriver('#toolbar'),
  canvas: makeCanvasDriver('#draw-area')
})
