const FormTextArea = ({ label, name }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows="5"
        className="border p-2 rounded"
        required
      />
    </div>
  );
};

export default FormTextArea;
