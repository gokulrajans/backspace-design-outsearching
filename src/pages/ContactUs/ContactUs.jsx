import React from "react";
import "./ContactUs.css";
import ContactForm from "../../components/ContactPage/ContactForm";
import Footer from "../../components/HomePage/Footer/Footer";
import ContactPageGradient from '../../components/ContactPage/ContactPageGradient/ContactPageGradient';
export default function ContactUs() {
  return (
    <>
      <div className="contactus-main-bg-img"><ContactPageGradient /></div>
      <ContactForm />
      <Footer />
    </>
  );
}
