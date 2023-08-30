
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
        <div className="background-base">
            <div className="main-content">
                <div className="main-content_box1">
                  {windowWidth>500 ?
                    <p> Javier Garcia Urruchi <br />
                     Front-End Developer</p> 
                     : 
                     <p> Javier<br /> Garcia<br />
                     <hr />
                     Front-End <br /> Developer</p> 
                     }
                     
                </div>
                <div className="main-content_box2">
                    <div className="lineDown"></div>
                    <a target='_blank' href="https://www.linkedin.com/in/javier-garcia-urruchi/"><FaGithub/> </a>
                    
                    <div className="lineDown"></div>

                    <a target='_blank' href="https://www.linkedin.com/in/javier-garcia-urruchi/"> <FaLinkedin/> </a>
                 
                  
                </div>
              </div>
        </div>
    </>
  )
}

export default MainPage
