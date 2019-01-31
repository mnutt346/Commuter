import React from "react";

const MyCommutes = props => (
  <div className="my-commutes-container">
    <form className="my-commutes-form" action="/MyCommutes" method="post">
      <div className="my-commutes-form-header">My Commutes</div>
      Home: <input type="text" name="home" onChange={props.handleChange} />
      Work: <input type="text" name="work" onChange={props.handleChange} />
      <input type="submit" value="Set Commutes" />
    </form>
  </div>
);

export default MyCommutes;
