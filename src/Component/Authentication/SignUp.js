import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import indianFlag from "../../images/indian-flag.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { requestData } from "../../Utils/HttpClient";
import {reactLocalStorage} from 'reactjs-localstorage';

function SignUp() {
  const data = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    zipcode: "",
    bussinessName: "",
    panNumber: "",
    tradeNumber: "",
    businessMobile: "",
    accountHolderName: "",
    accountNumber: "",
    branchName: "",
    IFSCcode: "",
  };

  const [registerData, setRegisterData] = useState(data);
  const [checkBox, setCheckBox] = useState(false);
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
    const {
      firstname,
      lastname,
      email,
      password,
      mobile,
      country,
      state,
      city,
      addressLine1,
      addressLine2,
      zipcode,
      bussinessName,
      panNumber,
      tradeNumber,
      accountHolderName,
      accountNumber,
      branchName,
      IFSCcode,
    } = registerData;
    let emailRegex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/;
    let phoneRegex = /^[7-9]\d{9}$/;
    if (firstname === "") {
      toast.error("First Name can't be Empty!", toastOptions);
      return false;
    } else if (lastname === "") {
      toast.error("Last Name can't be Empty!", toastOptions);
      return false;
    } else if (!emailRegex.test(email)) {
      toast.error("Enter a valid email!", toastOptions);
      return false;
    } else if (password.length !== 8) {
      toast.error("Password can't be Empty!", toastOptions);
      return false;
    } else if (!phoneRegex.test(mobile)) {
      toast.error("Enter a valid phone number!", toastOptions);
      return false;
    } else if (country === "") {
      toast.error("Country can't be Empty!!", toastOptions);
      return false;
    } else if (state === "") {
      toast.error("State can't be Empty!!", toastOptions);
      return false;
    } else if (city === "") {
      toast.error("City can't be Empty!!", toastOptions);
      return false;
    } else if (addressLine1 === "") {
      toast.error("Address can't be Empty!!", toastOptions);
      return false;
    } else if (addressLine2 === "") {
      toast.error("Address can't be Empty!!", toastOptions);
      return false;
    } else if (zipcode.length !== 6) {
      toast.error("Enter a valid pincode!", toastOptions);
      return false;
    } else if (bussinessName === "") {
      toast.error("Business Name can't be Empty!!", toastOptions);
      return false;
    } else if (panNumber === "") {
      toast.error("Pan Card Number can't be Empty!!", toastOptions);
      return false;
    } else if (tradeNumber === "") {
      toast.error("Trade Number can't be Empty!!", toastOptions);
      return false;
    } else if (accountHolderName === "") {
      toast.error("Account Holder Name can't be Empty!!", toastOptions);
      return false;
    } else if (accountNumber === "") {
      toast.error("Account Number can't be Empty!!", toastOptions);
      return false;
    } else if (branchName === "") {
      toast.error("Branch Name can't be Empty!!", toastOptions);
      return false;
    } else if (IFSCcode === "") {
      toast.error("IFSC code can't be Empty!!", toastOptions);
      return false;
    } else if (!checkBox) {
      toast.error("Please accept the Term and Condition", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    if (handleValidation()) {
      const result = await requestData(
        "distributor/register",
        "POST",
        registerData
      );
      console.log(result);
      if (result && result.status) {
        reactLocalStorage.setObject('adminData', result.data);
        toast.success(result.message, toastOptions);
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        toast.error(result.message, toastOptions);
      }
    }
  };

  return (
    <>
      <section className="sign_up">
        <div className="container">
          <div className="col-xl-12 col-lg-12 col-md-12  col-12">
            <div className="register">
              <div className="row">
                <div className="user_icon">
                  <li>
                    <i className="fa fa-user-plus" aria-hidden="true" />
                  </li>
                </div>
                <div className="user_details">
                  <h4>Register as a Distributor</h4>
                  <h5>Fill the form below to get your account activated</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sign_up_form">
            <div className="row align-items-start mb-5">
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-title">
                  <h6>01</h6>
                  <h3>Personal Information</h3>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First name</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your first name"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          firstname: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last name</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your last name"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          lastname: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone number</label>
                    <input
                      type="number"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your mobile number"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          mobile: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start mb-5">
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-title">
                  <h6>02</h6>
                  <h3>Address Information</h3>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Country</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your country"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">City</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your city"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your address"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          addressLine2: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">State</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your state"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your address"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          addressLine1: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      ZIP / Postal code
                    </label>
                    <input
                      type="number"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your pincode"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          zipcode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start mb-5">
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-title">
                  <h6>03</h6>
                  <h3>Business information</h3>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Business Name</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your business name"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          bussinessName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Trade number</label>
                    <input
                      type="number"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your trade number"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          tradeNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">PAN number</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your pan number"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          panNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone number</label>
                    <input
                      type="number"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your contact number"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          businessMobile: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start mb-5">
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-title">
                  <h6>04</h6>
                  <h3>Bank Details</h3>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4  col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Account Holder name
                    </label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Account holder name"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          accountHolderName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Branch name</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Branch name"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          branchName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4 col-12">
                <div className="form-box">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Account number</label>
                    <input
                      type="number"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Account number"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          accountNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-group">
                    <label htmlfor="exampleInputEmail1">IFSC code</label>
                    <input
                      type="number"
                      className="form-control form-input form-image"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter IFSC code"
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          IFSCcode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy_policy">
        <div className="container">
          <div className="col-lg-4 col-xl-4 col-md-4 col-12"></div>
          <div className="col-lg-8 col-xl-8 col-md-8  col-12">
            <div className="form-box">
              <input
                type="checkbox"
                className="form-control form-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Mehek Shah"
                onChange={(e) => setCheckBox(e.target.checked)}
              />
              <p>
                I agree to the Terms & Conditions and Privacy Policy of Ababil
                Books . I would be held responsible if I sell pirated books or
                illegal prints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="button">
        <div className="container">
          <div className="col-lg-4 col-xl-4 col-md-4 col-12"></div>
          <div lassName="col-lg-8 col-xl-8 col-md-8  col-12">
            <div className="apply">
              {/* <Link to='/confirmation'> */}
              <button onClick={handleSubmit} className="approval">
                Apply for approval
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default SignUp;
