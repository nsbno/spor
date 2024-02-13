---
"@vygruppen/spor-react": minor
---

Stepper: Redesign and re-implement the Stepper component.

This change also introduces a new prop – onBackButtonClick – which is called whenever the back button is clicked on smaller screen. It receives a boolean argument outlining whether or not the current step is the first one or not. If you don't pass this prop, the back button will be hidden on the first step.
