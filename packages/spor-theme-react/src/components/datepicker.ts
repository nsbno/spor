import {ComponentMultiStyleConfig} from "@chakra-ui/react";
import {anatomy, PartsStyleObject} from "@chakra-ui/theme-tools";

const parts = anatomy("datepicker").parts('calendar', 'label', 'weekendLabel', 'button')

const baseStyle: PartsStyleObject<typeof parts> = {
  calendar: {
    borderRadius: 'md',
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    height: "348px",
    width: "375px"
  },
  label: {
    fontWeight: 'bold',
    color: 'alias.darkGrey',
  },
  weekendLabel : {
    fontWeight: 'bold',
    color: 'alias.greenHaze',
  },
  button: {
    backgroundColor: 'alias.white',
    color: 'alias.darkGrey',
    borderRadius: '50%',
    height: '36px',
    width: '36px',
    _hover: {
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'alias.osloGrey',
    },
    _focus: {
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'alias.greenHaze',
    },
    _active: {
      backgroundColor: 'alias.mint'
    },
  }
};
const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {},
  baseStyle: baseStyle,
  sizes: {},
  variants: {}
}

export default Datepicker