import React from 'react';
import { Carousel } from "react-bootstrap";
import "../App.css";


function home() {
    return (
        <>

        <Carousel>
            <Carousel.Item>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={require("../images/Dalailama.jpg")} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require("../images/hands.jpg")} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require("../images/outside.jpg")} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </Carousel.Item>
        </Carousel>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br></br>
                    <br></br>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <img className="minhhieu" src={require("../images/minhhieu.png")} />
                </div>

                <div className="col-md-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lacus, tristique vel tempus id, laoreet vitae nibh. Vivamus lorem libero, imperdiet et lacus vel, suscipit euismod leo. Mauris vulputate finibus commodo. Quisque at justo non ligula aliquam tristique. Suspendisse sagittis rhoncus vehicula. Nullam sit amet mi interdum, laoreet dui sit amet, fermentum nibh. Vivamus eget quam non elit aliquam ornare nec rhoncus eros. Aliquam erat volutpat. Vivamus quis augue nisl. Ut ultrices nisl at felis tempus pellentesque. Sed id massa sit amet erat consequat rutrum. Morbi tempor odio eu finibus luctus.

                Vivamus posuere purus orci, sed elementum metus aliquet a. Curabitur lacinia imperdiet tincidunt. Morbi non justo dapibus neque scelerisque ullamcorper vitae at erat. Maecenas vitae luctus urna, a dapibus libero. Nunc sit amet pellentesque tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse consequat id sapien sit amet accumsan.

                Maecenas velit neque, aliquam sed blandit sit amet, volutpat id lectus. Aenean vitae sem magna. Etiam tincidunt, felis eget aliquet venenatis, velit metus convallis augue, id placerat ex ante non orci. Pellentesque vitae enim sodales, elementum dolor non, blandit mi. Fusce luctus ac nulla eget aliquam. Sed vitae accumsan quam, vitae rutrum eros. Donec mauris nunc, lobortis a porta sit amet, elementum et ipsum. Proin sit amet blandit arcu, ut dignissim ligula.

                Quisque et auctor sem. Nulla facilisi. Praesent imperdiet erat metus, et interdum urna congue sed. Mauris scelerisque metus et mi consequat, ac convallis ligula egestas. Nunc eu ultrices lacus. Fusce volutpat a risus vitae euismod. Aliquam pellentesque, sem nec convallis euismod, neque risus dapibus tortor, vel tincidunt lacus lectus at magna. Suspendisse vestibulum venenatis felis eget fermentum.

                Maecenas ac risus sit amet est egestas dictum. Donec scelerisque interdum ligula, eget blandit dolor tincidunt sit amet. Ut sed magna gravida, ultricies tellus non, egestas purus. Vivamus auctor ligula eget faucibus gravida. Phasellus lobortis, eros eget facilisis bibendum, dolor augue dictum ante, sed vestibulum magna ipsum eu nunc. Duis pretium, elit in condimentum blandit, lacus dui venenatis urna, et lacinia purus nisi eu lacus. Integer id sapien ante.
                </div>
            </div>
        </div>

        <script src="js/jquery-1.7.1.min.js"></script>
<script src="js/bootstrap.js"></script>
        </>
    )
    }

export default home;