const handleInputChange = (obj, setObj, e) => {
  const { name, value } = e.target;
  setObj({
    ...obj,
    [name]: value,
  });
};

export { handleInputChange };
