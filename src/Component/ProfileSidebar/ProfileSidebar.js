import React, { useState } from "react";
import profile from "../../images/profile.png";
import { requestData } from "../../Utils/HttpClient";
import DeleteBook from "../Modal/DeleteBook";
import { reactLocalStorage } from "reactjs-localstorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ProfileSidebar() {
  const user = JSON.parse(reactLocalStorage.get("adminData"));
  const userId = user._id;
  const navigate = useNavigate()
  console.log("UserId", userId);

  const [modal2, setModal2] = useState(false);
  const handleClickClose = () => {
    setModal2(!modal2);
  };

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

  const handleDelete = async () => {
    const result = await requestData(
      `distributor/distributor-delete/${userId}`,
      "POST"
    );
    if (result && result.status) {
      toast.success(result.message, toastOptions);
      reactLocalStorage.setObject('adminLogin', {status: false});
      reactLocalStorage.setObject('adminData', {});
      setTimeout(() => {
        navigate('/')
      }, 3000);
    } else {
      toast.error(result.message, toastOptions);
    }
  };

  return (
    <>
      <div className="profileSidebar">
        <div className="media align-items-center">
          <div className="profie_MEdia">
            <img src={profile} className="img-fluid" />
          </div>
          <div className="media-body ml-4 ">
            <h4 className="title">Mehek Shah</h4>
            <div className="d-flex align-items-center">
              <div className="mr-3">
                <span className="viewOrders">5.9K Orders</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="ratingORders mr-1">4.6</span>
                <i className="fa-solid fa-star ratingiCons"></i>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#profile"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start listActive"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Profile</span>
            <span className="submenu-icon ml-auto" />
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </a>

        <a
          href="#notification"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Notifications</span>
            <span className="submenu-icon ml-auto" />
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </a>

        <a
          href="#notification"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start mt-5"
          onClick={handleClickClose}
        >
          <div
            className="d-flex w-100 justify-content-start align-items-center"
          >
            <span className="menu-collapsed">Logout</span>
            <span className="submenu-icon ml-auto" />
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </a>
      </div>

      {modal2 && (
        <DeleteBook
          title={"Are you sure ?"}
          paragraph={
            "You will be logged out of your account. You can login back later"
          }
          cancelbtn={"NO"}
          confirmbtn={"Yes"}
          handleClickClose={handleClickClose}
          handleDelete={handleDelete}
        />
      )}
      <ToastContainer />
    </>
  );
}
