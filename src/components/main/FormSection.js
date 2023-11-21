const FormSection = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FormSection;
