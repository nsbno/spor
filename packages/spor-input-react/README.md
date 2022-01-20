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
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  PasswordInput,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@vygruppen/spor-input-react";
```

There are a lot of imports here - luckily they're pretty intuitive to use, and you'll probably just use a few at a time.

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

### `Checkbox` and `CheckboxGroup`

Checkboxes are great when you want users to answer yes or no to one or more questions.

You can use them by themselves, or place them inside of a `CheckboxGroup`.

```tsx
<CheckboxGroup>
  <Checkbox value="terms">I accept the terms and conditions</Checkbox>
  <Checkbox value="marketing">I want to receive newsletters</Checkbox>
</CheckboxGroup>
```

You can also specify the direction of the checkboxes with the `direction` prop.

```tsx
<CheckboxGroup direction="column">
  <Checkbox value="terms">I accept the terms and conditions</Checkbox>
  <Checkbox value="marketing">I want to receive newsletters</Checkbox>
</CheckboxGroup>
```

### `Radio` and `RadioGroup`

Radio buttons are a great choice for when you want the user to select one out of several different options. You place your radio buttons inside of a radio button group, and give it a name.

Semantically, radio buttons should be enclosed in a `<fieldset />` with a `<legend />` tag asking the question you want the user to answer.

```tsx
<Box as="fieldset">
  <Text as="legend">What is your favorite destination?</Text>
  <RadioGroup name="destination">
    <Radio value="oslo">Oslo</Radio>
    <Radio value="bergen">Bergen</Radio>
    <Radio value="trondheim">Trondheim</Radio>
  </RadioGroup>
</Box>
```

You can also specify the direction of the radio buttons with the `direction` prop.

```tsx
<Box as="fieldset">
  <Text as="legend">What is your favorite destination?</Text>
  <RadioGroup name="destination" direction="column">
    <Radio value="oslo">Oslo</Radio>
    <Radio value="bergen">Bergen</Radio>
    <Radio value="trondheim">Trondheim</Radio>
  </RadioGroup>
</Box>
```

### `Switch`

A switch lets you toggle between on and off, yes and no. It's an alternative to a checkbox.

You can use a Switch component inside of a `FormControl` with an associated `FormLabel`:

```tsx
<FormControl>
  <FormLabel>Enable alerts?</FormLabel>
  <Switch />
</FormControl>
```

Switches are available in three different sizes - `sm`, `md` and `lg`. There are also two variants - `solid` and `outline`.

```tsx
<FormControl>
  <FormLabel>Enable alerts?</FormLabel>
  <Switch variant="outline" size="lg" />
</FormControl>
```

### `FormLabel`

A neat looking label for a few different input types. Should be used inside of a `FormControl`, so it receives the correct IDs and attributes.

You don't need to use this label with the `Input`, `Textarea`, `Checkbox` or `Radio` components, as they come with one built in. You might want to use it with the `Switch` component, for instance.

```tsx
<FormControl>
  <FormLabel>Enable alerts?</FormLabel>
  <Switch variant="outline" size="lg" />
</FormControl>
```

Yep, it's the same example as above - the docs author felt lazy. 😎

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
