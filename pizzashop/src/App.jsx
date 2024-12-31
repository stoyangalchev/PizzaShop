import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/navbar/Navbar';
import Overlay from './components/home/Overlay';
import Contact from './components/home/Contact';
import Welcome from './components/home/Welcome';
import OurService from './components/home/OurService';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PizzaMeals from './components/home/PizzaMeals';
import Images from './components/home/Images';
import Status from './components/home/Status';
import SmallMenu from './components/menu/SmallMenu';
import Blog from './components/home/Blog';
import BlogDetails from './components/blog/BlogDetails';
import ContactUs from './components/home/ContactUs';
import AboutUs from './components/about/AboutUs';
import OurMenu from './components/menu/OurMenu';
import Services from './components/servicec/Services';
import HotMeals from './components/servicec/HotMeals';
import BlogHeader from './components/blog/BlogHeader';
import AboutHeader from './components/about/AboutHeader';
import ReadOurBlog from './components/blog/ReadOurBlog';
import ContactHeader from './components/contact/ContactHeader';
import ContactInformation from './components/contact/ContactInformation';
import Cart from './components/cart/Cart'
import ErrorBoundary from './components/shared/ErrorBoundary';
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import AddPizza from './admin/AddPizza';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
    });




  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Routes>

          <Route path="/" element={
            <>
              <Overlay />
              <Contact />
              <Welcome />
              <OurService />
              <PizzaMeals />
              <Images />
              <Status />
              <SmallMenu />
              <Blog />
              <ContactUs />
              <AboutUs />
            </>
          } />

          <Route path="/menu" element={
            <>
              <OurMenu />
              <PizzaMeals />
              <SmallMenu />
              <AboutUs />
            </>
          } />

          <Route path="/services" element={
            <>
              <Services />
              <OurService />
              <HotMeals />
              <AboutUs />
            </>
          } />

          <Route path="/blog" element={
            <>
              <BlogHeader />
              <Blog />
              <ReadOurBlog />
              <AboutUs />
            </>
          } />



          <Route path="/about" element={
            <>
              <AboutHeader />
              <Contact />
              <Status />
              <AboutUs />
            </>
          } />

          <Route path="/contact" element={
            <>
              <ContactHeader />
              <ContactInformation />
              <AboutUs />
            </>
          } />

          <Route path="/cart" element={
            <>
              <Cart />
              <AboutUs />
            </>
          } />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/addpizza" element={<AddPizza />} />

        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;