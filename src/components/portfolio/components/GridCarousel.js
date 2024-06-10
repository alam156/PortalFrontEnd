import React from 'react'
import Carousel from 'react-grid-carousel'
import image1 from '../../album/01.jpg';
import image2 from '../../album/02.jpg';
import image3 from '../../album/03.jpg';
import image4 from '../../album/04.jpg';
import image5 from '../../album/05.jpg';
import image6 from '../../album/06.jpg';

const GridCarousel = () => {
    return (
        <Carousel cols={3} rows={1} gap={5} loop>
            <Carousel.Item>
                <img width="70%" src={image1} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src={image2} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src={image3} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src={image4} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src={image5} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src={image6} />
            </Carousel.Item>
            {/* ... */}
        </Carousel>
    )
}
export default GridCarousel