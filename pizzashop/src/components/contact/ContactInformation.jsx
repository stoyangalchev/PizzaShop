import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactInfo } from '../../actions/contactActions';

const ContactInformation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const contact = useSelector((state) => state.contact);
    const { loading, error, success } = contact || {};

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(sendContactInfo({ name, email, subject, message }));
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <section className="ftco-section contact-section">
            <div className="container mt-5">
                <div className="row block-9">
                    <div className="col-md-4 contact-info ftco-animate">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <h2 className="h4">Contact Information</h2>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p><span>Address:</span> 198 West 21th Street, Sofia, Bulgaria</p>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p><span>Email:</span> <a href="mailto: galchev98@gmail.com">galchev98@gmail.com</a></p>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p><span>Website:</span> <a href="#">pizzashop.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 ftco-animate">
                        <form onSubmit={submitHandler} className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="7"
                                    className="form-control"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="btn btn-primary py-3 px-5"
                                />
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

export default ContactInformation;