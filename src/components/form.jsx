import { useState } from "react";

import Info from "./info";
import Education from "./education";
import Experience from "./experience";

export default function Form() {
  const [isEditing, setIsEditing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleEdit(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(!isSubmitting);
    await submitForm();
    setIsSent(!isSent);
  }

  if (isSent) {
    return <h1>Thanks For Submitting</h1>;
  }
  return (
    <form className="form">
      <Info isEditing={isEditing} />
      <Education isEditing={isEditing} />
      <Experience isEditing={isEditing} />
      <button
        type="submit"
        disabled={isSubmitting}
        className={isSubmitting ? "submitting edit-button" : "edit-button"}
        onClick={handleEdit}
      >
        {" "}
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isEditing || isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}

// Pretend to submit form
function submitForm() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
