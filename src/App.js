import { uid } from "uid";
import React, { useEffect, useState } from "react";
//Components
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [weather, setWeather] = useState();
  const initialActivities = [];
  const [activities, setActivities] = useLocalStorageState(
    "activities",
    initialActivities
  );

  useEffect(() => {
    const interval = setInterval(() => {
      async function startingFetching() {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        const weatherData = await response.json();
        setWeather(weatherData.isGoodWeather);
      }
      startingFetching();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleAddActivity(activity) {
    // console.log(data);
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  // console.log(activities);

  // function handleDeleteActivity(activityId) {
  //   const newActivities = activities.filter(
  //     (activity) => activity.id !== activityId
  //   );
  //   setActivities(newActivities);
  // }

  // const filteredActivities = activities.filter(
  //   (activitiy) => activitiy.isGoodWeather === weather
  // );

  return (
    <>
      <h1>Weather and Activities</h1>
      <List activities={activities} isGoodWeather={weather} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
