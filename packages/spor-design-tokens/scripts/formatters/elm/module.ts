import { Format } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";

export const elmFormatter: Named<Format> = {
  name: "elm/module",
  formatter: ({ dictionary }) => {
    return [
      "module Vy.Spor.DesignTokens exposing (tokens)",
      "",
      "-- This file is auto generated. Do not edit directly.",
      "",
      "tokens =",
      defaultIndentation +
        "{ " +
        jsonToRecord(dictionary.properties, defaultIndentation) +
        defaultIndentation +
        "}",
    ].join("\n");
  },
};

function jsonToRecord(object: any, indentation: String): String {
  let result = "";
  for (const key in object) {
    let value = object[key];

    let encodedValue = encodeValue(value, indentation);

    result += indentation + ", " + elmify(key) + " = " + encodedValue + "\n";
  }

  return result.substr(indentation.length + 2);
}

function encodeValue(value: any, indentation: String): String {
  const valueType = Array.isArray(value) ? "array" : typeof value;

  if (valueType === "number") {
    return value.toString();
  } else if (valueType === "boolean") {
    return value ? "True" : "False";
  } else if (valueType === "string") {
    return `"${value.replaceAll('"', '\\"')}"`;
  } else if (valueType === "object") {
    const nextIndentation = indentation + defaultIndentation;
    return (
      "\n" +
      nextIndentation +
      "{ " +
      jsonToRecord(value, nextIndentation) +
      nextIndentation +
      "}"
    );
  } else if (valueType === "array") {
    return (
      "[ " +
      value.map((v: any) => encodeValue(v, indentation)).join(", ") +
      " ]"
    );
  }

  throw "Cannot handle type: " + valueType;
}

const defaultIndentation = "    ";

function elmify(str: String): String {
  str = unSnake(str);

  // reserved keywords
  if (str === "type") {
    return "type_";
  }

  // key starts with digit
  if (/^\d+$/.test(str[0])) {
    return "i" + str;
  }

  return str;
}

function unSnake(str: String) {
  for (let idx = str.indexOf("-"); idx >= 0; idx = str.indexOf("-")) {
    str = removeCharByIdx(str, idx);
    str = upperCaseAtIdx(str, idx);
  }

  return str;
}

function removeCharByIdx(str: String, idx: number): String {
  return str.substring(0, idx) + str.substring(idx + 1);
}

function upperCaseAtIdx(str: String, idx: number): String {
  return (
    str.substring(0, idx) + str[idx].toUpperCase() + str.substring(idx + 1)
  );
}
