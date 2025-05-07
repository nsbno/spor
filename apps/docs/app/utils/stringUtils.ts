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

const DELIMITER_REGEX = /[-_.]+/g; // Replace hyphens, dots, underscores with space
const CAMELCASE_REGEX = /([a-zæøå])([A-ZÆØÅ])/g; // Split camelCase
const MULTISPACE_REGEX = /\s+/g; // Collapse multiple spaces

export const toTitleCase = (input: string): string => {
  if (!input) return "";

  const normalized = input
    .replaceAll(DELIMITER_REGEX, " ")
    .replaceAll(CAMELCASE_REGEX, "$1 $2")
    .replaceAll(MULTISPACE_REGEX, " ")
    .trim();

  return normalized
    .split(" ")
    .map((word) => {
      if (!word) return "";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
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
    .replaceAll(/\s+/g, "-") // Replace spaces with -
    .replaceAll(/[æ]/g, "ae") // Replace special chars
    .replaceAll(/[øö]/g, "o") // Replace special chars
    .replaceAll(/[åä]/g, "a") // Replace special chars
    .replaceAll(/[^\w-]+/g, "") // Remove all non-word chars
    .replaceAll(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
