# Progress-Bar (React)

Progress bars are for showing the progress through a multi step process.

## Installation

```bash
$ npm install @vygruppen/spor-progress-bar-react
```

## Usage

```tsx
import { ProgressBar } from "@vygruppen/spor-progress-bar-react";

<ProgressBar
  activeStepIndex={1}
  title="Reisesøk"
  onClick={(clickedIndex) => {}}
>
  <ProgressBarStep>Start</ProgressBarStep>
  <ProgressBarStep>Fyll ut</ProgressBarStep>
  <ProgressBarStep>Avslutt</ProgressBarStep>
</ProgressBar>;
```

## Development

Please refer to the root readme for development notes.
