window.HTMLElement.prototype.scrollIntoView = jest.fn();

jest.mock("nanoid", () => ({
  nanoid: jest.fn(),
}));
