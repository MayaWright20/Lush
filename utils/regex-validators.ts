import { NAME_VALIDATOR } from "@/constants/regex";

export const isRegexValid = (regex: RegExp, value: string): boolean => {
  return regex.test(value);
};

export const regexErrorMessage = (regex: RegExp): string => {
  let errorMessage;

  switch (regex) {
    case NAME_VALIDATOR:
      errorMessage = "Please enter a valid name";
      break;

    default:
      errorMessage = "Invalid";
      break;
  }

  return errorMessage;
};
