import { fromEvent, interval, merge, NEVER, skipUntil } from 'rxjs';
import { setCount, startButton, pauseButton, getCount } from './utilities';
import { scan, takeUntil } from 'rxjs/operators';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');
const interval$ = interval(1000).pipe(
  skipUntil(start$),
  takeUntil(pause$)
).subscribe((value) => {
  setCount(value);
});
