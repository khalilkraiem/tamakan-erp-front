import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({label,className,fn,value,data}) {
  
  return (
    <FormControl sx={{ m: 1 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label="label"
        onChange={fn}
        className={className}
        
      >
        {data.map((elem,i)=>(
            <MenuItem key={i} value={elem}>{elem}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
