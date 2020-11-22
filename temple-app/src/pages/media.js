import React from 'react';


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
            <button onClick={('https://www.youtube.com/')} className="btn" id="youtube">YouTube Channel</button>
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