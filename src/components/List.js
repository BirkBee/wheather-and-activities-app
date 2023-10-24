export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! Here's what you can do now: "}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {" "}
            {activity.name}
            <button
              className="delete"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
