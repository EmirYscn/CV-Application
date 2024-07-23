import Input from "./input";

export default function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="inputs">
        <Input label={"Company Name: "} />
        <Input label={"Position Title: "} />
        <Input label={"Responsibilities: "} />
        <Input label={"Date of Start: "} />
        <Input label={"Date of End: "} />
      </div>
    </div>
  );
}
