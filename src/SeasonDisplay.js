import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "夏" : "冬";
  } else {
    return lat > 0 ? "冬" : "夏";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "冬"
      ? "寒いからかまくらを作ろう！！！"
      : "暑いから海に行こう！！！";
  const icon = season === "冬" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
