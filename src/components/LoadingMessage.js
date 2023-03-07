import { useEffect } from "react";

export function LoadingMessage() {
  useEffect(() => {
    return () => {
      console.log("component has unmounted!");
    };
  }, []);

  return (
    <>
      <p>Loading....!</p>
    </>
  );
}
