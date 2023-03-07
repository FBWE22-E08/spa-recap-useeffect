import { useEffect } from "react";

export default function DefaultMessage() {
  useEffect(() => {
    return () => {
      console.log("component has unmounted!");
    };
  }, []);

  return (
    <>
      <p>User not yet loaded!</p>
    </>
  );
}
