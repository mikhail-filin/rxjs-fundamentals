import { fromEvent, interval, merge, NEVER, startWith, switchMap } from 'rxjs';
import { pauseButton, setCount, startButton } from './utilities';
import { mapTo, scan } from 'rxjs/operators';

const start$ = fromEvent(startButton, 'click')
  .pipe(mapTo(true));
const pause$ = fromEvent(pauseButton, 'click')
  .pipe(mapTo(false));
const interval$ = merge(start$, pause$).pipe(
  switchMap((isRunning) => {
    return isRunning ? interval(1000) : NEVER;
  }),
  scan((acc) => acc + 1, 0)
)

interval$.subscribe(setCount);
