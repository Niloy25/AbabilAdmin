import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { requestData } from "../../../Utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookDetails() {
  const [tag, setTag] = useState([]);

  const [bookPrice, setBookPrice] = useState([
    {
      bookTypeID: "",
      mrp: "",
      price: "",
      quantity: "",
    },
  ]);

  useEffect(() => {
    fetchBookType()
  }, [])
  

  const [getBookType, setGetBookType] = useState([]);

  const fetchBookType = async() => {
    const result = await requestData('distributor/view-booktype', 'GET');
    if(result && result.status){
      setGetBookType(result.data)
      console.log(result.data);
    }
  }

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
    const { bookName, author, publisher, edition, isbnNo, bookDesc, aboutAuthor, deliveryEstimate, image} = bookDetail

    // const { bookTypeID, mrp, price, quantity } = bookPrice

    if (bookName === "") {
      toast.error("Book Name can't be Empty!", toastOptions);
      return false;
    } else if (author === "") {
      toast.error("Author can't be Empty!", toastOptions);
      return false;
    } else if (publisher === "") {
      toast.error("Publisher can't be Empty!", toastOptions);
      return false;
    } else if (edition === "") {
      toast.error("Edition can't be Empty!", toastOptions);
      return false;
    } else if (isbnNo === "") {
      toast.error("IsBnNo can't be Empty!", toastOptions);
      return false;
    } else if (bookDesc === "") {
      toast.error("Book Describtion can't be Empty!", toastOptions);
      return false;
    } else if (aboutAuthor === "") {
      toast.error("Say Something about author!", toastOptions);
      return false;
    } 
    else if(bookPrice.findIndex((item) => item.bookTypeID === "" || item.mrp === "" || item.price === "" || item.quantity === "") >= 0){
      toast.error("Book Type, Price, Mrp, Quantity can't be empty!", toastOptions);
      return false;
    }
    // else if (bookTypeID === "") {
    //   toast.error("Please select any book type!", toastOptions);
    //   return false;
    // } else if (mrp === "") {
    //   toast.error("Please give the price!", toastOptions);
    //   return false;
    // } else if (price === "") {
    //   toast.error("Please give your price!", toastOptions);
    //   return false;
    // } else if (quantity === "") {
    //   toast.error("Please enter the quantity!", toastOptions);
    //   return false;
    // }
     else if (deliveryEstimate === "") {
      toast.error("Please give the Estimate delivery date!", toastOptions);
      return false;
    } else if (tag.length === 0) {
      toast.error("Please give any tags!", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const submitBook = async () => {
    if(handleValidation()){
      const dataSend = {
        bookName: bookDetail.bookName,
        author: bookDetail.author,
        publisher: bookDetail.publisher,
        edition: bookDetail.edition,
        isbnNo: bookDetail.isbnNo,
        tags: tag,
        bookDesc: bookDetail.bookDesc,
        aboutAuthor: bookDetail.aboutAuthor,
        deliveryEstimate: bookDetail.deliveryEstimate,
        bookPriceDetails: bookPrice,
        image:
          "https://media.istockphoto.com/id/1256910594/vector/set-of-paper-books-with-colorful-hard-cover-isolated-on-white-background-vector-flat.jpg?s=612x612&w=0&k=20&c=5IaTPgzhnHO3FMvSavQdB5ytf6MQRbZOJOBJ7BFT6mI=",
      };
      const result = await requestData('distributor/single-book-upload', "POST", dataSend)
      console.log(result);
      if(result && result.status){
        console.log(result.data);
        toast.success("Book added Successfully!", toastOptions)
      }
    }
  };

  return (
    <>
      {console.log("Tag", tag)}
      {console.log(bookPrice)}
      {console.log(bookDetail)}
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
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Title of book"
                      onChange={(e) =>
                        setBookDetail({
                          ...bookDetail,
                          bookName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Author"
                      onChange={(e) =>
                        setBookDetail({ ...bookDetail, author: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Publisher"
                      onChange={(e) =>
                        setBookDetail({
                          ...bookDetail,
                          publisher: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Edition"
                      onChange={(e) =>
                        setBookDetail({
                          ...bookDetail,
                          edition: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="ISBN"
                      onChange={(e) =>
                        setBookDetail({ ...bookDetail, isbnNo: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TagsInput
                      value={tag}
                      onChange={setTag}
                      name="fruits"
                      placeHolder="Enter Tags"
                    />
                    {/* <select className="form-control" id="booktype">
                      <option selected="">Tags</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select> */}
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="form-group mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      rows={9}
                      id=""
                      placeholder="Book description"
                      onChange={(e) =>
                        setBookDetail({
                          ...bookDetail,
                          bookDesc: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      rows={9}
                      id=""
                      placeholder="About the author"
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
                        onChange={(event) => handleChange(index, event)}
                        >
                          <option selected="">Book type</option>
                          {
                            getBookType?.map((item, index) => {
                              return (
                                <option value={item._id} key={index}>
                                  {item.bookTypeName}
                                </option>
                              );
                            })
                          }
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
                          placeholder="MRP"
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
                          placeholder="Your price"
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
                          placeholder="Quantity"
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
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Estimate days for delivery"
                    onChange={(e) =>
                      setBookDetail({
                        ...bookDetail,
                        deliveryEstimate: e.target.value,
                      })
                    }
                  />
                  <div className="unit_text">
                    <h6>Days</h6>
                  </div>
                </div>
              </div>
            </form>
            <div className="savechanges_btn">
              <button onClick={submitBook} className="btn">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
