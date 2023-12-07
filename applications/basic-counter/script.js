import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { setCount, startButton, pauseButton, getCount } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');
let interval$ = interval(1000);
let subscription, savedCount = 0;

start$.subscribe(startTimer);
pause$.subscribe(pauseTimer);

function startTimer() {
  if (subscription && !subscription.isStopped) return;

  subscription = interval$.subscribe(value => {
    setCount(savedCount + value);
  });
}

function pauseTimer() {
  subscription.unsubscribe();
  savedCount = getCount();
}
