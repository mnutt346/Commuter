import React from "react";

const Commute = props => {
  const commuteTime = props.commuteTime;
  console.log(commuteTime);
  return commuteTime ? <div className="commute-time">{commuteTime}</div> : null;
};

export default Commute;
