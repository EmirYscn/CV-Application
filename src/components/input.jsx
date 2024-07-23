import { useState } from "react";

export default function Input({ label, type = "text" }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input type={type} value={text} onChange={handleChange} />
    </>
  );
}
