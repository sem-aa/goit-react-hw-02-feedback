import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ cliclOnGood, cliclOnNeutral, cliclOnBad }) => (
  <div>
    <button className={s.button} type="button" onClick={cliclOnGood}>
      Good
    </button>
    <button className={s.button} type="button" onClick={cliclOnNeutral}>
      Neutral
    </button>
    <button className={s.button} type="button" onClick={cliclOnBad}>
      Bad
    </button>
    <h2>Statistics</h2>
  </div>
);

export default FeedbackOptions;
