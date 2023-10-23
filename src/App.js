import { uid } from "uid";
import { useState } from "react";
import Form from "./components/Form";
import React from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(data) {
    // console.log(data);
    setActivities([{ ...activities, data, id: uid() }]);
  }
  console.log(activities);
  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
