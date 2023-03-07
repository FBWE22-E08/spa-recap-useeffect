import { useState } from "react";

import User from "./components/User";

// root (not route!)
function App() {
  // handler function

  //     getter    setter
  const [user, setUser] = useState(false);
  // !important! user is a raw object, it can not be rendered by React (it is not a valid React child)

  async function fetchRandomUser() {
    // synchronous
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json(); // parsing into JSON (to filter and translate into other format)

    setUser(json.results[0]);
  }

  function handleClick() {
    // asynchronous
    fetchRandomUser();
  }

  // JSX - JavaScript XML
  // only expressions in JSX please!
  return (
    <div className="App">
      {user ? <User user={user} /> : <p>User not yet loaded</p>}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
