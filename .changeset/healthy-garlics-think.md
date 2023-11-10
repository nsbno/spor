---
"@vygruppen/spor-react": major
---

This major version removes a bunch of deprecated properties, and revamps our Datepicker component.

To migrate, please follow the following instructions:

DatePicker, DateRangePicker: `variant="simple"` and `variant="with-trigger"` has been removed (without a deprecation warning – sorry! 🙈). In their place, you'll find "base", "floating" and "ghost".

Button: The deprecated `variant="tertiary" is removed. To migrate, use `variant="secondary"` instead.

TextLink: The deprecated `variant="tertiary" is removed. To migrate, use `variant="secondary"` instead.

FloatingActionButton: The deprecated variants "green", "light" and "dark" are deprecated. To migrate, use "accent" for all three versions.

Tabs: The deprecated color schemes "dark", "light", "green" and "grey" are all removed. For "dark" and "green", please use "accent". For "light" and "grey", please use "default"
