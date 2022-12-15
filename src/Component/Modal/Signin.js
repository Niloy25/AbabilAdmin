import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { requestData } from "../../Utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crossicons from "../../images/close.png";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";

export default function Signin(props) {
  const data = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(data);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const handleValidation = () => {
    const { email, password } = loginData;
    let emailRegex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email!", toastOptions);
      return false;
    } else if (password.length <= 8) {
      toast.error("Password should be 8 characters!", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (handleValidation()) {
      const result = await requestData("distributor/login", "POST", loginData);
      console.log(result);
      if (result && result.status) {
        console.log(result.data);
        reactLocalStorage.setObject("adminData", result.data);
        reactLocalStorage.setObject("adminLogin", { status: true });
        toast.success("Login Successful!", toastOptions);
        setTimeout(() => {
          navigate("/dashboard");
          props.handleClickClose();
        }, 3000);
      }
    }
  };

  return (
    <>
      {console.log("LoginData", loginData)}
      <div className="book_edit_modal4 modal-part SigninModal">
        <div className="modal-content">
          <div className="book_details">
            <div className="head">
              <h4
                className="text-center"
                style={{ fontSize: "30px", marginBottom: "48px" }}
              >
                Login
              </h4>
            </div>
            <div className="row mb-4">
              <div className="col-md-12">
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your Email"
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="savechanges_btn" style={{ margin: "auto" }}>
                <button onClick={handleLogin} className="btn">
                  Login
                </button>
              </div>
            </div>
              <div className="d-flex">
                <h4>Don't Have An Account?</h4>
                <h4 className="ml-2" style={{cursor: 'pointer'}} onClick={props.handleClickClose}>Create Account</h4>
              </div>
          </div>
          <button
            className="close-modal-part btn"
            onClick={props.handleClickClose}
            style={{
              border: "0",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img src={Crossicons} className="img-fluid" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
