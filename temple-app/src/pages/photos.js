import React from 'react';
import '../App.css';


function photos() {
    return (
        <>
        <div className="galleryBkgrnd">
            <div className="header">
                <h1 id="galleryTitle">Photo Gallery</h1>
                <p id="galleryText">A collection of Images from HT Thich Minh Hieu's Travels</p>
            </div>

            <div className="row">
                <div className="column">
                    <img src={require("../gallery/TMH.jpg")} id="gallery" alt="HT Thich Minh Hieu"/>
                    <img src={require("../gallery/sydney3.jpg")} id="gallery" alt="buddha statue, angle view"/>
                    <img src={require("../gallery/IMG_0412.JPG")} id="gallery" alt="buddha statue, front view"/>
                    <img src={require("../gallery/IMG_0429.JPG")} id="gallery" alt="buddhist monk with visitors"/>
                    <img src={require("../gallery/IMG_0518.JPG")} id="gallery" alt="buddhist monks standing in line"/>
                </div>
                <div className="column">
                    <img src={require("../gallery/tang ni 8.JPG")} id="gallery" alt="buddhist monks sitting in a row"/>
                    <img src={require("../gallery/IMG_0466.JPG")} id="gallery" alt="Minh Hieu in nature"/>
                    <img src={require("../gallery/tang ni 6.JPG")} id="gallery" alt="buddhist monks chatting"/>
                    <img src={require("../gallery/tang ni 11.JPG")} id="gallery" alt="buddha statue"/>
                    <img src={require("../gallery/IMG_0696.JPG")} id="gallery" alt="Buddhist monks"/>
                </div>
                {/* <div className="column">
                    <img src={require("../gallery/DME_3132.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0412.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0429.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0741.JPG")} id="gallery"/>
                    <img src={require("../gallery/TMH.jpg")}/>
                </div> */}
                {/* <div className="column">
                    <img src={require("../gallery/DME_3132.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0412.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0429.JPG")} id="gallery"/>
                    <img src={require("../gallery/IMG_0741.JPG")} id="gallery"/>
                    <img src={require("../gallery/TMH.jpg")}/>
                </div> */}
            </div>
        </div>
        </>
    )
    }
export default photos;