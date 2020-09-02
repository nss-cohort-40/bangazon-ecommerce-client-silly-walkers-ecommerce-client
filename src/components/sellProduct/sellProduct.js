import React, { useRef, useState } from "react";
import { Form, Button, FormGroup, Col, Row } from "reactstrap";

const SellProductForm = (props) => {
  const title = useRef();
  const price = useRef();
  const description = useRef();
  const quantity = useRef();
  const location = useRef();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const addToProducts = (e) => {
    e.preventDefault();

    const newProduct = {
      title: title.current.value,
      description: description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      location: location.current.value,
      imagePath: { image },
      customer_id: 1,
      product_type_id: 1,
    };

    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token 4dbadec1b30c4a12b5850f56b5136436d94b35e0`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((response) => {
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
            <Button color="success" type="submit">
              Complete
            </Button>
          </Col>
          {/* <Col xs="5">
            <Button color="danger" type="submit">
              Cancel
            </Button>
          </Col> */}
        </Row>
      </Form>
    </main>
  );
};
export default SellProductForm;
