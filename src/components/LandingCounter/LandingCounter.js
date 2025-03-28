import React, { useEffect, useState } from "react";
import './LandingCounter.css'
export default function LandingCounter({ count }) {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);

  return <span className="landing-status__count text-white">{courseCounter}</span>;
}
