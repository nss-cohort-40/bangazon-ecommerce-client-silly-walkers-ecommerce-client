import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup, Col, Row, Input } from "reactstrap";

const SellProductForm = (props) => {
  const title = useRef();
  const price = useRef();
  const description = useRef();
  const quantity = useRef();
  const location = useRef();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [product_type, setproduct_type] = useState({ product_type_id: "" });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product_type };
    stateToChange[evt.target.id] = evt.target.value;
    setproduct_type(stateToChange);
  };

  const addToProducts = (e) => {
    e.preventDefault();

    const newProduct = {
      title: title.current.value,
      description: description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      location: location.current.value,
      product_type_id: product_type.productType,
      imagePath: { image },
      customer_id: 1,
    };

    console.log(newProduct);

    let token = localStorage.getItem("bangazon_token");

    !newProduct.product_type_id
      ? alert("Please Select a Product Type")
      : fetch("http://localhost:8000/products", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(newProduct),
        })
          .then((response) => response.json())
          .then(() => {
            console.log("Added");
            props.history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "360img");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duo4xxmj8/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <main
      style={{
        textAlign: "center",
      }}
    >
      <Form className="" onSubmit={addToProducts}>
        <h1 className="h3 mb-3 font-weight-normal"> Create Product to Sell </h1>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputTitle"> Product Title</label>
            <input
              ref={title}
              type="title"
              className="form-control"
              placeholder="Enter Product Name"
              // defaultValue="Used Rabbit"
              required
              autoFocus
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputDescription"> Description </label>
            <input
              ref={description}
              type="description"
              id="description"
              className="form-control"
              placeholder="Product Description"
              // defaultValue="In great condition"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputPrice"> Price </label>
            <input
              ref={price}
              type="float"
              id="price"
              className="form-control"
              placeholder="Price"
              // defaultValue="2.99"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputQuantity"> Quantity </label>
            <input
              ref={quantity}
              type="number"
              id="quantity"
              className="form-control"
              placeholder="Quantity"
              // defaultValue="1"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputLocation"> Location </label>
            <input
              ref={location}
              type="location"
              id="location"
              className="form-control"
              placeholder="Location"
              // defaultValue="Nashville, TN"
              required
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputProductType"> Product Type </label>
            <Input
              onChange={handleFieldChange}
              type="select"
              name="select"
              id="productType"
            >
              <option value="">Choose an Option</option>
              <option value="1">Animals</option>
              <option value="2">Autos</option>
              <option value="3">Missed Connections</option>
              <option value="4">Electronics</option>
              <option value="5">Magic Props</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <label htmlFor="inputImage"> Image Link </label>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
            {loading && <h3>Please wait...</h3>}
          </Col>
        </FormGroup>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Link to="/home"><Button color="success" type="submit">
              Complete
            </Button></Link>
          </Col>
        
        </Row>
      </Form>
    </main>
  );
};
export default SellProductForm;
