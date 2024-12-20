import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleUpdateStatus = (orderId, newStatus) => {
    axios.put(`http://localhost:4000/orders/${orderId}`, { status: newStatus })
      .then(response => {
        setOrders(prevOrders => prevOrders.map(order =>
          order._id === orderId ? { ...order, status: newStatus } : order
        ));
      })
      .catch(error => {
        console.error('Error updating order status:', error);
      });
  };

  return (
    <div className="order-management">
      <h1 className="order-header">Order Management</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th className="order-status">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.items.join(', ')}</td>
              <td>{order.status}</td>
              <td>
                {order.status !== 'delivered' && (
                  <>
                    <button className="order-button order-button--preparing" onClick={() => handleUpdateStatus(order._id, 'preparing')}>Preparing</button>
                    <button className="order-button order-button--on-the-way" onClick={() => handleUpdateStatus(order._id, 'on the way')}>On the Way</button>
                    <button className="order-button order-button--delivered" onClick={() => handleUpdateStatus(order._id, 'delivered')}>Delivered</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
