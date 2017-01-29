import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {canvas, div, input, makeDOMDriver} from '@cycle/dom';
import {makeCanvasDriver} from 'cycle-canvas';
import {rect} from 'cycle-canvas'; // Remove me!

import {handleCanvasClicks} from './intent';

const Tools = {
  circle: Symbol('circle')
}

function main(sources) {
  let points = {};
  let activeTool = Tools.circle;

  const canvasClicks$ = sources.DOM.select('#draw-area').events('click');
  const debug$ = handleCanvasClicks(canvasClicks$);

  return {
    canvas: xs.of(
      rect({
        x: 10,
        y: 10,

        width: 160,
        height: 100,

        draw: [
          {fill: 'purple'}
        ]
      })
    ),
    debug: debug$.addListener({next: () => null, error: () => null, complete: () => null})
  };
}

run (main, {
  DOM: makeDOMDriver('#app'),
  canvas: makeCanvasDriver('#draw-area', {width: 800, height: 600})
})
