const Option = ({ update, totalFeedback, reset }) => {
  return (
    <div>
      <button onClick={() => update("good")} type="button">
        Good
      </button>
      <button onClick={() => update("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => update("bad")} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={reset} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Option;
