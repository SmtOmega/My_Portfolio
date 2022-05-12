const FormTextArea = ({ handleChange, name, value, textLabel }) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {textLabel || name}
      </label>
      <textarea
        name={name}
        className="form-input"
        onChange={handleChange}
        value={value}
        rows="3"
      ></textarea>
    </div>
  );
};

export default FormTextArea;
