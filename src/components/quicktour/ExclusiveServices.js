import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';

const ExclusiveServices = () => (
    <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image1}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Authentication</h3>
                        <p>
                            One of the primary features of a digital signature is its ability to authenticate the identity of the signer. This is achieved through the use of public key infrastructure (PKI), which involves the creation of a pair of keys - a public key and a private key. The signer uses their private key to sign the document, and the recipient can use the corresponding public key to verify the signature. This ensures that the document has not been tampered with and that it truly came from the person who claims to have signed it.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Non-Repudation</h3>
                        <p>
                            Another important feature of digital signatures is non-repudiation. This means that once a document has been signed, the signer cannot deny having signed it. This is because the digital signature is unique to the signer and cannot be forged or duplicated. This provides a high level of legal protection and can be used to prove the authenticity of a document in a court of law.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image2}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image3}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Integrity</h3>
                        <p>
                            Digital signatures also provide a way to ensure the integrity of a document. This means that the document has not been altered or tampered with since it was signed. This is achieved through the use of a hash function, which creates a unique digital fingerprint of the document. When the document is signed, the hash value is included in the signature. If the document is altered in any way, the hash value will change, and the signature will no longer be valid.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Efficiency</h3>
                        <p>
                            Digital signatures offer a more efficient and convenient way to sign documents compared to traditional wet ink signatures. With digital signatures, there is no need to print out documents, sign them by hand, and then scan or mail them back. Instead, the entire process can be done electronically, saving time and reducing the need for physical storage space. Additionally, digital signatures can be easily integrated into existing workflows and systems, making it easier to manage and track signed documents.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image4}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>

            </Col>
        </Row>

    </Container>);
export default ExclusiveServices;