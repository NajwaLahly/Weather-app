type FormRowProps = {
  name: string;
};

export default function FormRow({ name }: FormRowProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      {name === "Message" ? (
        <textarea id={name}>Type your message here</textarea>
      ) : (
        <input type="text" id={name} style={{ width: "100%" }} />
      )}
    </>
  );
}
