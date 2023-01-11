import styled from "styled-components";
import { useState } from "react";

export default function Form({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    if (!lastName) {
      setErrorMessage(true);
      return;
    }

    const bootcamp = form.bootcamp.value;
    onSubmit(firstName, lastName, bootcamp);
    event.target.firstName.value = "";
    event.target.lastName.value = "";
    setErrorMessage(false);
    event.target.firstName.focus();
  }

  return (
    <Form1 onSubmit={handleSubmit} id="addDeveloperForm">
      <h2>add a new developer</h2>
      <label htmlFor="fistName">firstName</label>
      <input
        className="addDeveloperFirstNameInput"
        type="text"
        id="firstName"
        name="firstName"
        autoComplete="off"
      />
      <label htmlFor="lastName">lastName</label>
      <input
        className="addDeveloperLastNameInput"
        type="text"
        id="lastName"
        name="lastName"
        autoComplete="off"
      />
      {errorMessage ? (
        <p className="errorMessage">you need a last name!!!!</p>
      ) : null}
      <label htmlFor="bootcamp">choose a bootcamp</label>
      <select name="bootcamp" id="bootcamp">
        <option value="jsfs">jsfs</option>
        <option value="jfs">jfs</option>
        <option value="dnfs">dnfs</option>
      </select>

      <button id="addDeveloperBtn">go</button>
    </Form1>
  );
}

const Form1 = styled.form`
  padding: 1rem;
  display: grid;
  gap: 0.3rem;

  button {
    width: 100px;
    justify-self: center;
  }
`;
