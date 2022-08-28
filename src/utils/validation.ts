export const validateMessage = (text: string): boolean => {
  return text !== undefined && /\S/.test(text);
};
