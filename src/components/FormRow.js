const FormRow = ({ handleChange, name, type, value, textLabel }) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">{textLabel || name}</label>
      <input
        type={type}
        name={name}
        className="form-input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
