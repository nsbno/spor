---
"@vygruppen/spor-react": major
---

utils:
added (accent og brand) to background, border,
added text

choiceChip:
- We have renamed the variant prop to chipType. This prop now accepts three values: choice, icon, and filter. 
Please update your components to use chipType instead of variant.

- We have introduced a new variant prop. This prop accepts three values: base, accent, and floating. 
You can use this prop to change the appearance  of the ChoiceChip.

- We have added a new disabled prop. You can use this prop to disable the ChoiceChip. When disabled is true, the ChoiceChip will be grayed out and won't respond to user interactions.
Please update your components to use these new props and options. If you have any questions or run into any issues, feel free to reach out to us.
