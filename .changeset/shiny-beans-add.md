---
"@vygruppen/spor-react": patch
---

Nudge, WizardNudge and Toast does not work after updating chakra in a previous version of spor.
Fixed:

- Toast needed an id for each toast. Auto generated if not supplied from user.
- Nudge imported usePopoverContext from ark. Now imports from chakra and works.
