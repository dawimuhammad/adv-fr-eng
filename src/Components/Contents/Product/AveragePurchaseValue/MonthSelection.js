import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import IconArrowSvg from './IconArrowSVG';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 3px #0000000D',
    border: '1px solid #D7DAE2',
    padding: '10px 26px 10px 12px',
    left: '45px',
    top: '1px',
    color: '#4D4F5C',
    fontSize: '14px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  }
}))(InputBase);

const SelectPeriodAvg = () => {
  const [apvalue, setAPValue] = useState(1);
  const handleChange = (event) => {
    setAPValue(event.target.value);
  };

  return (
    <FormControl style={{ marginRight: "20px" }}>
      <NativeSelect
        id="input-select-average-purchase-value"
        value={apvalue}
        IconComponent={IconArrowSvg}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option value={1}>Last Months</option>
        <option value={3}>Last 3 Months</option>
        <option value={6}>Last 6 Months</option>
        <option value={12}>Last 12 Months</option>
      </NativeSelect>
    </FormControl>
  )
};

export default SelectPeriodAvg;