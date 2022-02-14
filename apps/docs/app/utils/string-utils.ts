/**
 * Turns most strings into to Capital Case.
 *
 * @example
 * capitalize("hello world") // "Hello World"
 * capitalize("helloWorld") // "Hello World"
 * capitalize("hello-world") // "Hello World"
 * capitalize("hello.world") // "Hello World"
 * capitalize("hello.world.fooBar") // "Hello World Foo Bar"
 */
export const toTitleCase = (input: string): string => {
  let text = input
    .replace(/[\-_\.]+/g, " ") // some.word -> some word
    .replace(/([a-zæøå])([A-ZÆØÅ])/g, "$1 $2") // someWord -> some Word
    .replace(/\s{2,}/g, " "); // multiple spaces -> one space
  if (text.includes(" ")) {
    return text.split(" ").map(toTitleCase).join(" ");
  }
  if (text.length < 2) {
    return text?.toUpperCase();
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
