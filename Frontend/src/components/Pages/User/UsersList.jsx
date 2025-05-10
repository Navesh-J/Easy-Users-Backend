import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button,Card, Col, Row } from "react-bootstrap";
import * as userService from '../../../services/user.service.js'
import Layout from "../../Layout/Layout.jsx";
import { NavLink } from "react-router-dom";
// import "../index.css"

const UsersList = () => {
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    const res = await userService.retrieveAllUsers();
    setUsers(res);
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
                <Button variant='primary' as={NavLink} to={`/update/${user.id}`}>Edit User</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export default UsersList;
