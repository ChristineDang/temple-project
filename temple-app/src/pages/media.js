import React from 'react';
import { Button } from 'react-bootstrap';
// import ReactDom from 'react-dom';



function media(){

    return (
        <>

        <div className="galleryBkgrnd">
            <div  id="header">
                <h1 id="galleryTitle">Audio & Video</h1>
                <p id="galleryText">A collection of audio and video recordings from HT Thich Minh Hieu</p>
            </div>

        {/* </div> */}
        <br></br>

        <div className="row">
            <div className="col-md-12">
                <br></br>
                {/* <p id="description">click here for more audio and videos</p> */}
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
            <button className='btn' id='youtube' target="_blank" type="button" onClick={(e) => {e.preventDefault(); 
                window.location.href='https://www.youtube.com/channel/UCwIV5eJvSC6FfW0pvroOHiQ/featured';
                }}>YouTube Channel
            </button>
            </div>
        </div>

        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>

            <div className="row">
                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/2SlLT5STWIA" 
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowFullScreen>
                </iframe>
                </div>

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/g3BIfKGxj2k" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowFullScreen>
                </iframe>
                </div>

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/37Wi-69z_G8" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowFullScreen>
                </iframe>
                </div>
            </div>

            <br></br>

            <div className="row">
                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/pjBFZ8-EdYU" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                </div>

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/VESF5vWmEYc" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                </div>  

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/wthlPd6ZaUA" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                </div>
                
            </div>

         </div>
        </>
    )
    }

export default media;