import React, { memo, ReactElement, useState } from 'react';

import { AutoComplete, Button } from 'antd';

import style from './AutoCompleteWithButton.module.sass';
import { AutoCompleteWitButtonType } from './types/AutoCompleteWitButtonType';

import { isCategory } from 'utils';

export const AutoCompleteWithButton = memo(
  ({
    textButton,
    options,
    callback,
    placeholder,
    disabled,
  }: AutoCompleteWitButtonType): ReactElement => {
    const [value, setValue] = useState('');
    const disabledButton = isCategory(value, options);
    const onChangeName = (valueChange: string): void => {
      setValue(valueChange);
    };

    const onClick = (): void => {
      callback(value);
      setValue('');
    };

    return (
      <div className={style.wrapper}>
        <AutoComplete
          className={style.item}
          options={options.map(option => ({ value: option }))}
          placeholder={placeholder}
          onChange={onChangeName}
          disabled={disabled}
        />
        <div className={style.label}>{textButton}</div>
        <Button
          className={style.item}
          type="primary"
          onClick={onClick}
          disabled={disabledButton || disabled}
        >
          {textButton}
        </Button>
      </div>
    );
  },
);
