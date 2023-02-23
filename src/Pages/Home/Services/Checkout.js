import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, price, title } = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    // console.log(order);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed successfully");
          // navigate("/orders");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl">This is CheckOut Section: {title}</h1>

      <h2 className="text-3xl">Price: {price}</h2>

      <form
        onSubmit={handlePlaceOrder}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <input
          type="text"
          placeholder="First Name"
          className="input w-full max-w-xs input-bordered"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input w-full max-w-xs input-bordered"
          name="lastName"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input w-full max-w-xs input-bordered"
          name="phone"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-xs input-bordered"
          // defaultValue={user?.email}
          name="email"
        />
        <textarea
          name="message"
          placeholder="Bio"
          className="textarea textarea-bordered textarea-sm w-full"
        ></textarea>
        <br />
        <input className="btn" type="submit" value="Order Conform" />
      </form>
    </div>
  );
};

export default Checkout;
