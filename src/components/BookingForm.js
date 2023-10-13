import React, { useState } from "react";
import Wrapper from "./Wrapper";
import styles from "./BookingForm.module.css";
import Button from "./ui/Button";

function BookingForm({ availableTimes }) {
  const [state, setState] = useState({
    level: 1,
    section1validation: {
      isTouched: false,
      valid: false,
    },
    section1: {
      date: "",
      diners: 1,
      occasion: "Birthday",
      time: availableTimes[0],
    },
    section2validation: {
      isTouched: false,
      valid: false,
    },
    section2: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });
  const section1SubmitHandler = (e) => {
    e.preventDefault();

    setState((prevState) => {
      return {
        ...prevState,

        section1validation: {
          ...prevState.section1validation,
          isTouched: true,
        },
      };
    });

    if (
      state.section1.date &&
      state.section1.diners &&
      state.section1.occasion &&
      state.section1.time
    ) {
      setState((prevState) => {
        return {
          ...prevState,

          section1validation: {
            ...prevState.section1validation,
            valid: true,
          },
          level: 2,
        };
      });
    }
  };

  const section2SubmitHandler = (e) => {
    e.preventDefault();

    setState((prevState) => {
      return {
        ...prevState,

        section2validation: {
          ...prevState.section2validation,
          isTouched: true,
        },
      };
    });

    if (
      state.section2.firstName &&
      state.section2.lastName &&
      state.section2.email &&
      state.section2.phoneNumber
    ) {
      setState((prevState) => {
        return {
          ...prevState,

          section2validation: {
            ...prevState.section2validation,
            valid: true,
          },
          level: 3,
        };
      });
    }
  };

  return (
    <Wrapper>
      <section className={styles.container}>
        <h1 className={styles.title}>Reservation</h1>
        {state.level === 1 && (
          <form className={styles.form} onSubmit={section1SubmitHandler}>
            <div className={styles.section}>
              <div>
                <div className={styles.radios}>
                  <input
                    type="radio"
                    name="place"
                    id="indoors"
                    defaultChecked
                  ></input>
                  <label htmlFor="indoors">indoors</label>
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={state.section1.date}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section1: {
                            ...prevState.section1,
                            date: e.target.value,
                          },
                        };
                      })
                    }
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="occasion">Occasion</label>
                  <select
                    id="occasion"
                    value={state.section1.occasion}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section1: {
                            ...prevState.section1,
                            occasion: e.target.value,
                          },
                        };
                      })
                    }
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversay">Anniversay</option>
                  </select>
                </div>
              </div>
              <div>
                <div className={styles.radios}>
                  <input type="radio" name="place" id="outdoors"></input>
                  <label htmlFor="outdoors">outdoors</label>
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="diners">Numbers of Dires</label>
                  <select
                    id="diners"
                    value={state.section1.diners}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section1: {
                            ...prevState.section1,
                            diners: e.target.value,
                          },
                        };
                      })
                    }
                  >
                    <option value="1">1 Diner</option>
                    <option value="2">2 Diners</option>
                    <option value="3">3 Diners</option>
                    <option value="4">4 Diners</option>
                    <option value="5">5 Diners</option>
                    <option value="6">6 Diners</option>
                    <option value="7">7 Diners</option>
                    <option value="8">8 Diners</option>
                    <option value="9">9 Diners</option>
                    <option value="10">10 Diners</option>
                  </select>
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={state.section1.time}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section1: {
                            ...prevState.section1,
                            time: e.target.value,
                          },
                        };
                      })
                    }
                  >
                    {availableTimes.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={styles.button}>
                <Button type="submit">Reserve a Table</Button>
                {state.section1validation.isTouched &&
                  !state.section1validation.valid && (
                    <p className={styles.error}>Please fill all fields</p>
                  )}
              </div>
            </div>
          </form>
        )}

        {state.level === 2 && (
          <form className={styles.form} onSubmit={section2SubmitHandler}>
            <div className={styles.section}>
              <div>
                <div className={styles.inputs}>
                  <label htmlFor="firstName">* First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={state.section2.firstName}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section2: {
                            ...prevState.section2,
                            firstName: e.target.value,
                          },
                        };
                      })
                    }
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="email">* Email</label>
                  <input
                    type="text"
                    id="email"
                    value={state.section2.email}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section2: {
                            ...prevState.section2,
                            email: e.target.value,
                          },
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div className={styles.inputs}>
                  <label htmlFor="lastName">* Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={state.section2.lastName}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section2: {
                            ...prevState.section2,
                            lastName: e.target.value,
                          },
                        };
                      })
                    }
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="phoneNumber">* Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={state.section2.phoneNumber}
                    onChange={(e) =>
                      setState((prevState) => {
                        return {
                          ...prevState,
                          section2: {
                            ...prevState.section2,
                            phoneNumber: e.target.value,
                          },
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className={styles.button}>
                <Button type="submit">Confirm Reservatoin</Button>
                {state.section2validation.isTouched &&
                  !state.section2validation.valid && (
                    <p className={styles.error}>Please fill all fields</p>
                  )}
              </div>
            </div>
          </form>
        )}

        {state.level === 3 && (
          <div className={styles.success}>
            Your Reservation Has Been Confirmed
            <br /> Check your email.
          </div>
        )}
      </section>
    </Wrapper>
  );
}

export default BookingForm;
