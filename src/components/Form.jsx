import React from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", "")

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name:</label>
            <input
              id="name-input"
              data-testid="name"
              type="text"
              value={name || ""}
              onChange={handleNameChange}
            />
            <button type="submit">Submit</button>
        </form>
      </>
    );
}

export default Form