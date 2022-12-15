import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, useNavigation } from "react-router-dom";
import "./App.css";
import Dashboard from "./Views/Dashboard/index";
import Inventory from "./Views/Inventory/Index";
import MainLayout from "./Layout/MainLayout";
import SignUp from "./Component/Authentication/SignUp";
import Payment from "../src/Views/Payment/index";
import Order from "../src/Views/Order/Index";
import Profile from "./Views/Profile/index";
import Notification from "./Views/Notification";
import AnalyticsEmpty from "./Views/AnalyticsEmpty/index";
import Confirmation from "./Component/Authentication/Confirmation";
import Offers from "./Views/Offers";
import SelectBooks from "./Views/Offers/SelectBooks";
import OffersList from "./Views/Offers/OffersList";
import OrderDispatch from "../src/Views/Order/Dispatched";
import OrderDeliver from "./Views/Order/Deliver";
import OrderCompleted from "../src/Views/Order/Completed";
import Replacement from "../src/Views/Order/Replacement";
import CancelOrder from "../src/Views/Order/CancelOrder";
import { reactLocalStorage } from "reactjs-localstorage";
import PrivateRoute from "./Layout/PrivateRoute";

function App() {

  const authenticate = JSON.parse(reactLocalStorage.get("adminLogin"));
  console.log(authenticate.status);


  return (
    <>
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/order" element={<Order />} />
                <Route path="/nobooksuploaded" element={<AnalyticsEmpty />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/selectbooks" element={<SelectBooks />} />
                <Route path="/offerslist" element={<OffersList />} />
                <Route path="/order-dispatch" element={<OrderDispatch />} />
                <Route path="/order-deliver" element={<OrderDeliver />} />
                <Route path="/order-completed" element={<OrderCompleted />} />
                <Route path="/order-replacement" element={<Replacement />} />
                <Route path="/cancel-order" element={<CancelOrder />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
