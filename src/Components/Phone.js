import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/semantic-ui.css";

const Phone = () => {
  return (
    <PhoneInput
      country={"us"}
      //   value={this.state.phone}
      //   onChange={(phone) => this.setState({ phone })}
      style={{ width: "100%" }}
    />
  );
};

export default Phone;
