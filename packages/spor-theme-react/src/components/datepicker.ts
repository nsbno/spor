import {ComponentMultiStyleConfig} from "@chakra-ui/react";
import {anatomy} from "@chakra-ui/theme-tools";

const parts = anatomy("datepciker").parts('month', 'day')

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {},
  baseStyle: {
    month: {
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
  },
  sizes: {},
  variants: {}
}

export default Datepicker