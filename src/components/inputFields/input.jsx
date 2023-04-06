const InputFields = (props) => {
  const { className, lable, classLable, data, setData } = props;
  return (
    <>
      <lable className={classLable}>{lable}</lable>
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
