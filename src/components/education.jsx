import Input from "./input";

export default function Education() {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="inputs">
        <Input label={"School Name: "} />
        <Input label={"Title of Study: "} />
        <Input label={"Date of Study "} />
      </div>
    </div>
  );
}
