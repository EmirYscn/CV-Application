import { useState } from "react";
import Input from "./input";

export default function Info() {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="section info">
      <h1>General Info</h1>
      <form
        className="inputs"
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <Input label={"First Name: "} isEditing={isEditing} />
        <Input label={"Last Name: "} isEditing={isEditing} />
        <Input label={"E-Mail: "} type={`email`} isEditing={isEditing} />
        <Input label={"Phone Number: "} type={"tel"} isEditing={isEditing} />
        <button type="submit" className="edit-button">
          {" "}
          {isEditing ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
}
