import Input from "./input";

export default function Experience({ isEditing }) {
  return (
    <div className="section experience">
      <h1>Experience</h1>
      <div className="inputs">
        <Input label={"Company Name: "} isEditing={isEditing} />
        <Input label={"Position Title: "} isEditing={isEditing} />
        <Input label={"Responsibilities: "} isEditing={isEditing} />
        <Input label={"Date of Start: "} isEditing={isEditing} />
        <Input label={"Date of End: "} isEditing={isEditing} />
      </div>
    </div>
  );
}
