const RegistrationForm = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event, 111);
		const { email: { value: emailValue }, password: { value: passwordValue } } = event.target
		alert(`输入的email: ${emailValue}, password: ${passwordValue}`)
      }}
    >
      <div>
        <label htmlFor="email">email：</label>
        <input name="email" id="email" type="email" placeholder="请输入email" style={{ padding: 4 }} />
      </div>

      <div>
        <label htmlFor="password">password：</label>
        <input name="password" id="password" type="" placeholder="请输入password" style={{ padding: 4 }} />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
