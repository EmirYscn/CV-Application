import { useState } from "react";
import Input from "./input";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="section experience">
      <h1>Experience</h1>
      <form
        className="inputs"
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <Input label={"Company Name: "} isEditing={isEditing} />
        <Input label={"Position Title: "} isEditing={isEditing} />
        <Input label={"Responsibilities: "} isEditing={isEditing} />
        <Input label={"Date of Start: "} isEditing={isEditing} />
        <Input label={"Date of End: "} isEditing={isEditing} />
        <button type="submit" className="edit-button">
          {" "}
          {isEditing ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
}
