import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 6:8 */
export const Frame2: FC<Props> = memo(function Frame2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame4}></div>
      <div className={classes.frame5}></div>
      <div className={classes.frame6}></div>
    </div>
  );
});
