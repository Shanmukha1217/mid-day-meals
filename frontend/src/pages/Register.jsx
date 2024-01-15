import { useState } from "react";
import { handleInputChange } from "../utils/utils";
import Button from "../components/Button";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    diseCode: "",
    schoolName: "",
    mobileNumber: "",
    email: "",
    address: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Successfull", registerData);
    setRegisterData({
      diseCode: "",
      schoolName: "",
      mobileNumber: "",
      email: "",
      address: "",
      password: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="flex flex-col w-60 gap-2 items-center"
      >
        <div className="formGroup">
          <label htmlFor="diseCode">Dise Code</label>
          <input
            type="text"
            name="diseCode"
            value={registerData.diseCode}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            name="schoolName"
            value={registerData.schoolName}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={registerData.mobileNumber}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          {" "}
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={registerData.address}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          {" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={(e) =>
              handleInputChange(registerData, setRegisterData, e)
            }
          />
        </div>
        <div className="formGroup">
          <Button type={"submit"} text={"Register"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
