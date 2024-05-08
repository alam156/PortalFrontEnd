import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import backgroundImage from "./album/event_background.jpeg";
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import Chatbox from "./Chatbox";
import Footer from "./Footer";

export default function StaticFaqSection() {
    return (
        <div>
            <div className="navbar-fixed"><NavBar/>
            </div>
            <div className="container">
                <div>
                    <br/>
                    <br/>
                </div>
                <div style={{
                    backgroundImage: `url(${backgroundImage})`, height: '100px', display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2>FAQ</h2>
                </div>
                <MDBContainer>
                    <section>
                        {/*<MDBTypography
                            tag="h3"
                            className="text-center mb-4 pb-2 text-primary fw-bold"
                        >
                            FAQ
                        </MDBTypography>*/}
                        <p className="text-center mb-5">
                            Find the answers for the most frequently asked questions below
                        </p>

                        <MDBRow>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon far icon="paper-plane text-primary pe-2" /> can i use digital signature to make everything paperless?
                                </MDBTypography>
                                <p>
                                    <strong>
                                        <u>Absolutely!</u>
                                    </strong>{" "}
                                    We work with top payment companies which guarantees your safety
                                    and security. All billing information is stored on our payment
                                    processing partner.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="pen-alt text-primary pe-2" /> Will the certificate be munged?
                                </MDBTypography>
                                <p>
                                    <strong>
                                        <u>No, it is not possible!</u>
                                    </strong>{" "}
                                    You can cancel your subscription anytime in your account. Once the
                                    subscription is cancelled, you will not be charged next month.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="user text-primary pe-2" /> What is digital signature?
                                </MDBTypography>
                                <p>
                                    Currently, we only offer monthly subscription. You can upgrade or
                                    cancel your monthly account at any time with no further
                                    obligation.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="rocket text-primary pe-2" /> How can i install java?
                                </MDBTypography>
                                <p>
                                    Yes. Go to the billing section of your dashboard and update your
                                    payment information.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="home text-primary pe-2" /> can java supports multiple inheritence?
                                </MDBTypography>
                                <p>
                                    <strong>
                                        <u>Unfortunately no</u>.
                                    </strong>{" "}
                                    We do not issue full or partial refunds for any reason.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="book-open text-primary pe-2" /> Asking another question?
                                </MDBTypography>
                                <p>
                                    Of course! We’re happy to offer a free plan to anyone who wants to
                                    try our service.
                                </p>
                            </MDBCol>

                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="rocket text-primary pe-2" /> What is e-Sign?
                                </MDBTypography>
                                <p>
                                    Yes. Go to the billing section of your dashboard and update your
                                    payment information.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="home text-primary pe-2" /> What is Quicksign?
                                </MDBTypography>
                                <p>
                                    <strong>
                                        <u>Unfortunately no</u>.
                                    </strong>{" "}
                                    We do not issue full or partial refunds for any reason.
                                </p>
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="mb-4">
                                <MDBTypography tag="h6" className="mb-3 text-primary">
                                    <MDBIcon fas icon="book-open text-primary pe-2" /> Asking another Question?
                                </MDBTypography>
                                <p>
                                    Of course! We’re happy to offer a free plan to anyone who wants to
                                    try our service.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

            </div>
            <BlackFooter/>
            <Chatbox/>
            <Footer/>
        </div>

    );
}