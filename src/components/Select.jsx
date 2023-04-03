function Select({ label, value, onChange, options }) {
  return (
    <div className="select-container">
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange}>
        {options.map((currCategory) => (
          <option key={currCategory} value={currCategory}>
            {currCategory}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
