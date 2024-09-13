import { useEffect, useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [value, setValue] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("value"));

    if (savedData) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValue((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const reset = () => {
    setValue({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = value.good + value.neutral + value.bad;

  useEffect(() => {
    window.localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  return (
    <>
      <Description />
      <Option
        update={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />

      {totalFeedback <= 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          good={value.good}
          neutral={value.neutral}
          bad={value.bad}
          total={totalFeedback}
          positive={Math.round((value.good / totalFeedback) * 100)}
        />
      )}
    </>
  );
}

export default App;
