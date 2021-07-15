import React from 'react';
import ReactDom from 'react-dom';



function media(){

    return (
        <>

        <div className="header">
            <div  id="videoheader">
                <h1 id="headertext">VIDEOS</h1>
            </div>

        </div>
        <br></br>

        <div className="row">
            <div className="col-md-12">
            <button className='btn' id='youtube' target="_blank" type="button" onClick={(e) => {e.preventDefault(); 
                window.location.href='https://www.youtube.com/channel/UCwIV5eJvSC6FfW0pvroOHiQ/featured';
                }}>YouTube Channel
            </button>
            </div>

        </div>

            <div className="row">
                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/2SlLT5STWIA" 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowfullscreen>
                </iframe>
                </div>

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/g3BIfKGxj2k" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowfullscreen>
                </iframe>
                </div>

                <div className="col-md-4">
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/37Wi-69z_G8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    id="videos"
                    allowfullscreen>
                </iframe>
                </div>
                
            </div>

            <div className="row">
                <div className="col-md-4">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        id="videos"/>
                </div>

                <div className="col-md-4">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        id="videos"/>
                </div>

                <div className="col-md-4">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        id="videos"/>
                </div>
                
            </div>


        </>
    )
    }

export default media;