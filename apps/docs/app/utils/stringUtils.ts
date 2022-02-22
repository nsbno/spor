/**
 * Turns most strings into to Title Case.
 *
 * @example
 * toTitleCase("hello world") // "Hello World"
 * toTitleCase("helloWorld") // "Hello World"
 * toTitleCase("hello-world") // "Hello World"
 * toTitleCase("hello.world") // "Hello World"
 * toTitleCase("hello.world.fooBar") // "Hello World Foo Bar"
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

/**
 * Turns most strings into to Capital case.
 *
 * @example
 * toCapitalCase("hello world") // "Hello world"
 * toCapitalCase("helloWorld") // "Hello world"
 * toCapitalCase("hello-world") // "Hello world"
 * toCapitalCase("hello.world") // "Hello world"
 * toCapitalCase("hello.world.fooBar") // "Hello world foo bar"
 */
export const toCapitalCase = (input: string): string => {
  const titleCase = toTitleCase(input);
  return titleCase.charAt(0).toUpperCase() + titleCase.slice(1).toLowerCase();
};

/** Makes a slug out of a string
 * @see https://gist.github.com/mathewbyrne/1280286
 */
export function slugify(text: string) {
  if (!text) {
    return text;
  }
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[æ]/g, "ae") // Replace special chars
    .replace(/[øö]/g, "o") // Replace special chars
    .replace(/[åä]/g, "a") // Replace special chars
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
