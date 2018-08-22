export const floatInputValue = (value: any) => {
  let outputValue = value.toString();
  if (outputValue.indexOf(".") === -1) {
    outputValue = `${outputValue}.0`;
  }
  return outputValue;
};
