export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      activity: event.target.nameActivity.value,
      isGoodWheather: event.target.isGoodWeather.checked,
    };

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    console.log(newActivity);
    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new activitiy:</h2>
      <div>
        <fieldset className="form--fieldset">
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            id="name"
            className="form__input"
            name="nameActivity"
            placeholder="Your activity"
          />
          <label htmlFor="isGoodWeather">Is it for good weather?</label>
          <input
            type="checkbox"
            id="isGoodWeather"
            className="form__checkbox"
            name="isGoodWeather"
          />
          <button type="submit">Submit</button>
        </fieldset>
      </div>
    </form>
  );
}
