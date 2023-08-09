import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h3 text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Отчет Акций/i);
  expect(linkElement).toBeInTheDocument();
});

test("render input app", () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText("Введите символ компании");
  expect(inputNode).toBeInTheDocument();
});
