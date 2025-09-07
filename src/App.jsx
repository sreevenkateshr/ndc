// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Bookappointment from "./pages/Bookappointment";
import DentistsPage from "./pages/DentistsPage";
import BookingForm from "./components/BookingForm";
import Admin from "./components/AdminDashboard"; // updated component
import AdminLogin from "./components/AdminLogin";
import NotFound from "./pages/NotFound";

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Track admin login
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <HelmetProvider>
      {!hideLayout && <NavigationBar />}

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookappointment" element={<Bookappointment />} />
          <Route path="/dentistsPage" element={<DentistsPage />} />
          <Route path="/bookingForm" element={<BookingForm />} />

          {/* Admin Pages */}
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <Admin />
              ) : (
                <AdminLogin onLogin={setIsAdmin} />
              )
            }
          />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
      {!hideLayout && <FloatingButtons />}
    </HelmetProvider>
  );
}

export default App;
