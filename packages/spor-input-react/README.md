# Input (React)

This package contains basic input fields, textareas and so forth.

## Installation

```bash
$ npm install @vygruppen/spor-input-react
```

## Usage

```tsx
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
  PasswordInput,
  Textarea,
  FormControl,
} from "@vygruppen/spor-input-react";
```

There are a lot of imports here - luckily they're pretty intuitive to use.

Before we dive into each piece individually, here's a basic example:

```tsx
<FormControl isInvalid={Boolean(errors.age)}>
  <Input label="Age" value={value} onChange={(e) => setValue(e.target.value)} />
  <FormErrorMessage>{errors.age}</FormErrorMessage>
  <FormHelperText>
    We'll use your age to choose the appropriate ticket
  </FormHelperText>
</FormControl>
```

### `FormControl`

The `FormControl` component wraps most form inputs, and shares common properties like IDs, names, or whether or not a field is invalid.

By default, the `FormControl` component creates a unique ID for any inputs inside of it, and forwards it to any components that would require it.

```tsx
<FormControl>
  <Input label="Name" />
</FormControl>
```

### `Input`

The `Input` component works like a regular `<input />` component, but it requires you to pass the label we want to display.

```tsx
<Input label="Name" />
```

### `PasswordInput`

The `PasswordInput` component works like a regular `<Input />` component, but it has a button that lets you look at your password.

```tsx
<PasswordInput label="Name" />
```

### `InputGroup`, `InputLeftElement` and `InputRightElement`

If you want to add icons or buttons inside of your input field, you want to wrap your `Input` inside of an `InputGroup` component.

This is how you use it:

```tsx
<FormControl>
  <InputGroup>
    <Input label="Search" type="search" />
    <InputRightElement>
      <IconButton
        type="submit"
        variant="ghost"
        aria-label="Search"
        icon={<SearchIcon />}
      />
    </InputRightElement>
  </InputGroup>
</FormControl>
```

If you want an icon up in front of your input field, you use the `InputLeftElement` in front of your `Input` element instead.

### `Textarea`

Textareas work exactly like the `Input` component, but creates a resizable text area instead.

```tsx
<FormControl>
  <Textarea label="Description" />
</FormControl>
```

### `FormHelperText`

If you want to add some descriptive text to your inputs, you should use the `FormHelperText` component. It adds some neat screen reader properties, and styles the text appropriately.

```tsx
<FormControl>
  <Input label="age" />
  <FormHelperText>
    We'll use your age to choose the appropriate ticket
  </FormHelperText>
</FormControl>
```

### `FormErrorMessage`

Shows an error message. Great for inline validation errors!

If you set the `isInvalid` prop on the surrounding `FormControl` component, the `FormErrorMessage` will only render if it's true.

```tsx
<FormControl isInvalid={Boolean(errors.age)}>
  <Input label="age" />
  <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
</FormControl>
```

## Development

Please refer to the root readme for development notes.

```

```
