import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleFilledStateEnabled } from './Button_StyleFilledStateEnabled/Button_StyleFilledStateEnabled';
import classes from './Frame1.module.css';
import { Frame2 } from './Frame2/Frame2';
import { Radio_button_checked } from './Radio_button_checked/Radio_button_checked';
import { Radio_button_checkedIcon } from './Radio_button_checkedIcon';

interface Props {
  className?: string;
}
/* @figmaId 3:2 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <Frame2 />
      <div className={classes.frame3}></div>
      <div className={classes.frame4}></div>
      <div className={classes.frame5}>
        <Radio_button_checked
          className={classes.radio_button_checked}
          swap={{
            icon: <Radio_button_checkedIcon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <Button_StyleFilledStateEnabled
        className={classes.button}
        classes={{ stateLayer: classes.stateLayer }}
        text={{
          labelText: <div className={classes.labelText}>New Chat</div>,
        }}
      />
      <Button_StyleFilledStateEnabled
        className={classes.button2}
        classes={{ stateLayer: classes.stateLayer2 }}
        text={{
          labelText: <div className={classes.labelText2}>New Chat</div>,
        }}
      />
      <div className={classes.frame6}></div>
      <div className={classes.frame7}></div>
    </div>
  );
});
