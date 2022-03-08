# Stepper (React)

Steppers are for showing the progress through a multi step process.

## Installation

```bash
$ npm install @vygruppen/spor-stepper-react
```

## Usage

```tsx
import { Stepper } from "@vygruppen/spor-stepper-react";

<Stepper activeStepIndex={1} title="Reisesøk" onClick={(clickedIndex) => {}}>
  <StepperStep>Start</StepperStep>
  <StepperStep>Fyll ut</StepperStep>
  <StepperStep>Avslutt</StepperStep>
</Stepper>;
```

## Development

Please refer to the root readme for development notes.
