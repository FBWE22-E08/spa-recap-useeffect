import { useEffect, useState } from "react";

import User from "./components/User";
import { LoadingMessage } from "./components/LoadingMessage";

// root (not route!)
function App() {
  //     getter    setter
  const [user, setUser] = useState(false);

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

  useEffect(() => {
    fetchRandomUser();
  }, []);

  useEffect(() => {
    console.log("The dependency has changed!");
  }, [user]);

  // JSX - JavaScript XML
  // only expressions in JSX please!
  return (
    <div className="App">
      {user ? <User user={user} /> : <LoadingMessage />}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
