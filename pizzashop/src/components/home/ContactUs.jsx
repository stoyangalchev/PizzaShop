import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendContactInfo } from '../../actions/contactActions';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact);
    const { loading, error, success } = contact || {};

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(sendContactInfo({ name, email, message }));
        setName('');
        setEmail('');
        setMessage('');
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "slide",
        });
    }, []);

    return (
        <section className="ftco-appointment">
            <div className="overlay"></div>
            <div className="container-wrap">
                <div className="row no-gutters d-md-flex align-items-center">
                    <div className="col-md-6 d-flex align-self-stretch">
                        <div id="map"></div>
                    </div>
                    <div className="col-md-6 appointment ftco-animate" data-aos="fade-up">
                        <h3 className="mb-3">Contact Us</h3>
                        <form onSubmit={submitHandler} className="appointment-form">
                            <div className="d-md-flex">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="d-me-flex">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea id="" cols="30" rows="3" className="form-control" placeholder="Message" value={message}
                                    onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send" className="btn btn-primary py-3 px-4" />
                            </div>
                        </form>
                        {loading && <p>Loading...</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;