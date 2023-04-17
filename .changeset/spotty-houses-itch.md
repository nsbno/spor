---
"@vygruppen/spor-react": major
---

Welcome to v2 of Spor!

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
