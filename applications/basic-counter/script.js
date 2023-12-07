import { fromEvent, interval, skipUntil } from 'rxjs';
import { pauseButton, setCount, startButton } from './utilities';
import { takeUntil } from 'rxjs/operators';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');
const interval$ = interval(1000).pipe(
  skipUntil(start$),
  takeUntil(pause$),
);

interval$.subscribe(setCount);
