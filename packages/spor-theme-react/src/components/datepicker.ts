import {ComponentMultiStyleConfig} from "@chakra-ui/react";
import {anatomy, PartsStyleObject} from "@chakra-ui/theme-tools";

const parts = anatomy("datepicker").parts('calendar', 'weekdayLabel', 'weekendLabel', 'day')

const baseStyle: PartsStyleObject<typeof parts> = {
  calendar: {
  },
  weekdayLabel: {
    fontWeight: 'bold',
    color: 'alias.darkGrey',
  },
  weekendLabel : {
    fontWeight: 'bold',
    color: 'alias.greenHaze',
  },
  day: {
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
    _selected: {
      backgroundColor: 'alias.darkTeal'
    }
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