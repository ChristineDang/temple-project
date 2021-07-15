import React from 'react';
import { Carousel } from "react-bootstrap";
import "../App.css";
// import { Nav } from '../components/nav/index.js';


function home() {

    
    return (
        <>
    {/* <Nav></Nav> */}
        {/* <Carousel>
            <Carousel.Item>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={require("../images/buddhaLight.jpg")} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require("../images/TempleAus.jpg")} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={require("../images/TempleAusMountain.jpg")} alt="Third slide" />
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
        </Carousel> */}

        <div className='homepageBkgrnd'>
            <img id="homepageBkgrnd" />


            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="parting"></div>
                </div>

                <div className="row">
                    {/* <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"><div className="arrowDown"></div></div>
                    <div className="col-md-3"></div> */}

                    <a className="arrowDown" href="#bio">
                        <img src={require("../images/arrowDown.png")} />
                    </a>

                </div>
                <div  id="bio"></div>
                <div className="row" id="scndRow">


                    <div className="col-md-6">
                        <img className="minhhieu" src={require("../images/minhhieu.png")} />
                    </div>

                    <div className="col-md-6" id="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lacus, tristique vel tempus id, 
                    laoreet vitae nibh. Vivamus lorem libero, imperdiet et lacus vel, suscipit euismod leo. 
                    Mauris vulputate finibus commodo. Quisque at justo non ligula aliquam tristique. 
                    Suspendisse sagittis rhoncus vehicula. Nullam sit amet mi interdum, laoreet dui sit amet, fermentum nibh. 
                    Vivamus eget quam non elit aliquam ornare nec rhoncus eros. Aliquam erat volutpat. Vivamus quis augue nisl. 
                    Ut ultrices nisl at felis tempus pellentesque. 
                    </div>
                </div>

                <div className="row" id="thrdRow">
                    <div className="col-md-12" id="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus sapien lacus, tristique vel tempus id, laoreet vitae nibh. Vivamus lorem libero, imperdiet et lacus vel, suscipit euismod leo. 
                    Mauris vulputate finibus commodo. Quisque at justo non ligula aliquam tristique. Suspendisse sagittis rhoncus vehicula. 
                    Nullam sit amet mi interdum, laoreet dui sit amet, fermentum nibh. 
                    Vivamus eget quam non elit aliquam ornare nec rhoncus eros. 
                    Aliquam erat volutpat. Vivamus quis augue nisl. 
                    Ut ultrices nisl at felis tempus pellentesque. 
                    Sed id massa sit amet erat consequat rutrum. Morbi tempor odio eu finibus luctus.
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row" id="parting2"></div>

                <div className="row" id="poem">
                    <div className="col-md-12" id="text">
                    <h1>TẠ  TỪ</h1>
                    <br></br>
                    Mai Xa Rồi Sao…! <br></br>
                    Mình về đâu hỡi bạn,<br></br>
                    Không ve kêu mà xao xuyến trong hồn<br></br>
                    Phượng vẫn rơi, rơi từng cánh mênh mang ,<br></br>
                    Trong ký ức ngập tràn màu kỷ niệm..<br></br>
                    <br></br>
                    Mai xa rồi sao… bốn mùa Thu mây tím<br></br>
                    Mình vô tư ôm cặp mĩm môi cười,<br></br>
                    Mặc dòng đời đuổi trôi về vô định<br></br>
                    Giờ bàng hoàng thời gian ngỡ ngừng trôi.<br></br>
                    <br></br>
                    Mai xa rồi sao…suốt đời là chủ nhật.<br></br>
                    Cổng trường bơ vơ hình bóng cũ đâu rồi<br></br>
                    Hành lang vắng lạnh lùng mong nhịp bước,<br></br>
                    Bàn ghế buồn, khẽ gọi..cố nhân ơi!<br></br>
                    <br></br>
                    Mai xa rồi sao… Thầy không còn trò cũ,<br></br>
                    Màu bảng xanh phấn trắng kẻ âm thầm.<br></br>
                    Bụi nhớ thương rơi từng trang sách nhỏ<br></br>
                    Lệ nhạt nhòa bay theo gió xa xăm…<br></br>
                    <br></br>
                    Mai xa rồi sao..!<br></br>
                    Ừ thật buồn bạn nhỉ ?<br></br>
                    Nói gì đây ngôn ngữ hóa dư thừa,<br></br>
                    Phút giây nầy ước gì mình tan biến.<br></br>
                    Để ngàn đời thôi hai tiếng - tiễn đưa.<br></br>
                    <br></br>
                    Nhưng Bạn thân ơi!<br></br>
                    Tạm chia tay thôi..trong một trường một lớp,<br></br>
                    Tạm cách xa thôi…trên một ghế một bàn<br></br>
                    Cùng lý tưởng dẫu dòng đời tan hợp..<br></br>
                    Phương trời nào ta cũng chẳng ly tan . !!<br></br>
                        Viết cho ngày từ giã mái trường Phật học Vạn Hạnh,  Sài gòn đông 92.  Nguyệt Tử Khách
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row" id="parting2"></div>

                <div className="row" id='scndRow'>
                    <div className="col-md-4"><button type="button" className="btn btn-dark" id='homepageBtns'>Media</button></div>
                    <div className="col-md-4"><button type="button" className="btn btn-dark" id='homepageBtns'>Photos</button></div>
                    <div className="col-md-4"><button type="button" className="btn btn-dark" id='homepageBtns'>Poems</button></div>
                </div>
            </div>
        </div>

        <script src="js/jquery-1.7.1.min.js"></script>
<script src="js/bootstrap.js"></script>
        </>
    )
    }

export default home;