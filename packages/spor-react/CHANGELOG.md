# @vygruppen/spor-react

## 9.16.0

### Minor Changes

- f7c43e4: Combobox & ListBox: Add semantics for accessibility

## 9.15.0

### Minor Changes

- 9fb5ab7: Remove Pride design

## 9.14.1

### Patch Changes

- c71b156: Vertical align for infoselect

## 9.14.0

### Minor Changes

- 4481b5a: Add logo file for Cargonet
- 98968e7: FullScreenDrawer: Added back button as default view. Title gets more space on mobile.

## 9.13.3

### Patch Changes

- bec48fc: Add font-family to global CSS file
- e606bf3: RadioCardGroup & RadioCard: Add documentation for props

## 9.13.2

### Patch Changes

- 59c1cc8: RadioCard: Fix accessibility features
- 4aa7c96: Added body prop for FullScreenDrawer and SimpleDrawer for accessability reasons

## 9.13.1

### Patch Changes

- 366d1f9: Adds onChange and fixes bug on RadioCard

## 9.13.0

### Minor Changes

- 5d80df3: Updated packages

### Patch Changes

- Updated dependencies [5d80df3]
  - @vygruppen/spor-design-tokens@3.7.0
  - @vygruppen/spor-icon-react@3.9.0

## 9.12.0

### Minor Changes

- 892067c: Update RadioCard to support accessibility and more styling

## 9.11.4

### Patch Changes

- 99eba82: Clean up colors with mode and px to rem

## 9.11.3

### Patch Changes

- c644d2e: Bump versions

## 9.11.2

### Patch Changes

- 2de6b4d: Remove type declaration

## 9.11.1

### Patch Changes

- 33a6ee0: Update versions and add types for modules

## 9.11.0

### Minor Changes

- 4129826: Added support for Pride colors for VyDigital theme

## 9.10.1

### Patch Changes

- 47c0496: Changed icons used in MediaController component

## 9.10.0

### Minor Changes

- c29f006: Fixed crusial error with RadioCard and updated styling.
- c29f006: Fix values on PressableCard

### Patch Changes

- Updated dependencies [c29f006]
  - @vygruppen/spor-design-tokens@3.6.1

## 9.9.0

### Minor Changes

- 70e5a92: InfoSelect: bugfixes. #1043
- d4f8abf: Added possibility for title with ClosableAlert and StaticAlert. Some minor bugfixes with colors on darkmode.

### Patch Changes

- 0baf753: PressableCard: Make variant optional. Fix background on darkmode.

## 9.8.3

### Patch Changes

- 50a42b2: Fix render of RadioCardGroup and RadioCard
- 72afbd7: Removed static values Table styles

## 9.8.2

### Patch Changes

- 5503c91: Fixes on new Cards
  - Make PressableCard more scalable (removed as)
  - Edit "white" colorScheme on StaticCard to support darkmode

## 9.8.1

### Patch Changes

- 6852a42: Update docs for PressableCard and RadioCard

## 9.8.0

### Minor Changes

- 37c8580: Card is deprecated

  - Update styling for PressableCard
  - Update styling for StaticCard
  - Make Card deprecated, is replaced by the above components

## 9.7.0

### Minor Changes

- a3d2ca4: New component: RadioCard & RadioCardGroup

  - Should be used togehter for optimal functionality

### Patch Changes

- eade049: Remove vertical align from table. Can be added manually if other value is needed.

## 9.6.5

### Patch Changes

- 50935a3: Added dark color variants to static card

## 9.6.4

### Patch Changes

- 457fd2a: Stop Card from disregarding allowed styling related props

## 9.6.3

### Patch Changes

- d998cb8: Improve layout of tables when content overflow and in responsive views

## 9.6.2

### Patch Changes

- f5c9213: Added pressable card, small changes to default color in static card and bumped package version

## 9.6.1

### Patch Changes

- b83b35f: Require minimum versions of spor dependencies

## 9.6.0

### Minor Changes

- 074a3d3: Added pressable card, and small changes to default color in static card

### Patch Changes

- 0def6ed: remove pressable card

## 9.5.0

### Minor Changes

- 03f9162: ## New component update

  New component for Pagination has been added.

### Patch Changes

- 4a4f271: Added missing floating background color and floating border to datepicker.

## 9.4.1

### Patch Changes

- 043fc98: All text tokens are now using rem instead of px
- Updated dependencies [7c6c056]
- Updated dependencies [e9dfee0]
  - @vygruppen/spor-design-tokens@3.5.4

## 9.4.0

### Minor Changes

- 8a0e47b: Added static card
- 18ffc37: FullScreenDrawer: New component for lots of inline information

### Patch Changes

- cb05030: ComboBox: Fix a bug where left icons didn't work as expected.

## 9.3.0

### Minor Changes

- d660370: CardSelect: Add fontWeight prop

### Patch Changes

- 7838d12: Removed baseBackground from base variant on most of the components.
- 162650e: CardSelect: Improve JSDoc
- Updated dependencies [df1ae12]
  - @vygruppen/spor-design-tokens@3.5.3

## 9.2.1

### Patch Changes

- c82f7eb: Set the text color of card selects"
- Updated dependencies [c82f7eb]
  - @vygruppen/spor-design-tokens@3.5.2

## 9.2.0

### Minor Changes

- 8568d79: CardSelect: Add support for not having a visual label, by passing in aria-label instead of label prop

### Patch Changes

- 84b4bbf: Change the way cards and card selects are rendered
- Updated dependencies [84b4bbf]
  - @vygruppen/spor-design-tokens@3.5.1

## 9.1.0

### Minor Changes

- 6fe2534: Add support for Brand.CargoNet

### Patch Changes

- Updated dependencies [6fe2534]
  - @vygruppen/spor-design-tokens@3.5.0

## 9.0.3

### Patch Changes

- 51ff0e7: Card: Fix wrong colors on white card outlines in dark mode

## 9.0.2

### Patch Changes

- 6bd954e: Use CSS variable to avoid possible nullpointer"

## 9.0.1

### Patch Changes

- ce90ed5: Use the newest version of our design tokens
- Updated dependencies [d2cc084]
  - @vygruppen/spor-design-tokens@3.4.0

## 9.0.0

### Major Changes

- e4945e6: ### Major Changes

  There was a need to change some sizing props to be consistent through the designsystem.

  Sizes that used to be "sm, md, lg, xl" are now "xs, sm, md, lg".

  To migrate, change size

  - "sm" to "xs",
  - "md" to "sm",
  - "lg" to "md",
  - and "xl" to "lg".

  Affected components are:

  - ChoiceChip
  - Tabs

- f5194ff: Tabs: The `colorScheme` prop is removed. The `variant` prop is now either `base` or `accent`. To migrate, remove the `colorScheme` prop, and set the `variant` prop to either `base` (the default) or `accent`.

  Switch: The `variant` prop is removed. To migrate, remove the `variant` prop.

## 8.3.0

### Minor Changes

- f984752: Expandable: Add defaultOpen, isOpen and onChange props, and remove undocumented defaultIndex and index props.

  This might be breaking if you were using these props, so make sure to double check while updating.

## 8.2.1

### Patch Changes

- 6c2a831: Fixes bug where Button component did not have a default type.
- f259d1d: Checkbox: Facelift and dark mode support
  Radio: Facelift and dark mode support

## 8.2.0

### Minor Changes

- f96483c: ListBox: Fix a focus bug

### Patch Changes

- 5c87f0c: ListBox: Fix focus styles for listbox
- 7011328: TextLink: Updated colors for primary and secondary variants to align with Figma

## 8.1.0

### Minor Changes

- 3c599d7: Combobox: Add inputRef prop

### Patch Changes

- c084847: ExpandableAlerts: added new hover and active styling for this component

## 8.0.1

### Patch Changes

- 0488e4a: Tooltip, Nudge: Fix some bugs

## 8.0.0

### Major Changes

- 28af053: background.utils: updated active background for ghost

  Accordion: The variation prop has been updated. It now accepts three values: ghost, base, and floating.
  old list is now ghost,
  old outline is now base,
  old card is now floating.
  bug fixes

- e97614b: utils:
  added (accent og brand) to background, border,
  added text

  choiceChip:

  - We have renamed the variant prop to chipType. This prop now accepts three values: choice, icon, and filter.
    Please update your components to use chipType instead of variant.
  - We have introduced a new variant prop. This prop accepts three values: base, accent, and floating.
    You can use this prop to change the appearance of the ChoiceChip.
  - We have added a new disabled prop. You can use this prop to disable the ChoiceChip. When disabled is true, the ChoiceChip will be grayed out and won't respond to user interactions.
    Please update your components to use these new props and options. If you have any questions or run into any issues, feel free to reach out to us.

- fdd37ac: Tooltip: Change how the API works, so that it's more aligned with Nudges.

  To migrate, you need to put the content of the tooltip in the `content` prop. The `triggerElement` prop is now renamed to `children`, so you can wrap whatever should trigger your tooltip in the `Tooltip` component:

  ```tsx
  <Tooltip content="This is my tooltip">
    <IconButton
      icon={<QuestionMark24FillIcon />}
      variant="secondary"
      aria-label="What's this?"
    />
  </Tooltip>
  ```

- a31e788: Popover, PopoverWizard:

  The Popover component is now known as Nudge.
  The PopoverWizard component is now known as WizardNudge.

  The APIs have changed dramatically. Migrating shouldn't be too terrible though. Please refer to the new docs for the new ways to use it.

### Patch Changes

- 037412f: Accordion: bugfix, forgot to change to the new names

## 7.2.2

### Patch Changes

- a36e39c: Lower the zIndex of form error messages

## 7.2.1

### Patch Changes

- a3159e5: Stepper: Change input to onBackButtonClick

## 7.2.0

### Minor Changes

- 672d254: Heading: New prop "autoId" lets you autogenerate an ID based on the content
  slugify: New export that lets you slugify a string

## 7.1.1

### Patch Changes

- 10fbe0c: fix issue where icons are not vertically aligned in button component

## 7.1.0

### Minor Changes

- cd07ee5: Stepper: Redesign and re-implement the Stepper component.

  This change also introduces a new prop – onBackButtonClick – which is called whenever the back button is clicked on smaller screen. It receives a boolean argument outlining whether or not the current step is the first one or not. If you don't pass this prop, the back button will be hidden on the first step.

## 7.0.1

### Patch Changes

- 1e960e1: Button, FAB: Tweak disabled state
- a7590c8: ProgressIndicator: Change colors of inactive dots
- 0ccf0c5: Stepper: Change the breakpoint for when the stepper changes from one design to another

## 7.0.0

### Major Changes

- 6e1c175: New focus styles!

  This release simplifies our focus styles a bunch, making it easier to use our components with your keyboard or other assistive technologies.

  The change isn't breaking per-se, but it's a pretty big visual change, so you might want to look through your application before you upgrade.

### Patch Changes

- 78b1cd0: Button: Make the text centered when the width is full

## 6.2.3

### Patch Changes

- b3b8e17: Added missing semicolon to font-faces

## 6.2.2

### Patch Changes

- d14a70f: Button: Fix bug with broken buttons when there were links

## 6.2.1

### Patch Changes

- e97dddd: Card, NumericStepper: Fix a bug with the focus styles that showed up when it shouldn't have.

  DatePicker, DateRangePicker: Fix a bug where you wouldn't automatically jump to the next field once a field was filled out

## 6.2.0

### Minor Changes

- 51b98a9: LineTag, TravelTag, LineIcon: Add new variant="custom" option.

  This new variant lets you specify custom foreground and background colors, as well as an icon variant.

- 5c729e5: Button: The Button component is all new and shiny – and with no breaking changes at all. However, since the implementation is completely different, you might want to double check that everything looks as it should.

  A new feature is that the right icon is now always right aligned, which makes this component much more versatile than before. The variant="control" is now deprecated as well.

## 6.1.0

### Minor Changes

- 81e1ae6: cardselect: removed some code by mistake, adding it back in

## 6.0.0

### Major Changes

- d8be7e4: CardSelect: _Breaking change_: We have changed some variant prop names, so it's aligned with the rest of the design system.
  To migrate,. old "outline" has become "base" and old "card" is now "floating".

## 5.5.0

### Minor Changes

- 9be3b2c: cardSelect: darkmode quick fix for background color

### Patch Changes

- 762592e: Breadcrumb: Fixed a darkmode bug where the arrow icons between crumbs were always black

## 5.4.0

### Minor Changes

- 3781bb2: CardSelect: added dark mode update and new prop for background also changed outline to base and card to float in variants

## 5.3.0

### Minor Changes

- 2559f03: ProgressIndicator: Brand new component for showing progress across multiple steps
- fc1b71d: DateRangePicker: Make full date range type nullable in onChange

### Patch Changes

- e0703c8: InfoSelect: Fixes colors slightly to adhere to intended design
  SporProvider: Added brand-prop to select brand theme customizations
- a5b9922: ProgressIndicator: Remove ProgressDot import, as it wasn't meant for public exposure.
- 9d31d59: general: Fix a bug with brand styles overriding all colors

## 5.2.0

### Minor Changes

- 54c05a9: DatePicker, DateRangePicker, TimePicker: Add null as an onChange value

### Patch Changes

- 18fb096: NumericStepper: Fixed the Icon-color for NumericStepper on dark mode

## 5.1.1

### Patch Changes

- 9b62a230: Change color of listbox from mint to green

## 5.1.0

### Minor Changes

- a16a9972: Expose new methods and components from Chakra:

  - defineStyleConfig
  - Collapse
  - useSize
  - ComponentStyleConfig (type)
  - CSSWithMultiValues (type)

### Patch Changes

- f3394fb3: DatePicker: Fix bug where field went from uncontrolled to controleld
- 1a6eb2f8: TimePicker: Allow for null values (so the time can be reset)
- 6043ebfb: Button, IconButton: Fix a bug that broke loading states

## 5.0.0

### Major Changes

- 24963270: Breaking: Rename <Button variant="additional" /> to <Button variant="tertiary" />

  Due to a… minor screwup on ~our~ @selbekk's side, we deprecated the wrong name earlier on.

  To mitigate my screwup, please search through your code base for "additional", and replace it with "tertiary". It should be a simple enough upgrade. Make sure to do this with all Button and IconButton components.

  Sorry. - @selbekk.

### Patch Changes

- 799d47bb: Button: bugfix changed primary button color to pine

## 4.1.1

### Patch Changes

- 85264001: DatePicker, DateRangePicker: Upgrade dependencies

## 4.1.0

### Minor Changes

- 84ba515b: Card: Add a new colorScheme – "red". This is great for showing erronous stuff.
- b411b6b0: PhoneNumberInput: Add label prop

### Patch Changes

- 77e31ebc: Button: Fix a bug where certain variants got the wrong colors in dark mode
- d5ad66c1: Format all code and content with Prettier
- d3ae50b2: spinner: added darkmode for Darkspinner
- fc6371c1: Stepper: added dark mode
- Updated dependencies [4ac80a10]
- Updated dependencies [d5ad66c1]
- Updated dependencies [9cf88825]
- Updated dependencies [cec9b038]
  - @vygruppen/spor-icon-react@3.4.0
  - @vygruppen/spor-design-tokens@3.3.0

## 4.0.3

### Patch Changes

- 1cd9939e: TimePicker: Make defaultValue=null a valid value
- 8b4ab3ac: spinner: added darkmode for Darkspinner

## 4.0.2

### Patch Changes

- 0f59ee68: InfoSelect: Added dark mode
- 573f649a: Input, PasswordInput, SearchInput, InfoSelect, NativeSelect: Tweak disabled state styling.
- d9c2de51: docs: update links
- 0cc70e7e: Fix some issues with the styling of lists"

## 4.0.1

### Patch Changes

- 0450ca0a: DatePicker, DateRangePicker: Fix visual regressions

## 4.0.0

### Major Changes

- 8d9d381c: This major version removes a bunch of deprecated properties, and revamps our Datepicker component.

  To migrate, please follow the following instructions:

  DatePicker, DateRangePicker: `variant="simple"` and `variant="with-trigger"` has been removed (without a deprecation warning – sorry! 🙈). In their place, you'll find "base", "floating" and "ghost".

  Button: The deprecated `variant="tertiary" is removed. To migrate, use `variant="secondary"` instead.

  TextLink: The deprecated `variant="tertiary" is removed. To migrate, use `variant="secondary"` instead.

  FloatingActionButton: The deprecated variants "green", "light" and "dark" are deprecated. To migrate, use "accent" for all three versions.

  Tabs: The deprecated color schemes "dark", "light", "green" and "grey" are all removed. For "dark" and "green", please use "accent". For "light" and "grey", please use "default"

### Minor Changes

- 8d9d381c: Add new Portal component

### Patch Changes

- 7b828801: Drawer: added dark mode support
- 342931bc: Popover: Add dark mode support

## 3.8.1

### Patch Changes

- c1e025e0: Card: add support for clickable labels, and .is-clickable override

## 3.8.0

### Minor Changes

- d709b8b0: NumericStepper: Add two new props – `stepSize` (which sets the number to increment at a time) and `showZero` ( which decides whether you should show the digit 0 when the count is 0)

### Patch Changes

- bd1d64b1: close-button: added dark mode
- c999ff24: DatePicker: add new variations, dark mode and deprecated some old designs
- 8c44575c: General: Downgrade framer-motion because of race condition bug
- edb3b106: Modal: Add Dark Mode support

## 3.7.7

### Patch Changes

- 2ffdd3b7: Tabs: changed from default to base
- d12c315d: travelTag: add support for dark mode
- b6884fa6: Tabs: Update variants and design for tabs
- fb6605c6: Card: Add dark mode support
- 4c078f92: Design tokens: Change the color for lokalbuss
  InfoTag: Add dark mode support
- eaf12b4b: Link: Add dark mode support
- e103af4b: Button: Make buttons break on several lines if there isn't space
- bc846dd5: Fab:Add dark mode support
- Updated dependencies [4c078f92]
  - @vygruppen/spor-design-tokens@3.2.1

## 3.7.6

### Patch Changes

- 9e78f2f0: BreadcrumbLink: Fix a bug where the current page got a different amount of padding than other breadcrumbs

## 3.7.5

### Patch Changes

- fde28bf1: Input: Changed active-color to mint for light mode
- 6778a4cf: Breadcrumb: Fix focus
- e9fdce39: Fix bug where you couldn't use FAB as a link

## 3.7.4

### Patch Changes

- 637d713b: Accordion, ExpandableItem: Set the correct minimum height
- 75971916: Dark mode support for Accordion
- 6854e54a: Updated buttons to support dark mode with some minor touch ups to the current styles.
  Variant `tertiary`-buttons are now deprecated as we are updating our visual structure
  with a more minimalistic selection; please use `secondary` instead.
- 1a88ad5a: Tweaked ChoiceChip colors, and added dark mode
- e48e91d5: Breadcrumb: Add dark mode support
- 5012de56: FloatingActionButton: Make the isTextVisible prop work as expected

## 3.7.3

### Patch Changes

- 05f55861: Updated styles for TextLink, and added dark mode support.
  Variant `tertiary` is now deprecated as we are updating our visual structure
  with a more minimalistic selection; please use `secondary` instead.
- 6cef81ca: Add font family to list and accordion button

## 3.7.2

### Patch Changes

- 0e5ef35c: Adjust active color on Ghost-btn and add dark mode to Floating-btn
- bd1c6655: Added missing colors for Input in darkmode
- Updated dependencies [88d6fc75]
  - @vygruppen/spor-icon-react@3.3.0

## 3.7.1

### Patch Changes

- eb87e2ee: Global color supports both light and dark ColorMode
- 9358f2a3: Add fallback for fonts"

## 3.7.0

### Minor Changes

- 3b6597ae: Add new components – UnorderedList, OrderedList and ListItem

### Patch Changes

- 6d1b0a5e: Datepicker, Timepicker: Use regular font for numbers"

## 3.6.1

### Patch Changes

- 6fc147dc: Breadcrumb: Ensure the breadcrumbs scale correctly

## 3.6.0

### Minor Changes

- 8d2cf4d3: Divider: Implement size and variant props

### Patch Changes

- 1d30e122: Icons: Re-add viewBox prop to all icons, making them scalable
  ExpandableAlert: Ensure the text size is equal across title and content
- Updated dependencies [1d30e122]
  - @vygruppen/spor-icon-react@3.2.3

## 3.5.2

### Patch Changes

- cfa3ebb1: ExpandableAlert: Fix double padding bug
  Other:

  - Set the document-level line height to a valid value
  - Fix a bug with icon generation

- Updated dependencies [cfa3ebb1]
  - @vygruppen/spor-icon-react@3.2.2

## 3.5.1

### Patch Changes

- 6ca2f865: Update internal dependencies"
- 01f4a68c: FloatingActionButton: Enable server rendering
- Updated dependencies [6ca2f865]
  - @vygruppen/spor-icon-react@3.2.1
  - @vygruppen/spor-loader@0.3.2

## 3.5.0

### Minor Changes

- e05d6093: New components: Breadcrumb, BreadcrumbItem and BreadcrumbLink

## 3.4.4

### Patch Changes

- 548d9b9f: Input: Make hover-effect work as expected over icons

## 3.4.3

### Patch Changes

- 6a74c8ab: Change when we use desktop font sizes

## 3.4.2

### Patch Changes

- f5fb6ae6: Card: Improve the way card outlines are generated
- 5b33fdc5: Card: Correct the colors of white cards

## 3.4.1

### Patch Changes

- 83976e0a: Card: Fix a bug with clickable cards that had to have the display property set to not break
- 4787d9e9: Hotfix breakpoints

## 3.4.0

### Minor Changes

- 349fe0a5: Implement new breakpoint structure

  This change introduces a new breakpoint between sm and md, and changes the breakpoint values slightly.

  When upgrading, please make sure to check your responsive layouts.

### Patch Changes

- b18e847b: Card: Update design for non-interactive cards
- Updated dependencies [349fe0a5]
  - @vygruppen/spor-design-tokens@3.2.0

## 3.3.4

### Patch Changes

- afebaf34: Override minimum left padding in ComboBox and InfoSelect popovers
- 309d4e18: Change type of calendar trigger button to "button"
- 2c7f2004: IconButton: Add missing floating variant
- Updated dependencies [9f84f18f]
  - @vygruppen/spor-icon-react@3.2.0

## 3.3.3

### Patch Changes

- 3a95bedd: Accordion: Make the text size responsive

## 3.3.2

### Patch Changes

- 1209e991: Add workaround for click throughs on mobile devices in CalendarCell and ListBox

## 3.3.1

### Patch Changes

- 07066ecb: Make font size in DateTime dynamic.
- 160c0566: Improve accessibility for DatePicker

## 3.3.0

### Minor Changes

- 81c256bc: Accordion: Add new prop "spacing" for adding spacing between items.
  Accordion: Do some design tweaks

## 3.2.0

### Minor Changes

- 37b40a9b: Adds withInput prop to numericStepper

## 3.1.2

### Patch Changes

- a19a1e80: Heading: Fix a bug with variants

## 3.1.1

### Patch Changes

- ffaf999e: Add the possibility to not use overlay in PopOver.
- fc9d0b88: Fix paddings and text color in DatePicker and TimePicker
- 81aed3c7: Fix Expandable title
- dec74c7d: Update react-aria
- 615e1a46: Propagate Box props through ExpandableAlert

## 3.1.0

### Minor Changes

- a522876f: Adds floating label variant on TextArea

### Patch Changes

- 003cefc9: Combobox: Fix some behavioral issues with opening and closing
- 0a6ddedb: SkeletonText: export props directly from Chakra

## 3.0.4

### Patch Changes

- 6cbe41ca: Combobox: Remove popover backdrop
- 3d852b87: Datepicker: Add ref support

## 3.0.3

### Patch Changes

- 7e9b8990: DatePicker, TimePicker: Use cursor: text; everywhere inside of the date input field
- 7e9b8990: Combobox: Make padding-right apply to the loading indicator as well

## 3.0.2

### Patch Changes

- ed4dc214: NumericStepper: Make label work as "add one" button if the value is zero
- 0e951ddf: Input: Display text cursor for form labels inside of inputs.

## 3.0.1

### Patch Changes

- 828e4f38: Fix a typing issue with Heading

## 3.0.0

### Major Changes

- d0f0c5ff: Remove deprecated components SelectItem, SelectItemLabel and SelectItemDescription.

  To migrate, use Item, ItemLabel and ItemDescription, respectively.

- 6c1f3d08: Heading: Make `as` prop required

  This is a breaking change. Previously, this defaulted to "h2". Go through all usages and add `as="h1"` or whatever is correct for your context.

### Patch Changes

- 08b926e3: DatePicker: Make it possible to override width of datepicker

## 2.5.3

### Patch Changes

- 2481b7f5: Use correct cursor for listbox items

## 2.5.2

### Patch Changes

- a884fea5: Combobox: Make the width of the attached listbox never outgrow its input field

## 2.5.1

### Patch Changes

- 28a772f4: Datepicker, Timepicker: Changed color to meet contrast minimum requriement
- f49fa9d2: TimePicker: Fixes typing bug in onChange prop
- 643afb0d: Combobox: Fix glitchy loading state

## 2.5.0

### Minor Changes

- 042dba35: Make accordions and cards default to the sm size

### Patch Changes

- f9d6bd34: Combobox: Fix a bug where menuTrigger="focus" wouldn't work
- 76914a15: Remove non-working Autosuggest component

## 2.4.3

### Patch Changes

- 5640417f: Autosuggest: Fix a bug where the onSelectionChanged was called with no item on nested lists

## 2.4.2

### Patch Changes

- a5f843bc: Autosuggest: Return the entire item selected, not just the list

## 2.4.1

### Patch Changes

- 3dfeccd7: Add some spacing and styling props to both Combobox and Autosuggest

## 2.4.0

### Minor Changes

- 7d5fc2e8: Add Combobox and Autosuggest components

### Patch Changes

- 062a4e70: Change the placement of the FormErrorMessage relative to the input fields they address.

## 2.3.4

### Patch Changes

- 517c5aad: Fix an issue with the onChange handler for NumericStepper and PhoneNumberInput

## 2.3.3

### Patch Changes

- 8f76c59f: Implement all of i18n locally instead of using an external library.

  This also adds support for nested hierarchies of keys, as well as fetching the current language through the useTranslation hook

## 2.3.2

### Patch Changes

- 785671da: NumericStepper: Hide the input field / numeric value if the value is zero (0)

## 2.3.1

### Patch Changes

- bab5015d: Rename Counter to NumericStepper before anyone gets to use it

## 2.3.0

### Minor Changes

- 7687d9a3: Add new component - Counter

### Patch Changes

- f5f641e5: Add support for dark mode for Date Picker
- 00730969: Fix a bug where the content of tabs would break onto two lines"

## 2.2.1

### Patch Changes

- 84f2911d: Improve the phone number input by only allowing digits, spaces and hyphens

## 2.2.0

### Minor Changes

- 5bd65c9e: Export some new transition components from Chakra

  This change adds the following components:

  - Fade
  - ScaleFade
  - Slide
  - SldeFade
  - Collapse

### Patch Changes

- Updated dependencies [fb1b899e]
- Updated dependencies [a520757b]
  - @vygruppen/spor-icon-react@3.1.0
  - @vygruppen/spor-design-tokens@3.1.1

## 2.1.2

### Patch Changes

- e405193d: Address some feedback from real life usage

## 2.1.1

### Patch Changes

- 0559a3f9: Fix broken dependency

## 2.1.0

### Minor Changes

- 29ace9be: Add new components – PhoneNumberInput and AttachedInputs

### Patch Changes

- 08cf2ccc: Set the correct text size on all inputs and selects
- Updated dependencies [f48edb9f]
  - @vygruppen/spor-icon-react@3.0.0

## 2.0.1

### Patch Changes

- 6b3cdd17: Add `startName` and `endName` props to `DateRangePicker` component

## 2.0.0

### Major Changes

- cdd8e1a3: Welcome to v2 of Spor!

  Spor 2.0.0 introduces a few breaking changes, but none that should take you more than a few minutes to deal with.

  The biggest change in this release, is the removal of most sub-packages. Previously, we had a package per type of component, like spor-button-react and spor-i18n-react. Now, there is only `spor-react`. Well, almost – The icons still live in `spor-icon-react`. If you've imported all your code from `spor-react`, there shouldn't be any problems.

  The design tokens were previously also exported from `spor-react` - they should now be imported from `spor-design-tokens` directly instead.

  Some deprecated components and props have also been removed or replaced:

  - `Link` is replaced by `TextLink`
  - `Select` is replaced by `NativeSelect`
  - `Spinner` is replaced by `ColorSpinner`
  - The `variant` prop is removed from `Stack`
  - The `direction` prop is replaced by `flexDirection` on `Stack`
  - The `green` and `blue` colorScheme props for `Badge` is replaced by `light-green` and `light-blue`, respectively
  - The `size` prop is removed from `Badge` (it's now automatic)
  - The `textStyle` prop is replaced by `variant` on both `Heading` and `Text`

  If you have any questions for this migration, or if you find any bugs, please let us know through GitHub issues or Slack.

## 1.3.4

### Patch Changes

- 7daa5891: Update URL for documentation website
- Updated dependencies [11acb8ec]
- Updated dependencies [7daa5891]
  - @vygruppen/spor-linjetag-react@1.0.4
  - @vygruppen/spor-media-controller-react@0.1.4
  - @vygruppen/spor-datepicker-react@1.2.5
  - @vygruppen/spor-button-react@1.1.2
  - @vygruppen/spor-input-react@1.3.5
  - @vygruppen/spor-icon-react@2.0.3
  - @vygruppen/spor-tab-react@1.0.2

## 1.3.3

### Patch Changes

- e7228767: Upgrade React Aria
- Updated dependencies [e7228767]
  - @vygruppen/spor-datepicker-react@1.2.1
  - @vygruppen/spor-input-react@1.3.4
  - @vygruppen/spor-loader-react@1.1.1

## 1.3.2

### Patch Changes

- deb3934d: Changes in the datepicker and input packages
- Updated dependencies [12202232]
- Updated dependencies [1d2de067]
- Updated dependencies [12202232]
- Updated dependencies [12202232]
- Updated dependencies [f6fec340]
- Updated dependencies [78b7dd54]
  - @vygruppen/spor-datepicker-react@1.2.0
  - @vygruppen/spor-typography-react@1.1.2
  - @vygruppen/spor-input-react@1.3.3

## 1.3.1

### Patch Changes

- 0c360f40: Bump

## 1.3.0

### Minor Changes

- 22f1772e: New hook: useToast!

### Patch Changes

- Updated dependencies [22f1772e]
  - @vygruppen/spor-toast-react@0.1.0
  - @vygruppen/spor-theme-react@1.0.9

## 1.2.0

### Minor Changes

- 1b0d28d6: Add new alert component

### Patch Changes

- Updated dependencies [9a26a7c5]
- Updated dependencies [1b0d28d6]
  - @vygruppen/spor-icon-react@1.2.0
  - @vygruppen/spor-alert-react@0.1.0
  - @vygruppen/spor-theme-react@1.0.8

## 1.1.0

### Minor Changes

- 43acbc1d: Add new package media-controller-react

### Patch Changes

- 6fd2530c: Add new package spor-util-react
- Updated dependencies [43acbc1d]
- Updated dependencies [6fd2530c]
  - @vygruppen/spor-media-controller-react@0.1.0
  - @vygruppen/spor-theme-react@1.0.3
  - @vygruppen/spor-util-react@0.1.0

## 1.0.0

### Major Changes

- e6158c62: Velkommen til den første stabile major-versjonen av Vy sitt komponentbibliotek for React - `@vygruppen/spor-react`.

  Det er kun én breaking change i denne releasen - at vi nå krever en avhengighet på React 18.2 eller høyere.

  Du kan også fjerne avhengighetene til `@chakra-ui/react`, `@emotion/*` og `framer-motion`, med mindre du bruker dem direkte.

### Patch Changes

- Updated dependencies [7e8052a8]
- Updated dependencies [e6158c62]
  - @vygruppen/spor-typography-react@1.0.0
  - @vygruppen/spor-accordion-react@1.0.0
  - @vygruppen/spor-button-react@1.0.0
  - @vygruppen/spor-card-react@1.0.0
  - @vygruppen/spor-datepicker-react@1.0.0
  - @vygruppen/spor-i18n-react@1.0.0
  - @vygruppen/spor-icon-react@1.0.0
  - @vygruppen/spor-image-react@1.0.0
  - @vygruppen/spor-input-react@1.0.0
  - @vygruppen/spor-layout-react@1.0.0
  - @vygruppen/spor-linjetag-react@1.0.0
  - @vygruppen/spor-link-react@1.0.0
  - @vygruppen/spor-loader-react@1.0.0
  - @vygruppen/spor-logo-react@1.0.0
  - @vygruppen/spor-modal-react@1.0.0
  - @vygruppen/spor-popover-react@1.0.0
  - @vygruppen/spor-provider-react@1.0.0
  - @vygruppen/spor-stepper-react@1.0.0
  - @vygruppen/spor-tab-react@1.0.0
  - @vygruppen/spor-table-react@1.0.0
  - @vygruppen/spor-theme-react@1.0.0

## 0.14.6

### Patch Changes

- Updated dependencies [09448ca8]
  - @vygruppen/spor-button-react@0.2.11
  - @vygruppen/spor-datepicker-react@0.1.9
  - @vygruppen/spor-popover-react@0.1.19
  - @vygruppen/spor-stepper-react@0.1.19

## 0.14.5

### Patch Changes

- Updated dependencies [9731b589]
  - @vygruppen/spor-design-tokens@3.0.2
  - @vygruppen/spor-theme-react@0.6.7
  - @vygruppen/spor-typography-react@0.4.9
  - @vygruppen/spor-datepicker-react@0.1.8

## 0.14.4

### Patch Changes

- Updated dependencies [1b58e2ff]
  - @vygruppen/spor-design-tokens@3.0.1
  - @vygruppen/spor-theme-react@0.6.6
  - @vygruppen/spor-typography-react@0.4.8
  - @vygruppen/spor-datepicker-react@0.1.7

## 0.14.3

### Patch Changes

- Updated dependencies [d2c64617]
  - @vygruppen/spor-design-tokens@3.0.0
  - @vygruppen/spor-datepicker-react@0.1.6
  - @vygruppen/spor-icon-react@0.6.4
  - @vygruppen/spor-layout-react@0.3.3
  - @vygruppen/spor-loader-react@0.2.4
  - @vygruppen/spor-modal-react@0.1.4
  - @vygruppen/spor-popover-react@0.1.18
  - @vygruppen/spor-provider-react@0.0.9
  - @vygruppen/spor-table-react@0.0.7
  - @vygruppen/spor-theme-react@0.6.5
  - @vygruppen/spor-typography-react@0.4.7
  - @vygruppen/spor-input-react@0.5.5
  - @vygruppen/spor-linjetag-react@0.1.1
  - @vygruppen/spor-link-react@0.1.13
  - @vygruppen/spor-stepper-react@0.1.18
  - @vygruppen/spor-card-react@0.3.2
  - @vygruppen/spor-button-react@0.2.10

## 0.14.2

### Patch Changes

- Updated dependencies [2ec31319]
  - @vygruppen/spor-theme-react@0.6.4

## 0.14.1

### Patch Changes

- Updated dependencies [12383632]
  - @vygruppen/spor-theme-react@0.6.3

## 0.14.0

### Minor Changes

- 6c05d5ac: Add new package - spor-linjetag-react

### Patch Changes

- Updated dependencies [6c05d5ac]
- Updated dependencies [13e5bd03]
- Updated dependencies [e8aaeb07]
  - @vygruppen/spor-linjetag-react@0.1.0
  - @vygruppen/spor-theme-react@0.6.2
  - @vygruppen/spor-icon-react@0.6.3
  - @vygruppen/spor-datepicker-react@0.1.5
  - @vygruppen/spor-input-react@0.5.4
  - @vygruppen/spor-link-react@0.1.12
  - @vygruppen/spor-popover-react@0.1.17
  - @vygruppen/spor-stepper-react@0.1.17

## 0.13.24

### Patch Changes

- Updated dependencies [77bf8c23]
  - @vygruppen/spor-datepicker-react@0.1.4

## 0.13.23

### Patch Changes

- Updated dependencies [8f6053e0]
- Updated dependencies [0a128d66]
  - @vygruppen/spor-theme-react@0.6.1
  - @vygruppen/spor-loader-react@0.2.3
  - @vygruppen/spor-button-react@0.2.9
  - @vygruppen/spor-datepicker-react@0.1.3
  - @vygruppen/spor-popover-react@0.1.16
  - @vygruppen/spor-stepper-react@0.1.16

## 0.13.22

### Patch Changes

- Updated dependencies [80e771e5]
- Updated dependencies [ae157f1b]
- Updated dependencies [8a170ece]
  - @vygruppen/spor-design-tokens@2.5.0
  - @vygruppen/spor-theme-react@0.6.0
  - @vygruppen/spor-modal-react@0.1.3
  - @vygruppen/spor-typography-react@0.4.6
  - @vygruppen/spor-provider-react@0.0.8
  - @vygruppen/spor-datepicker-react@0.1.2

## 0.13.21

### Patch Changes

- 4337f0f4: Make library more tree-shakeable than before
- Updated dependencies [4337f0f4]
  - @vygruppen/spor-accordion-react@0.1.4
  - @vygruppen/spor-button-react@0.2.8
  - @vygruppen/spor-card-react@0.3.1
  - @vygruppen/spor-datepicker-react@0.1.1
  - @vygruppen/spor-design-tokens@2.4.4
  - @vygruppen/spor-i18n-react@0.0.6
  - @vygruppen/spor-icon-react@0.6.2
  - @vygruppen/spor-image-react@0.1.2
  - @vygruppen/spor-input-react@0.5.3
  - @vygruppen/spor-layout-react@0.3.2
  - @vygruppen/spor-link-react@0.1.11
  - @vygruppen/spor-loader-react@0.2.2
  - @vygruppen/spor-logo-react@0.1.4
  - @vygruppen/spor-modal-react@0.1.2
  - @vygruppen/spor-popover-react@0.1.15
  - @vygruppen/spor-provider-react@0.0.7
  - @vygruppen/spor-stepper-react@0.1.15
  - @vygruppen/spor-tab-react@0.1.3
  - @vygruppen/spor-table-react@0.0.6
  - @vygruppen/spor-theme-react@0.5.6
  - @vygruppen/spor-typography-react@0.4.5

## 0.13.20

### Patch Changes

- Updated dependencies [93725fa]
  - @vygruppen/spor-theme-react@0.5.5

## 0.13.19

### Patch Changes

- Updated dependencies [20e7e2e]
  - @vygruppen/spor-theme-react@0.5.4

## 0.13.18

### Patch Changes

- Updated dependencies [0f7bdb7]
  - @vygruppen/spor-datepicker-react@0.1.0

## 0.13.17

### Patch Changes

- Updated dependencies [d2b9f7e]
  - @vygruppen/spor-icon-react@0.6.1
  - @vygruppen/spor-provider-react@0.0.6
  - @vygruppen/spor-input-react@0.5.2
  - @vygruppen/spor-link-react@0.1.10
  - @vygruppen/spor-popover-react@0.1.14
  - @vygruppen/spor-stepper-react@0.1.14

## 0.13.16

### Patch Changes

- Updated dependencies [2514283]
  - @vygruppen/spor-accordion-react@0.1.3

## 0.13.15

### Patch Changes

- Updated dependencies [a3c38ac]
  - @vygruppen/spor-accordion-react@0.1.2
  - @vygruppen/spor-theme-react@0.5.3

## 0.13.14

### Patch Changes

- Updated dependencies [cdf4c2d]
  - @vygruppen/spor-design-tokens@2.4.3
  - @vygruppen/spor-theme-react@0.5.2
  - @vygruppen/spor-typography-react@0.4.4

## 0.13.13

### Patch Changes

- Updated dependencies [f52e583]
  - @vygruppen/spor-design-tokens@2.4.2
  - @vygruppen/spor-theme-react@0.5.1
  - @vygruppen/spor-typography-react@0.4.3
  - @vygruppen/spor-loader-react@0.2.1
  - @vygruppen/spor-button-react@0.2.7
  - @vygruppen/spor-popover-react@0.1.13
  - @vygruppen/spor-stepper-react@0.1.13

## 0.13.12

### Patch Changes

- Updated dependencies [f4943ef]
  - @vygruppen/spor-accordion-react@0.1.1

## 0.13.11

### Patch Changes

- Updated dependencies [d263565]
  - @vygruppen/spor-button-react@0.2.6
  - @vygruppen/spor-popover-react@0.1.12
  - @vygruppen/spor-stepper-react@0.1.12

## 0.13.10

### Patch Changes

- Updated dependencies [4c4efad]
- Updated dependencies [305c3ba]
- Updated dependencies [4019f27]
  - @vygruppen/spor-icon-react@0.6.0
  - @vygruppen/spor-accordion-react@0.1.0
  - @vygruppen/spor-input-react@0.5.1
  - @vygruppen/spor-link-react@0.1.9
  - @vygruppen/spor-popover-react@0.1.11
  - @vygruppen/spor-stepper-react@0.1.11

## 0.13.9

### Patch Changes

- Updated dependencies [0541729]
  - @vygruppen/spor-card-react@0.3.0
  - @vygruppen/spor-theme-react@0.5.0
  - @vygruppen/spor-provider-react@0.0.5

## 0.13.8

### Patch Changes

- Updated dependencies [2f59ba3]
- Updated dependencies [9ba66ca]
- Updated dependencies [7bcedd2]
- Updated dependencies [b47d697]
  - @vygruppen/spor-provider-react@0.0.4
  - @vygruppen/spor-design-tokens@2.4.1
  - @vygruppen/spor-button-react@0.2.5
  - @vygruppen/spor-theme-react@0.4.14
  - @vygruppen/spor-typography-react@0.4.2
  - @vygruppen/spor-popover-react@0.1.10
  - @vygruppen/spor-stepper-react@0.1.10

## 0.13.7

### Patch Changes

- Updated dependencies [d09d725]
  - @vygruppen/spor-design-tokens@2.4.0
  - @vygruppen/spor-theme-react@0.4.13
  - @vygruppen/spor-typography-react@0.4.1

## 0.13.6

### Patch Changes

- Updated dependencies [4dc266d]
- Updated dependencies [aac513e]
  - @vygruppen/spor-theme-react@0.4.12
  - @vygruppen/spor-modal-react@0.1.1

## 0.13.5

### Patch Changes

- Updated dependencies [66336f0]
- Updated dependencies [45b11e8]
- Updated dependencies [51b1847]
- Updated dependencies [874099f]
  - @vygruppen/spor-card-react@0.2.0
  - @vygruppen/spor-input-react@0.5.0
  - @vygruppen/spor-modal-react@0.1.0

## 0.13.4

### Patch Changes

- Updated dependencies [9e25325]
  - @vygruppen/spor-theme-react@0.4.11
  - @vygruppen/spor-input-react@0.4.5

## 0.13.3

### Patch Changes

- Updated dependencies [911e40b]
  - @vygruppen/spor-loader-react@0.2.0
  - @vygruppen/spor-button-react@0.2.4
  - @vygruppen/spor-popover-react@0.1.9
  - @vygruppen/spor-stepper-react@0.1.9

## 0.13.2

### Patch Changes

- Updated dependencies [8ceb63f]
- Updated dependencies [8d559a6]
- Updated dependencies [db6ecd3]
- Updated dependencies [b1d0e3e]
- Updated dependencies [83d0026]
  - @vygruppen/spor-button-react@0.2.3
  - @vygruppen/spor-theme-react@0.4.10
  - @vygruppen/spor-loader-react@0.1.0
  - @vygruppen/spor-popover-react@0.1.8
  - @vygruppen/spor-stepper-react@0.1.8

## 0.13.1

### Patch Changes

- Updated dependencies [08904d1]
- Updated dependencies [ebd918f]
  - @vygruppen/spor-theme-react@0.4.9
  - @vygruppen/spor-loader-react@0.0.3

## 0.13.0

### Minor Changes

- 36ebbf2: Add new package spor-loader-react

### Patch Changes

- Updated dependencies [629c381]
- Updated dependencies [36ebbf2]
  - @vygruppen/spor-icon-react@0.5.0
  - @vygruppen/spor-loader-react@0.0.2
  - @vygruppen/spor-theme-react@0.4.8
  - @vygruppen/spor-input-react@0.4.4
  - @vygruppen/spor-link-react@0.1.8
  - @vygruppen/spor-popover-react@0.1.7
  - @vygruppen/spor-stepper-react@0.1.7

## 0.12.9

### Patch Changes

- Updated dependencies [ac60336]
- Updated dependencies [469768f]
  - @vygruppen/spor-i18n-react@0.0.5
  - @vygruppen/spor-table-react@0.0.5
  - @vygruppen/spor-theme-react@0.4.7
  - @vygruppen/spor-button-react@0.2.2
  - @vygruppen/spor-input-react@0.4.3
  - @vygruppen/spor-popover-react@0.1.6
  - @vygruppen/spor-provider-react@0.0.3
  - @vygruppen/spor-stepper-react@0.1.6

## 0.12.8

### Patch Changes

- Updated dependencies [a8376b2]
- Updated dependencies [004548d]
  - @vygruppen/spor-theme-react@0.4.6
  - @vygruppen/spor-input-react@0.4.2
  - @vygruppen/spor-typography-react@0.4.0

## 0.12.7

### Patch Changes

- 6df4714: Refactor SporProvider into its own package, so it can be used without the spor-react package
- Updated dependencies [6df4714]
  - @vygruppen/spor-provider-react@0.0.2

## 0.12.6

### Patch Changes

- Updated dependencies [48cf74b]
- Updated dependencies [de67c09]
  - @vygruppen/spor-theme-react@0.4.5
  - @vygruppen/spor-icon-react@0.4.0
  - @vygruppen/spor-input-react@0.4.1
  - @vygruppen/spor-link-react@0.1.7
  - @vygruppen/spor-popover-react@0.1.5
  - @vygruppen/spor-stepper-react@0.1.5

## 0.12.5

### Patch Changes

- Updated dependencies [d1af49c]
- Updated dependencies [ac8bf51]
- Updated dependencies [ff3ca57]
  - @vygruppen/spor-link-react@0.1.6
  - @vygruppen/spor-theme-react@0.4.4

## 0.12.4

### Patch Changes

- Updated dependencies [a64bcad]
  - @vygruppen/spor-theme-react@0.4.3
  - @vygruppen/spor-card-react@0.1.5

## 0.12.3

### Patch Changes

- Updated dependencies [21bc292]
- Updated dependencies [1615828]
  - @vygruppen/spor-input-react@0.4.0

## 0.12.2

### Patch Changes

- Updated dependencies [3709143]
- Updated dependencies [683e7f6]
  - @vygruppen/spor-logo-react@0.1.3
  - @vygruppen/spor-theme-react@0.4.2
  - @vygruppen/spor-tab-react@0.1.2

## 0.12.1

### Patch Changes

- Updated dependencies [a486c26]
- Updated dependencies [82eb6b2]
- Updated dependencies [1b995bf]
  - @vygruppen/spor-tab-react@0.1.1
  - @vygruppen/spor-theme-react@0.4.1

## 0.12.0

### Minor Changes

- 57f4182: Added tabs component

### Patch Changes

- Updated dependencies [57f4182]
- Updated dependencies [896b898]
  - @vygruppen/spor-tab-react@0.1.0
  - @vygruppen/spor-theme-react@0.4.0
  - @vygruppen/spor-logo-react@0.1.2

## 0.11.11

### Patch Changes

- Updated dependencies [8b711ac]
- Updated dependencies [95e34b1]
  - @vygruppen/spor-link-react@0.1.5
  - @vygruppen/spor-theme-react@0.3.15
  - @vygruppen/spor-card-react@0.1.4

## 0.11.10

### Patch Changes

- Updated dependencies [6c8ad0e]
  - @vygruppen/spor-theme-react@0.3.14
  - @vygruppen/spor-card-react@0.1.3

## 0.11.9

### Patch Changes

- Updated dependencies [5bde18f]
- Updated dependencies [c61ef00]
  - @vygruppen/spor-input-react@0.3.3
  - @vygruppen/spor-theme-react@0.3.13

## 0.11.8

### Patch Changes

- Updated dependencies [2524c7c]
  - @vygruppen/spor-table-react@0.0.4

## 0.11.7

### Patch Changes

- Updated dependencies [e783ba9]
  - @vygruppen/spor-accordion-react@0.0.4

## 0.11.6

### Patch Changes

- Updated dependencies [f49b13d]
- Updated dependencies [382173f]
  - @vygruppen/spor-design-tokens@2.3.7
  - @vygruppen/spor-theme-react@0.3.12
  - @vygruppen/spor-typography-react@0.3.4

## 0.11.5

### Patch Changes

- Updated dependencies [7dc9c0e]
  - @vygruppen/spor-theme-react@0.3.11
  - @vygruppen/spor-button-react@0.2.1
  - @vygruppen/spor-popover-react@0.1.4
  - @vygruppen/spor-stepper-react@0.1.4

## 0.11.4

### Patch Changes

- Updated dependencies [c428f71]
  - @vygruppen/spor-design-tokens@2.3.6
  - @vygruppen/spor-theme-react@0.3.10
  - @vygruppen/spor-typography-react@0.3.3

## 0.11.3

### Patch Changes

- Updated dependencies [68b7928]
  - @vygruppen/spor-icon-react@0.3.0
  - @vygruppen/spor-link-react@0.1.4
  - @vygruppen/spor-popover-react@0.1.3
  - @vygruppen/spor-stepper-react@0.1.3

## 0.11.2

### Patch Changes

- Updated dependencies [936b4ed]
  - @vygruppen/spor-button-react@0.2.0
  - @vygruppen/spor-theme-react@0.3.9
  - @vygruppen/spor-popover-react@0.1.2
  - @vygruppen/spor-stepper-react@0.1.2

## 0.11.1

### Patch Changes

- Updated dependencies [772cb45]
- Updated dependencies [ec876eb]
  - @vygruppen/spor-popover-react@0.1.1
  - @vygruppen/spor-stepper-react@0.1.1
  - @vygruppen/spor-theme-react@0.3.8

## 0.11.0

### Minor Changes

- 4ec0fcc: Add new popover package

### Patch Changes

- Updated dependencies [4ec0fcc]
  - @vygruppen/spor-popover-react@0.1.0
  - @vygruppen/spor-theme-react@0.3.7

## 0.10.1

### Patch Changes

- Updated dependencies [d40d8e8]
  - @vygruppen/spor-theme-react@0.3.6
  - @vygruppen/spor-link-react@0.1.3

## 0.10.0

### Minor Changes

- 6f8e5d6: Add stepper component

### Patch Changes

- 6f8e5d6: Fix bug where icons were not included
- Updated dependencies [6f8e5d6]
  - @vygruppen/spor-stepper-react@0.1.0
  - @vygruppen/spor-theme-react@0.3.5

## 0.9.2

### Patch Changes

- Updated dependencies [ed97c76]
  - @vygruppen/spor-icon-react@0.2.0
  - @vygruppen/spor-link-react@0.1.2

## 0.9.1

### Patch Changes

- Updated dependencies [c2681e9]
  - @vygruppen/spor-theme-react@0.3.4
  - @vygruppen/spor-link-react@0.1.1

## 0.9.0

### Minor Changes

- efc463d: Add a link package

### Patch Changes

- Updated dependencies [efc463d]
  - @vygruppen/spor-link-react@0.1.0
  - @vygruppen/spor-theme-react@0.3.3

## 0.8.4

### Patch Changes

- Updated dependencies [f33e8b8]
- Updated dependencies [aaf0b69]
  - @vygruppen/spor-theme-react@0.3.2
  - @vygruppen/spor-input-react@0.3.2

## 0.8.3

### Patch Changes

- Updated dependencies [cb68026]
  - @vygruppen/spor-theme-react@0.3.1

## 0.8.2

### Patch Changes

- Updated dependencies [d351027]
  - @vygruppen/spor-input-react@0.3.1

## 0.8.1

### Patch Changes

- Updated dependencies [362b163]
- Updated dependencies [4c7ed37]
- Updated dependencies [d603d3c]
- Updated dependencies [b54f699]
- Updated dependencies [68ac994]
- Updated dependencies [39b6fc6]
  - @vygruppen/spor-input-react@0.3.0
  - @vygruppen/spor-button-react@0.1.5
  - @vygruppen/spor-theme-react@0.3.0
  - @vygruppen/spor-accordion-react@0.0.3

## 0.8.0

### Minor Changes

- 548e736: Add new accordion package with lots of new components

### Patch Changes

- Updated dependencies [548e736]
- Updated dependencies [7835a53]
- Updated dependencies [7394e9a]
  - @vygruppen/spor-accordion-react@0.0.2
  - @vygruppen/spor-theme-react@0.2.3
  - @vygruppen/spor-input-react@0.2.3
  - @vygruppen/spor-design-tokens@2.3.5
  - @vygruppen/spor-typography-react@0.3.2

## 0.7.8

### Patch Changes

- Updated dependencies [1a01e54]
  - @vygruppen/spor-theme-react@0.2.2

## 0.7.7

### Patch Changes

- 37f7c2e: Fix some issues with dependencies
- Updated dependencies [37f7c2e]
  - @vygruppen/spor-button-react@0.1.4
  - @vygruppen/spor-card-react@0.1.2
  - @vygruppen/spor-icon-react@0.1.1
  - @vygruppen/spor-input-react@0.2.2
  - @vygruppen/spor-layout-react@0.3.1
  - @vygruppen/spor-logo-react@0.1.1
  - @vygruppen/spor-theme-react@0.2.1
  - @vygruppen/spor-i18n-react@0.0.4
  - @vygruppen/spor-image-react@0.1.1
  - @vygruppen/spor-modal-react@0.0.3
  - @vygruppen/spor-table-react@0.0.3
  - @vygruppen/spor-typography-react@0.3.1

## 0.7.6

### Patch Changes

- Updated dependencies [72126f0]
- Updated dependencies [793a557]
  - @vygruppen/spor-theme-react@0.2.0

## 0.7.5

### Patch Changes

- 60facc6: Bump dependencies
- Updated dependencies [f041db8]
  - @vygruppen/spor-theme-react@0.1.3
  - @vygruppen/spor-button-react@0.1.3

## 0.7.4

### Patch Changes

- 8a80f1d: This bugfix comes down from heaven and makes dependencies work like they should!
- Updated dependencies [8a80f1d]
- Updated dependencies [c22d76c]
  - @vygruppen/spor-button-react@0.1.2
  - @vygruppen/spor-card-react@0.1.1
  - @vygruppen/spor-icon-react@0.1.0
  - @vygruppen/spor-input-react@0.2.1

## 0.7.3

### Patch Changes

- Updated dependencies [bed34b9]
- Updated dependencies [bed34b9]
  - @vygruppen/spor-typography-react@0.3.0
  - @vygruppen/spor-theme-react@0.1.2

## 0.7.2

### Patch Changes

- Updated dependencies [011cdd8]
- Updated dependencies [3a9746a]
  - @vygruppen/spor-icon-react@0.0.5

## 0.7.1

### Patch Changes

- Updated dependencies [b6c6e3c]
  - @vygruppen/spor-theme-react@0.1.1

## 0.7.0

### Minor Changes

- ee14582: Add new package spor-table-react

### Patch Changes

- Updated dependencies [b81bc05]
- Updated dependencies [8758549]
- Updated dependencies [b78c8b7]
- Updated dependencies [90ca75c]
- Updated dependencies [ee14582]
- Updated dependencies [28976df]
  - @vygruppen/spor-card-react@0.1.0
  - @vygruppen/spor-image-react@0.1.0
  - @vygruppen/spor-input-react@0.2.0
  - @vygruppen/spor-layout-react@0.3.0
  - @vygruppen/spor-logo-react@0.1.0
  - @vygruppen/spor-theme-react@0.1.0
  - @vygruppen/spor-typography-react@0.2.0
  - @vygruppen/spor-icon-react@0.0.4
  - @vygruppen/spor-table-react@0.0.2

## 0.6.0

### Minor Changes

- d379b43: Add new package for modals - spor-modal-react

### Patch Changes

- Updated dependencies [d379b43]
  - @vygruppen/spor-modal-react@0.0.2
  - @vygruppen/spor-theme-react@0.0.9

## 0.5.0

### Minor Changes

- 6511380: Add new spor-card-react package

### Patch Changes

- Updated dependencies [6511380]
- Updated dependencies [b5613c9]
  - @vygruppen/spor-card-react@0.0.2
  - @vygruppen/spor-theme-react@0.0.8

## 0.4.0

### Minor Changes

- 56494f9: Add new package - spor-image-react

### Patch Changes

- Updated dependencies [5837857]
- Updated dependencies [35b4962]
- Updated dependencies [560259d]
- Updated dependencies [016681e]
- Updated dependencies [6bed16f]
- Updated dependencies [22cf05b]
- Updated dependencies [7934fe0]
- Updated dependencies [56494f9]
  - @vygruppen/spor-typography-react@0.1.1
  - @vygruppen/spor-theme-react@0.0.7
  - @vygruppen/spor-button-react@0.1.1
  - @vygruppen/spor-layout-react@0.2.0
  - @vygruppen/spor-icon-react@0.0.3
  - @vygruppen/spor-image-react@0.0.2

## 0.3.0

### Minor Changes

- be877b9: Add packages for the icons library, and the react implementation of it
- 1dd2c79: Expose `tokens` - all design tokens

### Patch Changes

- 45c285a: Rename spor-icons and spor-icons-react to their singular form.
- Updated dependencies [be877b9]
- Updated dependencies [45c285a]
- Updated dependencies [8aa80c5]
- Updated dependencies [a68f2cc]
- Updated dependencies [737d071]
- Updated dependencies [e34a588]
- Updated dependencies [217a776]
  - @vygruppen/spor-icon-react@0.0.2
  - @vygruppen/spor-theme-react@0.0.6
  - @vygruppen/spor-button-react@0.1.0
  - @vygruppen/spor-layout-react@0.1.0

## 0.2.1

### Patch Changes

- Updated dependencies [61549d5]
  - @vygruppen/spor-theme-react@0.0.5

## 0.2.0

### Minor Changes

- 7dfe259: Add typography package
- 2eac310: Add layout package

### Patch Changes

- Updated dependencies [2eac310]
  - @vygruppen/spor-layout-react@0.0.2

## 0.1.2

### Patch Changes

- Updated dependencies [fb429ab]
- Updated dependencies [65feebf]
- Updated dependencies [ee71c70]
- Updated dependencies [24b0a72]
- Updated dependencies [91e50b0]
- Updated dependencies [8d088e0]
  - @vygruppen/spor-input-react@0.1.0
  - @vygruppen/spor-theme-react@0.0.4

## 0.1.1

### Patch Changes

- 099d492: Add repository and home page metadata to all packages
- Updated dependencies [6f145b6]
- Updated dependencies [099d492]
- Updated dependencies [146bdda]
  - @vygruppen/spor-theme-react@0.0.3
  - @vygruppen/spor-button-react@0.0.3
  - @vygruppen/spor-i18n-react@0.0.3
  - @vygruppen/spor-input-react@0.0.3
  - @vygruppen/spor-logo-react@0.0.3

## 0.1.0

### Minor Changes

- a8d2de3: Add peer dependencies to `@vygruppen/spor-react`

  In order to optimize for flexibility, the `spor-react` package loses a few direct dependencies, and adds them as peer dependencies.

  This is a **breaking change**. To upgrade, please run:

  ```bash
  $ npm install @chakra-ui/react @emotion/styled @emotion/react framer-motion
  ```

  or:

  ```bash
  $ yarn add @chakra-ui/react @emotion/styled @emotion/react framer-motion
  ```

## 0.0.2

### Patch Changes

- 8e5444a: Fix a bug where the published packages specified the source files, instead of the built dist files
- Updated dependencies [8e5444a]
  - @vygruppen/spor-button-react@0.0.2
  - @vygruppen/spor-i18n-react@0.0.2
  - @vygruppen/spor-input-react@0.0.2
  - @vygruppen/spor-logo-react@0.0.2
  - @vygruppen/spor-theme-react@0.0.2
