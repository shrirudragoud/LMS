import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Radio_button_checked.module.css';
import { Radio_button_checkedIcon } from './Radio_button_checkedIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 6:381 */
export const Radio_button_checked: FC<Props> = memo(function Radio_button_checked(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Radio_button_checkedIcon className={classes.icon2} />}</div>
    </div>
  );
});
