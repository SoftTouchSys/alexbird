import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import $ from 'jquery'
import '../experienceCards/Cards.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Card = () => {
    

    useEffect(() => {

        $('iframe').css('borderRadius', '10px')

        $(document).ready(function(){
            $('#carouselExampleIndicators6', '#carouselExampleIndicators7', '#carouselExampleIndicators8', '#carouselExampleIndicators8').carousel();
        })

    }, [])

    const handleSlideUp6 = () => {
        $('.card__detail__div6').css({
            'bottom': '0%',
            'opacity': '1'
        })
        $(".bg__black__effect").css("display", "block");
        $("#card-iframe-6").attr("src", $("#card-iframe-6").attr("data-src"));
    }

    const handleSlideDown6 = () => {
        $('.card__detail__div6').css({
            'bottom': '-100%',
            'opacity': '0'
        })
        $(".bg__black__effect").css("display", "none");
        $("#card-iframe-6").attr("src", "");
    }

    const handleSlideUp7 = () => {
        $('.card__detail__div7').css({
            'bottom': '0%',
            'opacity': '1'
        })
        $(".bg__black__effect").css("display", "block");
    }

    const handleSlideDown7 = () => {
        $('.card__detail__div7').css({
            'bottom': '-100%',
            'opacity': '0'
        })
        $(".bg__black__effect").css("display", "none");
    }

    const handleSlideUp8 = () => {
        $('.card__detail__div8').css({
            'bottom': '0%',
            'opacity': '1'
        })
        $(".bg__black__effect").css("display", "block");
        $("#card-iframe-8").attr("src", $("#card-iframe-8").attr("data-src"));
    }

    const handleSlideDown8 = () => {
        $('.card__detail__div8').css({
            'bottom': '-100%',
            'opacity': '0'
        })
        $(".bg__black__effect").css("display", "none");
        $("#card-iframe-8").attr("src", "");
    }

    const handleSlideUp9 = () => {
        $('.card__detail__div9').css({
            'bottom': '0%',
            'opacity': '1'
        })
        $(".bg__black__effect").css("display", "block");
        $("#card-iframe-9").attr("src", $("#card-iframe-9").attr("data-src"));
    }

    const handleSlideDown9 = () => {
        $('.card__detail__div9').css({
            'bottom': '-100%',
            'opacity': '0'
        })
        $(".bg__black__effect").css("display", "none");
        $("#card-iframe-9").attr("src", "");
    }

    const handleOpenFullImage6__1 = () => {
        $('.card__detail__div6').css('bottom', '0%')
        
        $('body').css('overflowY', 'hidden')

        const fullImageDiv = document.querySelector('.bottom__full__image6__1')
        fullImageDiv.classList.add('active__full__image')
    }

    const handleCloseFullImage6__1 = () => {
        $('.card__detail__div6').css('bottom', '0%')
        
        $('body').css('overflowY', 'unset')

        const fullImageDiv = document.querySelector('.bottom__full__image6__1')
        fullImageDiv.classList.remove('active__full__image')
    }

    const handleOpenFullImage7__1 = () => {
        $('.card__detail__div7').css('bottom', '0%')
        
        $('body').css('overflowY', 'hidden')

        const fullImageDiv = document.querySelector('.bottom__full__image7__1')
        fullImageDiv.classList.add('active__full__image')
    }

    const handleCloseFullImage7__1 = () => {
        $('.card__detail__div7').css('bottom', '0%')
        
        $('body').css('overflowY', 'unset')

        const fullImageDiv = document.querySelector('.bottom__full__image7__1')
        fullImageDiv.classList.remove('active__full__image')
    }

    const handleOpenFullImage8__1 = () => {
        $('.card__detail__div8').css('bottom', '0%')
        
        $('body').css('overflowY', 'hidden')

        const fullImageDiv = document.querySelector('.bottom__full__image8__1')
        fullImageDiv.classList.add('active__full__image')
    }

    const handleCloseFullImage8__1 = () => {
        $('.card__detail__div8').css('bottom', '0%')
        
        $('body').css('overflowY', 'unset')

        const fullImageDiv = document.querySelector('.bottom__full__image8__1')
        fullImageDiv.classList.remove('active__full__image')
    }

    const handleOpenFullImage9__1 = () => {
        $('.card__detail__div9').css('bottom', '0%')
        
        $('body').css('overflowY', 'hidden')

        const fullImageDiv = document.querySelector('.bottom__full__image9__1')
        fullImageDiv.classList.add('active__full__image')
    }

    const handleCloseFullImage9__1 = () => {
        $('.card__detail__div9').css('bottom', '0%')
        
        $('body').css('overflowY', 'unset')

        const fullImageDiv = document.querySelector('.bottom__full__image9__1')
        fullImageDiv.classList.remove('active__full__image')
    }

    return (
        <Fragment>
            
            {/* Card 6 */}

            <div className="card__box" onClick={handleSlideUp6}>

                <div className="card__image">

                    <img src='./images/Square-5.png' alt="" />

                </div>

                <h3>Car Seat Finder</h3>

                <p>Find the right car seat at every age with a child safety expert, and learn helpful tips along the way. </p>

            </div>

            {/* Card 7 */}

            <div className="card__box" onClick={handleSlideUp7}>

                <div className="card__image">

                    <img src='./images/Square-6.png' alt="" />

                </div>

                <h3>Fly with Breeze</h3>

                <p>Order healthy & delicious airport food on-the-go with this easy, breezy app & service.</p>

            </div>

            {/* Card 8 */}

            <div className="card__box" onClick={handleSlideUp8}>

                <div className="card__image">

                    <img src='./images/Square-7.png' alt="" />

                </div>

                <h3>Coffee Maker Finder</h3>

                <p>Spill your routine & tastes to a barista pro, and let her find the perfect coffee maker for you.</p>

            </div>

            {/* Card 9 */}

            <div className="card__box" onClick={handleSlideUp9}>

                <div className="card__image">

                    <img src='./images/Square-8.png' alt="" />

                </div>

                <h3>Paint Finder</h3>

                <p>Get help from an interior designer, testing colors in virtual spaces to find the right shade for your room.</p>

            </div>

            {/* Card Slide 6 */}

            <div className="card__detail__div6">

                <Container fluid={true} className='p-0'>

                    <Row className='p-0 m-0 mb-4 cards__handle__row' onClick={handleSlideDown6}>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-center'>

                            <img src="./images/Handle.svg" className='handleImg' alt=""/>

                        </Col>

                    </Row>

                    <Row className='p-0 m-0 pt-3'>

                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-start'>

                            <div className="card__detail__img6">
                                
                                <iframe 
                                    id='card-iframe-6'
                                    src=''
                                    data-src="https://de.eko.com/car-seat" 
                                    title="That Moment When"
                                    style={{width: '100%', height: '100%', border: 0}} 
                                    allowFullScreen
                                    scrolling="no" 
                                    allow="fullscreen">
                                </iframe>
                            
                            </div>

                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={6} sm={12} xs={12} className='p-0 card__content__container'>

                            <div className="main__content">

                                <h4>What I did</h4>

                                <p>As Product Lead, I worked with the Walmart Baby team to design & build this interactive car seat finder for kids of all ages.</p>

                                <p>By helping both new and experienced parents find the right seat, this experience solves clear consumer problems, converting engaged shoppers at rate of 20%.</p>

                            </div>

                            <div className="skills__content">
                                
                                <h4>Skills</h4>

                                <ul className='p-0'>

                                    <li>Concepting</li>
                                    <li>B2C</li>
                                    <li>Product strategy</li>
                                    <li>User research</li>
                                    <li>UX design</li>
                                    <li>Roadmap</li>
                                    <li>Spec</li>
                                    <li>Data analysis</li>
                                    <li>Optimization</li>
                                    <li>Video production</li>
                                    <li>Digital production</li>

                                </ul>

                            </div>

                            <div className="product__img__div1">

                                <div className='product__img__1__1' onClick={handleOpenFullImage6__1}></div>
                                <div className='product__img__1__2' onClick={handleOpenFullImage6__1}></div>
                                <div className='product__img__1__3' onClick={handleOpenFullImage6__1}></div>

                            </div>

                        </Col>

                    </Row>

                </Container>                

            </div>

            {/* Full Image Divs */}

            <div className="bottom__full__image6__1">

                <AiOutlineCloseCircle className='closeIcon' onClick={handleCloseFullImage6__1}/>

                <div id="carouselExampleIndicators6" data-bs-interval="false" className="carousel slide sliderimg6">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
                        <div className="carousel-item active">
                        <img src="./images/CarSeat1.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/CarSeat3.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/CarSeat2.png" className="d-block w-100 imageSize6" alt= "..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            {/* Card Slide 7 */}

            <div className="card__detail__div7">

                <Container fluid={true} className='p-0'>

                    <Row className='p-0 m-0 mb-4 cards__handle__row' onClick={handleSlideDown7}>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-center'>

                            <img src="./images/Handle.svg" className='handleImg' alt="" />

                        </Col>

                    </Row>

                    <Row className='p-0 m-0 pt-3'>

                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-start'>

                            <div className="card__detail__img7"></div>

                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={6} sm={12} xs={12} className='p-0 card__content__container'>

                            <div className="main__content">

                                <h4>What I did</h4>

                                <p>As Product Lead for this fall fashion campaign, I concepted & designed this interactive lookbook experience.</p>

                                <p>I directed video production & dev teams to prototype & deliver iteratively, resulting in a shopper conversion rate of 24%.</p>

                            </div>

                            <div className="skills__content">
                                
                                <h4>Skills</h4>

                                <ul className='p-0'>

                                    <li>Concepting</li>
                                    <li>UX design</li>
                                    <li>User flow</li>
                                    <li>IA</li>
                                    <li>Prototype</li>
                                    <li>UI design</li>
                                    <li>Spec</li>
                                    <li>Video production</li>
                                    <li>Digital production</li>

                                </ul>

                            </div>

                            <div className="three__img__div product__img__div2">

                                <div className='product__img__2__1' onClick={handleOpenFullImage7__1}></div>
                                <div className='product__img__2__2' onClick={handleOpenFullImage7__1}></div>
                                <div className='product__img__2__3' onClick={handleOpenFullImage7__1}></div>

                            </div>

                        </Col>

                    </Row>

                </Container>                

            </div>

            {/* Full Image Divs */}

            <div className="bottom__full__image7__1">

                <AiOutlineCloseCircle className='closeIcon' onClick={handleCloseFullImage7__1}/>

                <div id="carouselExampleIndicators7" data-bs-interval="false" className="carousel slide sliderimg7">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
                        <div className="carousel-item active">
                        <img src="./images/BreezeProduct1.png" className="d-block w-100 imageSize7" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/BreezeProduct2.png" className="d-block w-100 imageSize7" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/BreezeProduct3.png" className="d-block w-100 imageSize7" alt= "..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            {/* Card Slide 8 */}

            <div className="card__detail__div8">

                <Container fluid={true} className='p-0'>

                    <Row className='p-0 m-0 mb-4 cards__handle__row' onClick={handleSlideDown8}>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-center'>

                            <img src="./images/Handle.svg" className='handleImg' alt="" />

                        </Col>

                    </Row>

                    <Row className='p-0 m-0 pt-3'>

                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-start'>

                            <div className="card__detail__img8">
                                
                                <iframe 
                                    id='card-iframe-8'
                                    src=''
                                    data-src="https://de.eko.com/coffee-maker" 
                                    title="That Moment When"
                                    style={{width: '100%', height: '100%', border: 0}} 
                                    allowFullScreen
                                    scrolling="no" 
                                    allow="fullscreen">
                                </iframe>
                            
                            </div>

                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={6} sm={12} xs={12} className='p-0 card__content__container'>

                            <div className="main__content">

                                <h4>What I did</h4>

                                <p>As Product Lead for this fall fashion campaign, I concepted & designed this interactive lookbook experience.</p>

                                <p>I directed video production & dev teams to prototype & deliver iteratively, resulting in a shopper conversion rate of 24%.</p>

                            </div>

                            <div className="skills__content">
                                
                                <h4>Skills</h4>

                                <ul className='p-0'>

                                    <li>Concepting</li>
                                    <li>UX design</li>
                                    <li>User flow</li>
                                    <li>IA</li>
                                    <li>Prototype</li>
                                    <li>UI design</li>
                                    <li>Spec</li>
                                    <li>Video production</li>
                                    <li>Digital production</li>

                                </ul>

                            </div>

                            <div className="product__img__div1">

                                <div className='product__img__1__1 product__img__3__1' onClick={handleOpenFullImage8__1}></div>
                                <div className='product__img__1__2 product__img__3__2' onClick={handleOpenFullImage8__1}></div>
                                <div className='product__img__1__3 product__img__3__3' onClick={handleOpenFullImage8__1}></div>

                            </div>

                        </Col>

                    </Row>

                </Container>                

            </div>

            {/* Full Image Divs */}

            <div className="bottom__full__image6__1 bottom__full__image8__1">

                <AiOutlineCloseCircle className='closeIcon' onClick={handleCloseFullImage8__1}/>

                <div id="carouselExampleIndicators8" data-bs-interval="false" className="carousel slide sliderimg6">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
                        <div className="carousel-item active">
                        <img src="./images/Coffee1.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/Coffee3.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/Coffee2.png" className="d-block w-100 imageSize6" alt= "..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            {/* Card Slide 9 */}

            <div className="card__detail__div9">

                <Container fluid={true} className='p-0'>

                    <Row className='p-0 m-0 mb-4 cards__handle__row' onClick={handleSlideDown9}>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-center'>

                            <img src="./images/Handle.svg" className='handleImg' alt="" />

                        </Col>

                    </Row>

                    <Row className='p-0 m-0 pt-3'>

                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='p-0 d-flex justify-content-center align-items-start'>

                            <div className="card__detail__img9">
                                
                                <iframe 
                                    id='card-iframe-9'
                                    src=''
                                    data-src="https://de.eko.com/paint" 
                                    title="That Moment When"
                                    style={{width: '100%', height: '100%', border: 0}} 
                                    allowFullScreen
                                    scrolling="no" 
                                    allow="fullscreen">
                                </iframe>
                            
                            </div>

                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={6} sm={12} xs={12} className='p-0 card__content__container'>

                            <div className="main__content">

                                <h4>What I did</h4>

                                <p>As Product Lead for this fall fashion campaign, I concepted & designed this interactive lookbook experience.</p>

                                <p>I directed video production & dev teams to prototype & deliver iteratively, resulting in a shopper conversion rate of 24%.</p>

                            </div>

                            <div className="skills__content">
                                
                                <h4>Skills</h4>

                                <ul className='p-0'>

                                    <li>Concepting</li>
                                    <li>UX design</li>
                                    <li>User flow</li>
                                    <li>IA</li>
                                    <li>Prototype</li>
                                    <li>UI design</li>
                                    <li>Spec</li>
                                    <li>Video production</li>
                                    <li>Digital production</li>

                                </ul>

                            </div>

                            <Row className='m-0 p-0'>
                                
                                <Col lg={6} md={6} className='p-0 d-flex'>

                                    <img src="./images/Paint3.png" className='product9__img' alt="" onClick={handleOpenFullImage9__1}/>

                                </Col>

                                <Col lg={6} md={6} className='p-0'>

                                    <Row className='m-0 p-0'>

                                        <Col lg={12} md={12} className='p-0 product-9-col-2'>
                                        
                                            <img src="./images/Paint1.png" alt="" className='product9__img' onClick={handleOpenFullImage9__1}/>
                                        
                                        </Col>

                                        <Col lg={12} md={12} className='p-0 mt-3 product-9-col-2'>
                                        
                                            <img src="./images/Paint2.png" alt="" className='product9__img' onClick={handleOpenFullImage9__1}/>
                                        
                                        </Col>

                                    </Row>

                                </Col>

                            </Row>

                        </Col>

                    </Row>

                </Container>                

            </div>

            {/* Full Image Divs */}

            <div className="bottom__full__image6__1 bottom__full__image9__1" >

                <AiOutlineCloseCircle className='closeIcon' onClick={handleCloseFullImage9__1}/>

                <div id="carouselExampleIndicators9" data-bs-interval="false" className="carousel slide sliderimg6">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
                        <div className="carousel-item active">
                        <img src="./images/Paint3.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/Paint1.png" className="d-block w-100 imageSize6" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/Paint2.png" className="d-block w-100 imageSize6" alt= "..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </Fragment>
    )
}

export default Card
