import PropTypes from "prop-types";
import "../form/form.css";

export const Form = ({ fields, onSubmit, className, submitButtonLabel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {};

    fields.forEach((field) => {
      formData[field.name] = event.target[field.name].value;
    });

    onSubmit(formData); 
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className={field.className}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.icon && <i className={`icon-${field.icon}`} />}
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className={field.inputClassName} 
          />
          {field.showCheckbox && (
            <div>
              <input type="checkbox" name={`${field.name}_checkbox`} />
            <label >
              {field.checkboxLabel}
            </label>
            </div>
          )}
        </div>
      ))}
      <button type="submit">{submitButtonLabel}</button>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      icon: PropTypes.string,
      showCheckbox: PropTypes.bool,
      checkboxLabel: PropTypes.string,
      className: PropTypes.string,
      inputClassName: PropTypes.string, 
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  submitButtonLabel: PropTypes.string.isRequired,
};
