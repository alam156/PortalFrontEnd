import React from 'react';
import '../css/BlackFooter.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

function BlackFooter() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            {/*<MDBCol md='5' start>
                                <MDBInput contrast type='email' label='Email address' className='mb-4' />
                            </MDBCol>*/}

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className="text-green">Useful Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='https://bcc.gov.bd/' className='text-blue link-blue'>
                                        BCC
                                    </a>
                                </li>
                                <li>
                                    <a href='https://api.quicksign.gov.bd/' className='text-blue link-blue'>
                                        QuickSign API
                                    </a>
                                </li>
                                <li>
                                    <a href='https://quicksign.bcc-ca.gov.bd/' className='text-blue link-blue'>
                                        QuickSign Portal
                                    </a>
                                </li>
                                <li>
                                    <a href='https://bcc-ca.gov.bd/' className='text-blue link-blue'>
                                        CA Portal
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className="text-green">Useful Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='https://quickpass.bcc-ca.gov.bd/' className='text-blue link-blue'>
                                        Quickpass
                                    </a>
                                </li>
                                <li>
                                    <a href='https://quickin.bcc-ca.gov.bd/' className='text-blue link-blue'>
                                        QuickIn
                                    </a>
                                </li>
                                <li>
                                    <a href='https://ssp.quicksign.gov.bd/' className='text-blue link-blue'>
                                        QuickSign ssp
                                    </a>
                                </li>
                                <li>
                                    <a href='https://qpapi.bcc-ca.gov.bd/' className='text-blue link-blue'>
                                        QP API
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-green' >Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-green'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-blue'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}
export default BlackFooter;