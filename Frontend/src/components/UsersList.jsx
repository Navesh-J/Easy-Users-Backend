import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout/Layout";
// import "../index.css"

const UsersList = () => {
  const getAllUsersUrl = "http://localhost:5000/v1/user/all";
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    const res = await axios.get(`${getAllUsersUrl}`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <h3 className="text-center mb-3">Users</h3>
      {Object.values(users).map((user) => (
        <Row className="justify-content-center" key={user.id || user.email}>
          <Col lg={4}>
            <Card border="primary">
              <Card.Body >
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                {user.city && user.country &&(
                  <p>{user.city} - {user.country}</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export default UsersList;
