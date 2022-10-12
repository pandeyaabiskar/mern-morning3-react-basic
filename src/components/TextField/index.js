function TextField(props) {
  const { inputText, setInputText } = props;

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return <input value={inputText} onChange={handleInputChange}></input>;
}

export default TextField;