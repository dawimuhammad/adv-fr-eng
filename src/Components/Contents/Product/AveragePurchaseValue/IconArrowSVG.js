import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconArrowSvg = () => {
  return (
    <IconButton aria-hidden="true">
      <SvgIcon>
        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </SvgIcon>
    </IconButton>
  )
};

export default IconArrowSvg;