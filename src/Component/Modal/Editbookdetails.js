import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { requestData } from "../../Utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TagsInput } from "react-tag-input-component";

function Editbookdetails({ itemData }) {
  console.log("BookData", itemData);
  console.log(itemData.bookPriceDetails?._id); 

  const [tag, setTag] = useState([]);
  const [itemDataBook, setItemDataBook] = useState(itemData)

  const [bookPrice, setBookPrice] = useState([
    {
      bookTypeID: "",
      mrp: "",
      price: "",
      quantity: "",
    },
  ]);

  useEffect(() => {
    fetchBookType();
  }, []);

  const [getBookType, setGetBookType] = useState([]);

  const fetchBookType = async () => {
    const result = await requestData("distributor/view-booktype", "GET");
    if (result && result.status) {
      setGetBookType(result.data);
      console.log("BookType", result.data);
    }
  };

  console.log("State", itemDataBook);

  const data = {
    bookName: "",
    author: "",
    publisher: "",
    edition: "",
    isbnNo: "",
    bookDesc: "",
    aboutAuthor: "",
    deliveryEstimate: "",
    image: "",
  };
  const [bookDetail, setBookDetail] = useState(data);

  const addInputField = () => {
    setBookPrice([
      ...bookPrice,
      {
        bookTypeID: "",
        mrp: "",
        price: "",
        quantity: "",
      },
    ]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...bookPrice];
    list[index][name] = value;
    setBookPrice(list);
  };

  // const toastOptions = {
  //   position: "bottom-right",
  //   autoClose: 2000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "colored",
  // };

  // const handleValidation = () => {
  //   const {
  //     bookName,
  //     author,
  //     publisher,
  //     edition,
  //     isbnNo,
  //     bookDesc,
  //     aboutAuthor,
  //     deliveryEstimate,
  //     image,
  //   } = bookDetail;

  //   const { bookTypeID, mrp, price, quantity } = bookPrice;

  //   if (bookName === "") {
  //     toast.error("Book Name can't be Empty!", toastOptions);
  //     return false;
  //   } else if (author === "") {
  //     toast.error("Author can't be Empty!", toastOptions);
  //     return false;
  //   } else if (publisher === "") {
  //     toast.error("Publisher can't be Empty!", toastOptions);
  //     return false;
  //   } else if (edition === "") {
  //     toast.error("Edition can't be Empty!", toastOptions);
  //     return false;
  //   } else if (isbnNo === "") {
  //     toast.error("IsBnNo can't be Empty!", toastOptions);
  //     return false;
  //   } else if (bookDesc === "") {
  //     toast.error("Book Describtion can't be Empty!", toastOptions);
  //     return false;
  //   } else if (aboutAuthor === "") {
  //     toast.error("Say Something about author!", toastOptions);
  //     return false;
  //   } else if (bookTypeID === "") {
  //     toast.error("Please select any book type!", toastOptions);
  //     return false;
  //   } else if (mrp === "") {
  //     toast.error("Please give the price!", toastOptions);
  //     return false;
  //   } else if (price === "") {
  //     toast.error("Please give your price!", toastOptions);
  //     return false;
  //   } else if (quantity === "") {
  //     toast.error("Please enter the quantity!", toastOptions);
  //     return false;
  //   } else if (deliveryEstimate === "") {
  //     toast.error("Please give the Estimate delivery date!", toastOptions);
  //     return false;
  //   } else if (tag.length === 0) {
  //     toast.error("Please give any tags!", toastOptions);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const editBook = async () => {
    // if (handleValidation()) {
      const dataSend = {
        bookName: bookDetail.bookName !== "" ? bookDetail.bookName : itemData.bookName,
        author: bookDetail.author !== "" ? bookDetail.author : itemData.author,
        publisher: bookDetail.publisher !== "" ? bookDetail.publisher : itemData.publisher,
        edition: bookDetail.edition !== "" ? bookDetail.edition : itemData.edition,
        isbnNo: bookDetail.isbnNo !== "" ? bookDetail.isbnNo : itemData.isbnNo,
        tags: tag,
        bookDesc: bookDetail.bookDesc !== "" ? bookDetail.bookDesc : itemData.bookDesc,
        aboutAuthor: bookDetail.aboutAuthor !== "" ? bookDetail.aboutAuthor : itemData.aboutAuthor,
        deliveryEstimate: bookDetail.deliveryEstimate !== "" ? bookDetail.deliveryEstimate : itemData.deliveryEstimate,
        bookPriceDetails: bookPrice,
        image:
          "https://media.istockphoto.com/id/1256910594/vector/set-of-paper-books-with-colorful-hard-cover-isolated-on-white-background-vector-flat.jpg?s=612x612&w=0&k=20&c=5IaTPgzhnHO3FMvSavQdB5ytf6MQRbZOJOBJ7BFT6mI=",
      };
      console.log(dataSend);
      // const result = await requestData(
      //   "distributor/single-book-upload",
      //   "POST",
      //   dataSend
      // );
      // console.log(result);
      // if (result && result.status) {
      //   console.log(result.data);
      //   toast.success("Book added Successfully!", toastOptions);
      // }
    // }
  };

  return (
    <div className="book_edit_modal4 modal-part">
      <div className="modal-content">
        <div className="book_details">
          <div className="head">
            <h4>Book details</h4>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="">Title of book</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder={itemData.bookName}
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        bookName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder={itemData.author}
                    onChange={(e) =>
                      setBookDetail({ ...bookDetail, author: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Publisher</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder={itemData.publisher}
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        publisher: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Publication date</label>
                  <input
                    type="date"
                    className="form-control"
                    id=""
                    placeholder="12 / 10 / 2020"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Edition</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder={itemData.edition}
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        edition: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">ISBN</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder={itemData.isbnNo}
                    onChange={(e) =>
                      setBookDetail({ ...bookDetail, isbnNo: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                    <TagsInput
                      value={itemData.tags}
                      onChange={setTag}
                      name="fruits"
                      placeHolder="Enter Tags"
                    />
                  </div>
              </form>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="">Book description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows={9}
                    id=""
                    placeholder={itemData.bookDesc}
                    defaultValue={""}
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        bookDesc: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">About the author</label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows={9}
                    id=""
                    placeholder={itemData.aboutAuthor}
                    defaultValue={""}
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        aboutAuthor: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bottom_head">
            <h4>Pricing details</h4>
          </div>
          {bookPrice?.map((item, index) => {
            return (
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <select
                        className="form-control"
                        id="booktype"
                        name="bookTypeID"
                        value={itemData.bookPriceDetails?.bookTypeId}
                        onChange={(event) => handleChange(index, event)}
                      >
                        <option selected="">Book type</option>
                        {getBookType?.map((item, index) => {
                          return (
                            <option value={item._id} key={index}>
                              {item.bookTypeName}
                            </option>
                          );
                        })}
                        {/* <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        name="mrp"
                        placeholder={itemData.bookPriceDetails?.mrp}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        name="price"
                        placeholder={itemData.bookPriceDetails?.price}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group unitinput mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        name="quantity"
                        placeholder={itemData.bookPriceDetails?.quantity}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            );
          })}
          <div className="another_booktype">
            <a onClick={addInputField} href="#" className="btn">
              <i className="fa-solid fa-plus" /> Add another book type
            </a>
          </div>
          <div className="bottom_head">
            <h4>Delivery Estimate</h4>
          </div>
          <form>
            <div className="col-md-4 mb-5">
              <div className="form-group unitinput mb-3">
                <label htmlFor="">Estimate days for delivery</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder={itemData.deliveryEstimate}
                />
                <div className="unit_text">
                  <h6>Days</h6>
                </div>
              </div>
            </div>
          </form>
          <div className="savechanges_btn">
            <button onClick={editBook} className="btn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editbookdetails;
