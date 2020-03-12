import splitToWords from "./splitToWords";

/*
  This function just gives us a count of cells (columns or rows).
 */
const lengthOf: GridLengthOf = value => (value ? splitToWords(value).length : undefined);

export default lengthOf;
