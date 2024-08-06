import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleFilledStateEnabled.module.css';

interface Props {
  className?: string;
  classes?: {
    stateLayer?: string;
    root?: string;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 6:471 */
export const Button_StyleFilledStateEnabled: FC<Props> = memo(function Button_StyleFilledStateEnabled(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
        {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText}>Label</div>}
      </div>
    </button>
  );
});
