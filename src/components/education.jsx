import Input from "./input";

export default function Education({ isEditing }) {
  return (
    <div className="section education">
      <h1>Education</h1>
      <div className="inputs">
        <Input label={"School Name: "} isEditing={isEditing} />
        <Input label={"Title of Study: "} isEditing={isEditing} />
        <Input label={"Date of Study "} isEditing={isEditing} />
      </div>
    </div>
  );
}
