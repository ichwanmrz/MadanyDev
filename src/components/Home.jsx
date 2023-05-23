import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import course1 from '../images/1200px-Visual_Studio_Code_1.18_icon.svg.png';
import course2 from '../images/18133.png';
import course3 from '../images/OIP (1).jpg';
import course4 from '../images/android.png';
import slide1 from  '../images/learning-to-code.webp';
import slide2 from  '../images//class.jpeg';
import slide3 from  '../images/web-development-programming-resized.jpg';
import partnerLogo1 from '../assets/icons8-visa.svg';
import partnerLogo2 from '../assets/icons8-apple-logo.svg';
import partnerLogo3 from '../assets/icons8-shopee.svg';
import partnerLogo4 from '../assets/icons8-spotify.svg';
import partnerLogo5 from '../assets/icons8-amazon.svg';
import partnerLogo6 from '../assets/icons8-paypal.svg';
import partnerLogo7 from '../assets/icons8-hp.svg';
import partnerLogo8 from '../assets/icons8-asus.svg';
import CourseDetails from './CourseDetails';


function Home() {
  return (
    <div className=" mt-5 mb-5 text-center rounded">
      {/* Welcome */}
      <h1 className='title mt-5 mb-4 w-50 pt-5 mx-auto rounded text-dark'>Welcome to <Link to="/about"><b className='title name text-info bg-dark'>
        <u>MadanyDev</u></b></Link>
        </h1>
      <h4 className='text text-dark'> <i>( Web Courses & Services )</i></h4>
      <br/>

      {/* Class */}
      <div className="row mt-5 w-75 mx-auto text-center">
        <div className="col-md-3">
          <div className="card">
            <img src={course1} className="card-img-top img-thumbnail" alt="Course 1" />
            <div className="card-body">
              <h5 className="card-title">Front-End Class</h5>
              <p className="card-text">Course description goes here.</p>
              {/* <a href="#" className="btn btn-outline-info"> */}
              <CourseDetails/>
              {/* </a> */}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={course2} className="card-img-top img-thumbnail" alt="Course 2" />
            <div className="card-body">
              <h5 className="card-title">Back-End Class</h5>
              <p className="card-text">Course description goes here.</p>
              {/* <a href="#" className="btn btn-outline-info">View Details</a> */}
              <CourseDetails/>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={course3} className="card-img-top img-thumbnail" alt="Course 3" />
            <div className="card-body">
              <h5 className="card-title">Full Stack Class</h5>
              <p className="card-text">Course description goes here.</p>
              {/* <a href="#" className="btn btn-outline-info">View Details</a> */}
              <CourseDetails/>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={course4} className="card-img-to img-thumbnail" alt="Course 3" />
            <div className="card-body">
              <h5 className="card-title">Android Class</h5>
              <p className="card-text">Course description goes here.</p>
              {/* <a href="#" className="btn btn-outline-info">View Details</a> */}
              <CourseDetails/>
            </div>
          </div>
        </div>
      </div>
      <br/>

      {/* About */}
      <div className="mt-5 mb-5 py-5 px-5 text-center w-75 mx-auto bg-dark rounded-4">
        <h2 className='text text-info'><u>About Our Courses</u></h2><br/>
        <p className='text-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
        <p className='text-light'>
          Phasellus consectetuer vestibulum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Cras auctor libero vitae sem vestibulum euismod. Nunc fermentum.
        </p>
      </div>


      {/* Benefit */}
      <div className='benefit pt-5 pb-4 bg-dark w-75 mx-auto rounded-4'>
      <h2 className='text mb-5 text-info'><u>Benefit & Services</u></h2>
      <div class="container d-flex gap-3 w-75 mb-5">
      <div className='col-6 w-50 '>
      <ul className="list-group text-start">
      <li class="list-group-item list-group-item-primary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Live Online Class
        </li>
        <li class="list-group-item list-group-item-secondary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Material Moduls
        </li>
        <li class="list-group-item list-group-item-success">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Recording Class
        </li>
        <li class="list-group-item list-group-item-primary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Grup Discussion
        </li>
        <li class="list-group-item list-group-item-success">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Free Consultation
        </li>
      </ul>
    </div>
    <div className='col-6 w-50 '>
      <ul className="list-group text-start">
      <li class="list-group-item list-group-item-primary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Reguler and Private Class
        </li>
        <li class="list-group-item list-group-item-secondary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Low-Budget Course
        </li>
        <li class="list-group-item list-group-item-success">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          2x Installments 
        </li>
        <li class="list-group-item list-group-item-primary">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
          Guiding After Course
        </li>
        <li class="list-group-item list-group-item-success">
        <input checked class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
        Free Access Materials Lifetime
        </li>
      </ul>
    </div>
      </div>
      </div>
      <br/>

       {/* Carousel */}
       <div className="container w-75 mt-4 mb-5">
      <div className="row">
        <div className="col-12 py-3 pb-5 rounded-4 bg-dark">
        <h2 className='text text-info mb-5 mt-3'><u>Class Activities</u></h2>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} className="d-block mx-auto img-thumbnail w-50" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} className="d-block mx-auto img-thumbnail w-50" alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} className="d-block mx-auto img-thumbnail w-50" alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
      {/* End Carousel */}

      <div className="partner row mt-4 w-50 mx-auto rounded-4">
        <div className="col-12 border-5">
          <h2 className="text text-center text-info mb-3 mt-4"><u>Our Partners</u></h2>
          <div className="d-flex justify-content-center align-items-center mt-5 mb-5 gap-5">
            <img src={partnerLogo4} className="partner-logo" alt="Partner 1" />
            <img src={partnerLogo2} className="partner-logo" alt="Partner 2" />
            <img src={partnerLogo8} className="partner-logo" alt="Partner 3" />
            <img src={partnerLogo7} className="partner-logo" alt="Partner 1" />
          </div>
          <div className="d-flex justify-content-center align-items-center mb-5 gap-5">
            <img src={partnerLogo1} className="partner-logo" alt="Partner 1" />
            <img src={partnerLogo3} className="partner-logo" alt="Partner 2" />
            <img src={partnerLogo5} className="partner-logo" alt="Partner 3" />
            <img src={partnerLogo6} className="partner-logo" alt="Partner 1" />
          </div>
        </div>
      </div>
      <br/>

{/* Quote */}
      <figure class="text-center fst-italic mt-3 pt-3 pb-1 rounded-4 text-success mx-auto bg-dark w-50">
          <blockquote class="blockquote">
            <p>"Failed but Still learning is Better, Than Never Tried but Still Dreaming"</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite>MadanyDev</cite>
          </figcaption>
      </figure>
      <a
        href="https://wa.me/6281244751352"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Outlet />
    </div>
  );
}

export default Home;
