// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import "../index.css";
import { Table } from "react-bootstrap";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const AdminDashboard = () => {
  const [activeSidebar, setActiveSidebar] = useState("Dashboard");
  const [activeTab, setActiveTab] = useState("Today");
  const [bookings, setBookings] = useState([]);

  const tabs = ["Yesterday", "Today", "Tomorrow"];

  // Fetch bookings in real-time
  useEffect(() => {
    const bookingsRef = collection(db, "onlinebookings");
    const unsubscribe = onSnapshot(bookingsRef, snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    });
    return () => unsubscribe();
  }, []);

  const filteredBookings = filterBookingsByDate(bookings, activeTab);

  return (
    <div className="site-wrap">
      <nav className="site-nav">
        <div className="name">NDC - The Dental Care</div>
        <ul>
          {["Dashboard", "Appointments", "Contacts"].map(item => (
            <li
              key={item}
              className={activeSidebar === item ? "active" : ""}
              onClick={() => setActiveSidebar(item)}
            >
              <a href="#0">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <header>
          <h1 className="title">{activeSidebar}</h1>

          {activeSidebar === "Appointments" && (
            <nav className="nav-tabs">
              {tabs.map(tab => (
                <a
                  key={tab}
                  href="#0"
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </a>
              ))}
            </nav>
          )}
        </header>

        <div className="content-columns">
          {activeSidebar === "Appointments" && (
            <div className="col">
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
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">No bookings</td>
                    </tr>
                  ) : (
                    filteredBookings.map((b, i) => (
                      <tr key={b.id}>
                        <td>{i + 1}</td>
                        <td>{b.name}</td>
                        <td>{b.phone}</td>
                        <td>{b.service}</td>
                        <td>{formatBookingDate(b.date)}</td>
                        <td>{b.time}</td>
                        <td>{b.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          )}

          {activeSidebar === "Dashboard" && (
            <div className="col">
              <div className="item">Here you can show quotes, weather, stats...</div>
            </div>
          )}

          {activeSidebar === "Contacts" && (
            <div className="col">
              <div className="item">Contacts from Firebase collection...</div>
            </div>
          )}
        </div>
      </main>

      <footer className="dashboard-footer">
        Developed by Sree Venkatesh &nbsp;
        <a href="https://sreevenkatesh.vercel.app" target="_blank" rel="noopener noreferrer">
          @sreevenkatesh.vercel.app
        </a>
      </footer>
    </div>
  );
};

// Filter bookings by tab
const filterBookingsByDate = (bookings, tab) => {
  const today = new Date();
  const todayStr = today.toLocaleDateString("en-CA");

  return bookings.filter(b => {
    let bookingDate = b.date;

    if (bookingDate instanceof Timestamp) bookingDate = bookingDate.toDate();
    else bookingDate = new Date(bookingDate);

    const bookingStr = bookingDate.toLocaleDateString("en-CA");

    if (tab === "Yesterday") return bookingStr < todayStr;
    if (tab === "Today") return bookingStr === todayStr;
    if (tab === "Tomorrow") return bookingStr > todayStr;

    return false;
  });
};

// Format booking date for table
const formatBookingDate = date => {
  if (date instanceof Timestamp) return date.toDate().toLocaleDateString();
  return new Date(date).toLocaleDateString();
};

export default AdminDashboard;
