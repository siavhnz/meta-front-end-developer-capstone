import React from "react";
import BookingForm from "./BookingForm";

// This component is responsable for
// handling available time and passing
// to BookingForm
function Booking() {
  const availableTimes = [
    { text: "5:00 pm", value: 5 },
    { text: "6:00 pm", value: 6 },
    { text: "7:00 pm", value: 7 },
    { text: "8:00 pm", value: 8 },
    { text: "9:00 pm", value: 9 },
    { text: "10:00 pm", value: 10 },
  ];
  return <BookingForm availableTimes={availableTimes} />;
}

export default Booking;
