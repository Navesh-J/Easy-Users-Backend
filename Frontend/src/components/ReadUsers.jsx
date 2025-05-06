import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Readusers = () => {
  const getAllUsersUrl = 'https://localhost:5173/v1/users/all';
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const res = await axios.get(`${getAllUsersUrl}`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderedUsers = Object.values(users).map((user) => {
    return (
      <>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  });

  return (
    <Container fluid>
      <h3 className='text-center'>Users</h3>
      <Row className='justify-content-md-center'>
        {renderedUsers}
      </Row>
    </Container>
  );
};

export default Readusers;