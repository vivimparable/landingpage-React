import { IoBook } from 'react-icons/io5';
import profilePic from '../assets/cv.jpg'
import profilePic2 from '../assets/person2.jpg';


function About() {

  return (
    <section className='section'>
          <div className='section-text'>
            <h1>About me</h1>
            <div>
              <h3>Email</h3>
              <p>javiergarciaurruchi@gmail.com</p>
            </div>
            <div>
              <h3>Role</h3>
              <p>Front-end (React y Bue)</p>
            </div>
            <div>
            <h3>Phone</h3>
            <p>+34 680763857</p>
            </div>
            <div>
                <button> <IoBook/>
                <a href='../assets/CV.pdf'  download={profilePic2}>Download CV </a>
                </button>
            </div>
            

          </div>
          <div className='section-image'> 
            <img className=' image-color' src={profilePic2} alt="profile pic" />
             
            <img
          src={profilePic}
          className={  'background-image-color background-image-color-animation'
              
           }
          alt="profile pic"
        />          
        </div>
    </section>
  )
}

export default About
