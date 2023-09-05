import PropTypes from 'prop-types';

export const Form = ({ fields, onSubmit, className, submitButtonLabel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {}; // foi criado um objeto para armazenar os dados do formulário

    fields.forEach((field) => {
      if (field.type === 'checkbox') {
        if (event.target[field.name].checked)
          formData[field.name] = event.target[field.name].checked;
        else {
          formData[field.name] = false;
        }
      } else {
        formData[field.name] = event.target[field.name].value; // Preenche o objeto com os valores digitados do formulário
      }
    });

    onSubmit(formData); // para chamar a função onSubmit com o objeto de dados do formulário
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className={field.className}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.icon && <i className={`icon-${field.icon}`} />} <br />
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className={field.inputClassName}
          />
          {field.showCheckbox && (
            <label>
              <input type="checkbox" name={`${field.name}_checkbox`} />{' '}
              {field.checkboxLabel}
            </label>
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
