import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, statusUpdate }) => {
  const { _id, serviceName, price, customer, phone, message, service, status } =
    order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <div>
      <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
              x
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-20 h-20">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar tailwind css component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button
            onClick={() => statusUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? status : "Pending"}
          </button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
