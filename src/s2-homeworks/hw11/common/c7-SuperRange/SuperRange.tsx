import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type Props = {
  value: number | number[];
  onChange: (event: Event, value: number | number[]) => void;
} & SliderProps;

const SuperRange = ({ value, onChange, ...rest }: Props) => {
    return (
        <Slider
          value={value}
          onChange={onChange}
          {...rest}
          sx={{
            width: '200px',
            marginLeft: '10px',
            ...rest.sx,}
          } // Добавляем дополнительные стили
        />
    )
}

export default SuperRange
