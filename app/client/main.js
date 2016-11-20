import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {canvas, div, input, makeDOMDriver} from '@cycle/dom';
import {makeCanvasDriver, rect} from 'cycle-canvas';

function main(sources) {
}

run (main, {
  DOM: makeDOMDriver('#toolbar'),
  Canvas: makeCanvasDriver('#draw-area')
})
