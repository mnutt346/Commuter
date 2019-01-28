import React from "react";

const Commute = props => {
  const commuteTime = props.commuteTime;
  return commuteTime ? <div className="commute-time">{commuteTime}</div> : null;
};

export default Commute;
