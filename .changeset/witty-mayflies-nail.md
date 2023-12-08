---
"@vygruppen/spor-react": major
---

Breaking: Rename <Button variant="additional" /> to <Button variant="tertiary" />

Due to a… minor screwup on ~our~ @selbekk's side, we deprecated the wrong name earlier on.

To mitigate my screwup, please search through your code base for "additional", and replace it with "tertiary". It should be a simple enough upgrade. Make sure to do this with all Button and IconButton components.

Sorry. - @selbekk.
