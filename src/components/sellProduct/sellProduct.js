import React, { useRef } from "react";
import { Form } from "reactstrap";

const SellProductForm = (props) => {
  const title = useRef();
  const price = useRef();
  const description = useRef();
  const quantity = useRef();
  const location = useRef();
  const imagePath = useRef();

  const newProduct = {
    title: title.current.value,
    description: description.current.value,
    price: price.current.value,
    quantity: quantity.current.value,
    location: location.current.value,
    imagePath: imagePath.current.value,
  };

  const addToProducts = () => {
    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("kennywood_token")}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Added");
        props.history.push("/products");
      });
  };

  return (
    <main
      style={{
        textAlign: "center",
      }}
    >
      <Form className="form--login" onSubmit={addToProducts}>
        <h1 className="h3 mb-3 font-weight-normal"> Create Product to Sell </h1>{" "}
        <fieldset>
          <label htmlFor="inputTitle"> Product Title</label>{" "}
          <input
            ref={title}
            type="title"
            className="form-control"
            placeholder="Enter Product Name"
            required
            autoFocus
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="inputDescription"> Description </label>{" "}
          <input
            ref={description}
            type="description"
            id="description"
            className="form-control"
            placeholder="Product Description"
            required
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="inputPrice"> Price </label>{" "}
          <input
            ref={price}
            type="number"
            id="price"
            className="form-control"
            placeholder="Price"
            required
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="inputQuantity"> Quantity </label>{" "}
          <input
            ref={quantity}
            type="number"
            id="quantity"
            className="form-control"
            placeholder="Quantity"
            required
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="inputPassword"> Location </label>{" "}
          <input
            ref={location}
            type="location"
            id="location"
            className="form-control"
            placeholder="Location"
            required
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="inputPassword"> Image Link </label>{" "}
          <input
            ref={imagePath}
            type="imagePath"
            id="imagePath"
            className="form-control"
            placeholder="ImagePath"
            required
          />
        </fieldset>{" "}
        <fieldset>
          <button type="submit"> Complete </button>{" "}
        </fieldset>{" "}
        <fieldset>
          <button type="submit"> Cancel </button>{" "}
        </fieldset>{" "}
      </Form>{" "}
    </main>
  );
};
export default SellProductForm;
