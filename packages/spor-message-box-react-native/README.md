# Message-Box (React Native)

TODO: Add description

## Installation

```bash
$ npm install @vygruppen/spor-message-box-react-native
```

## Usage

```tsx
import {MessageBox} from "@vygruppen/spor-message-box-react-native";

example:
<MessageBox variant="error" actionType="none" > Error </MessageBox>
<MessageBox variant="success" actionType="close" onPress={() => <yourfunction> } > Suksess </MessageBox>
<MessageBox variant="info" actionType="button" buttonText="close" onPress={() => <yourfunction> } > Info </MessageBox>
```
Three variants: `error`, `info` and `success`.
Support for two types of buttons: `close` for close-button and `button` for ghost-button


## Development

Please refer to the root readme for development notes.
