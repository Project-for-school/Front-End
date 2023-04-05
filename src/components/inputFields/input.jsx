const InputFields = (props) => {
  const { className, lable, classLabel, data, setData } = props;
  return (
    <>
      <lable className={classLabel}>{lable}</lable>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className={className}
        placeholder={lable}
      />
    </>
  );
};

export default InputFields;
