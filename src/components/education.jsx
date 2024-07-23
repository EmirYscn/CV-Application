import { useState } from "react";
import Input from "./input";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="section education">
      <h1>Education</h1>
      <form
        className="inputs"
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <Input label={"School Name: "} isEditing={isEditing} />
        <Input label={"Title of Study: "} isEditing={isEditing} />
        <Input label={"Date of Study "} isEditing={isEditing} />
        <button type="submit" className="edit-button">
          {" "}
          {isEditing ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
}
