import { useState } from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      activity: event.target.nameActivity.value,
      isGoodWheather: event.target.isGoodWeather.checked,
    };

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    onAddActivity(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <h1>Hello</h1>
        <label htmlFor="name">Name</label>
        <input
          //   value="value"
          type="text"
          id="name"
          className="form__input"
          name="nameActivity"
          placeholder="Your activity"
        />

        <label htmlFor="isForGoodWeather">Is it for good weather?</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          className="form__checkbox"
          name="isGoodWeather"
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
