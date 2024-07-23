import { useState } from "react";

export default function Input({ label, isEditing, type = "text" }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <label>{label}</label>
      {isEditing ? (
        <input type={type} value={text} onChange={handleChange} />
      ) : (
        <span>{text}</span>
      )}
    </>
  );
}
