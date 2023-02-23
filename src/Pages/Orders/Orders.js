import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, loading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

//   const statusUpdate = (id) =>{
//     fetch(`http://localhost:5000/orders/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type' : 'application/json',
//         },
//         body: JSON.stringify({status: 'Approved'})
//     })
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data);
//         if(data.modifiedCount > 0){
//             const remaining = orders.filter((odr) => odr._id !== id)
//             const approving = orders.find((odr) => odr._id === id)
//             approving.status = 'approved'
//             const newOrder = [approving, ...remaining]
//             setOrders(newOrder)
//         }
//     })
//   }

    const statusUpdate = (id) =>{
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
      })
      .then((res) =>(res.json()))
      .then((data) =>{
        console.log(data)
        // if(data.modifiedCount > 0){
        //   const remaining = orders.filter( odr => odr._id !== id)
        //   const approving = orders.filter( odr => odr._id === id)
        //   approving.status = 'approved'
        //   const newOrders = [ approving, ...remaining,]
        //   setOrders(newOrders)
        // }
      })
    }
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>You have:{orders.length} Orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                statusUpdate={statusUpdate}
                handleDelete={handleDelete}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
