import React from 'react';

export default function ImageSlider ({images}) {

    const [currentImage, setCurrentImage] = React.useState(images[0]);

    function changeCurrentImage(image) {
        setCurrentImage(image)
    }

    images = images.map(image => <img src={image} onClick={() => changeCurrentImage(image)}/>);

    return (
        <>
            <div className="image-slider">
                <div className="image-slider__preview">
                    <img src={currentImage}/>
                </div>
                <div className="image-slider__list">
                    {images}
                </div>
            </div>
        </>
    )
}
