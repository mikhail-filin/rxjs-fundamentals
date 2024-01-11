import { of, from, interval, fromEvent, merge, NEVER } from 'rxjs';
import { pluck, concatMap, take, map, mergeMap } from 'rxjs/operators';

import {
  getCharacter,
  render,
  startButton,
  pauseButton,
  setStatus,
} from './utilities';

const character$ = of(1,2,3,4).pipe(
  mergeMap((n) => from(getCharacter(n)).pipe(pluck('name')))
);

character$.subscribe(render);
