import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Reference the Firestore collection
    const bookingsRef = collection(db, "onlinebookings");

    // Real-time listener
    const unsubscribe = onSnapshot(bookingsRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Online Bookings</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No bookings yet</td>
            </tr>
          ) : (
            bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminBookings;
