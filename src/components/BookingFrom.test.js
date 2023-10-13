import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

it("should render fields", () => {
  const availableTimes = [
    { text: "5:00 pm", value: 5 },
    { text: "6:00 pm", value: 6 },
    { text: "7:00 pm", value: 7 },
    { text: "8:00 pm", value: 8 },
    { text: "9:00 pm", value: 9 },
    { text: "10:00 pm", value: 10 },
  ];
  render(<BookingForm availableTimes={availableTimes} />);

  expect(
    screen.getByRole("heading", { name: "Reservation" })
  ).toBeInTheDocument();

  let date = screen.getByText("Date");
  let occasion = screen.getByRole("combobox", { name: /Occasion/i });
  let diners = screen.getByRole("combobox", { name: /Numbers of Dires/i });
  let time = screen.getByRole("combobox", { name: /Time/i });
  let button = screen.getByRole("button", { name: /Reserve a Table/i });

  expect(date).toBeInTheDocument();
  expect(occasion).toBeInTheDocument();
  expect(diners).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

it("should validate form fields", async () => {
  const availableTimes = [
    { text: "5:00 pm", value: 5 },
    { text: "6:00 pm", value: 6 },
    { text: "7:00 pm", value: 7 },
    { text: "8:00 pm", value: 8 },
    { text: "9:00 pm", value: 9 },
    { text: "10:00 pm", value: 10 },
  ];
  render(<BookingForm availableTimes={availableTimes} />);

  let date = screen.getByText("Date");
  let occasion = screen.getByRole("combobox", { name: /Occasion/i });
  let diners = screen.getByRole("combobox", { name: /Numbers of Dires/i });
  let time = screen.getByRole("combobox", { name: /Time/i });
  let button = screen.getByRole("button", { name: /Reserve a Table/i });

  act(() => {
    userEvent.type(date, "10/03/2023");
    userEvent.selectOptions(occasion, "Engagement");
    userEvent.selectOptions(diners, "1 Diner");
    userEvent.selectOptions(time, "5");
    userEvent.click(button);
  });
});
