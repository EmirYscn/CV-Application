import { useState } from "react";
import Input from "./input";

export default function Info() {
  return (
    <div className="info">
      <h1>General Info</h1>
      <div className="inputs">
        <Input label={"First Name: "} />
        <Input label={"Last Name: "} />
        <Input label={"E-Mail: "} type={`email`} />
        <Input label={"Phone Number: "} type={"tel"} />
      </div>
    </div>
  );
}
