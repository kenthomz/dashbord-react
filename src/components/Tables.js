// src/components/Tables.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/Tables.scss';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Tables = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', age: 45, email: 'mike@example.com' },
    { id: 4, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: '', name: '', age: '', email: '' });

  // Function to handle delete
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  // Function to handle edit
  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMode(true);
    setShowModal(true);
  };

  // Function to handle modal close
  const handleClose = () => {
    setShowModal(false);
    setCurrentItem({ id: '', name: '', age: '', email: '' });
    setEditMode(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      setData(data.map(item => (item.id === currentItem.id ? currentItem : item)));
    } else {
      setData([...data, { ...currentItem, id: data.length + 1 }]); // Assign a new ID
    }

    handleClose();
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={true} /> {/* Adjust isOpen based on your state management */}
      <div className="main-content flex-grow-1">
        <Header />
        <div className="container mt-4">
          <h1 className="text-center mb-4">Tables Page</h1>
          <p className="text-center mb-5">This is the tables page where your data tables will be displayed.</p>

          <div className="table-responsive">
            <table className="table table-bordered table-hover custom-table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm mx-1"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary  mt-4"
              onClick={() => {
                setShowModal(true);
                setCurrentItem({ id: '', name: '', age: '', email: '' });
                setEditMode(false);
              }}
            >
              Add New Record
            </button>
          </div>
        </div>

        {/* Modal for Add/Edit */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{editMode ? 'Edit Record' : 'Add New Record'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={currentItem.name}
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  value={currentItem.age}
                  onChange={(e) => setCurrentItem({ ...currentItem, age: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={currentItem.email}
                  onChange={(e) => setCurrentItem({ ...currentItem, email: e.target.value })}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" class="btn btn-primary  mt-4">
                {editMode ? 'Update Record' : 'Add Record'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Tables;
