import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
        image: require('./image1.png'),
        caption:"Certificate Authority Definition",
        description:"a trusted organization that issues, revokes, and manages digital certificates that link user identities to public keys"
    },
    {
        image:require('./image2.jpeg'),
        caption:"Digital Signature Definition",
        description:"A digital signature is a mathematical technique used to validate the authenticity and integrity of a digital document"
    },
    {
        image:require('./image3.jpeg'),
        caption:"Application in Fintech",
        description:"some applications in fintech"
    },
    {
        image:require('./image4.jpg'),
        caption:"Zero Trust",
        description:"trust is zero"
    },
    {
        image:require('./image5.jpeg'),
        caption:"Sheild",
        description:"this is sheild"
    },
    {
        image:require('./image6.jpg'),
        caption:"Zero Trust",
        description:"trust is zero"
    }
]

function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
                    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "100%" }}>
                        {data.map((slide, i) => {
                            return (
                                <Carousel.Item key={i}>
                                    <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
                                        <img
                                            className="d-block w-100 img-fluid"
                                            src={slide.image}
                                            alt="slider image"
                                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                    <Carousel.Caption>
                                        <h3>{slide.caption}</h3>
                                        <p>{slide.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default HomeCarousel;