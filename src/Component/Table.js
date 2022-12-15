import React, { useState } from "react";
import DeleteBook from "../Component/Modal/DeleteBook";
import EditImage from "./Modal/EditImage";
import Multistepsmodal from "../Component/Modal/Multistepsmodal";
import { useNavigate } from "react-router-dom";

export default function Table({ inventoryData }) {
  const [box, setBox] = useState(false);
  const [itemData, setItemData] = useState("")
  const [modal2, setModal2] = useState(false);
  const handleClickClose = () => {
    setModal2(!modal2);
  };
  const [modal3, setModal3] = useState(false);
  const handleClickClose2 = () => {
    setModal3(!modal3);
  };
  console.log("Inventory...", inventoryData);
  const navigate = useNavigate()

  return (
    <>
    {console.log("Table", itemData)}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">S.No</th>
              <th>Book Name</th>
              <th>Type</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{item.bookName}</td>
                  {item.BookType?.map((item, index) => {
                    return <td key={index}>{item.categoryName}</td>;
                  })}
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    {item.genre?.categoryName}
                    <a
                      href="#"
                      onClick={() => {
                        setBox(!box);
                      }}
                    >
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      {box && (
                        <div className="boxwrap">
                          <h2
                            onClick={() => {
                              setModal3(true);
                              setItemData(item)
                            }}
                          >
                            <i class="fa-solid fa-pencil"></i>Edit details
                          </h2>
                          <h2
                            onClick={() => {
                              setModal2(true);
                            }}
                          >
                            <i class="fa-regular fa-trash-can"></i>Remove
                          </h2>
                          <h2>
                            <i class="fa-solid fa-circle-info"></i>See details
                          </h2>
                        </div>
                      )}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modal2 && (
        <DeleteBook
          title={"Are you sure ?"}
          paragraph={
            "The book “The design of everyday things” will be deleted and no longer be shown to the buyers."
          }
          cancelbtn={"NO"}
          confirmbtn={"Yes, Delete"}
          handleClickClose={handleClickClose}
        />
      )}
      {modal3 && (
        <Multistepsmodal
        itemData={itemData}
          handleClickClose2={handleClickClose2}
        />
      )}
    </>
  );
}
