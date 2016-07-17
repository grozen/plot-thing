import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {div, input, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  return {
    DOM: xs.of(div(["Look at this divness"]))
  }
}

run (main, {
  DOM: makeDOMDriver('#app')
})
