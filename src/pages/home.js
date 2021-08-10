import React from 'react';
import { Carousel } from "react-bootstrap";
import "../App.css";
import { Button } from 'react-bootstrap';
// import { Nav } from '../components/nav/index.js';


function home() {

    // var button = document.createElement("button");
    
    // button.addEventListener("click", function(){
    //     alert("button pressed!");
    // });

    // (function smoothscroll(){
    //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (currentScroll > 0) {
    //          window.requestAnimationFrame(smoothscroll);
    //          window.scrollTo (0,currentScroll - (currentScroll/10));
    //     }
    // })();

    return (
        <>

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

                    <a className="arrowDown" href="#bio" smoothscroll>
                        <img src={require("../images/arrowDown.png")}/>
                        
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

{/* POEM SECTION */}

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

{/* LOCATIONS SECTION */}

            <div className="container">
                <div className="row" id="parting2"></div>

                <div className="row" id="poem">
                    <div className="col-md-12" id="text">
                        <h1 id="textL">LOCATIONS:</h1>
                            <br></br>
                            Bodhinyana Buddhist Monastery<br></br>
                            216 Kingsbury Dr, Serpentine WA 6125, Australia<br></br>
                            <br></br>

                            Fo Guang Shan Nan Tien Temple<br></br>
                            180 Berkeley Rd, Berkeley NSW 2506, Australia<br></br>
                            <br></br>

                            Nan Hai Pu Tuo Temple of Australia<br></br>
                            27 Cactus Canyon Rd, Sellicks Hill SA 5174, Australia<br></br>
                            <br></br>

                            Pháp Hoa Temple<br></br>
                            20 Butler Ave, Pennington SA 5013, Australia<br></br>
                            <br></br>

                    </div>
                </div>
            </div>

{/* ROUTING BUTTONS */}

            <div className="container">
                <div className="row" id="parting2"></div>

                <div className="row" id='scndRow'>
                    {/* <div className="col-md-4"><input type="button" id='homepageBtns' onclick="location.href='./media.js';" value="go to media" />Media</div> */}
                    <div className="col-md-4"><Button type="button" className="btn btn-dark" id='homepageBtns' href='/media'>Media</Button></div>
                    <div className="col-md-4"><Button type="button" className="btn btn-dark" id='homepageBtns' href='/photos'>Photos</Button></div>
                    <div className="col-md-4"><Button type="button" className="btn btn-dark" id='homepageBtns' href='/poems'>Poems</Button></div>
                </div>
            </div>
        </div>

        <script src="js/jquery-1.7.1.min.js"></script>
<script src="js/bootstrap.js"></script>
        </>
    )
    }

export default home;