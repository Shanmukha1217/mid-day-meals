import { useState } from "react";
import { handleInputChange } from "../utils/utils";
import Button from "../components/Button";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Successfull : ", loginData);
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-60 gap-2 items-center"
      >
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={(e) => handleInputChange(loginData, setLoginData, e)}
            placeholder="Enter email..."
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleInputChange(loginData, setLoginData, e)}
            placeholder="Enter password..."
          />
        </div>
        <div>
          <Button type={"submit"} text={"Login"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
