import Input from "./input";

export default function Info({ isEditing }) {
  return (
    <div className="section info">
      <h1>General Info</h1>
      <div className="inputs">
        <Input label={"First Name: "} isEditing={isEditing} />
        <Input label={"Last Name: "} isEditing={isEditing} />
        <Input label={"E-Mail: "} type={`email`} isEditing={isEditing} />
        <Input label={"Phone Number: "} type={"tel"} isEditing={isEditing} />
      </div>
    </div>
  );
}
