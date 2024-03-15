// import React from "react"
// import Heading from "../../common/heading/Heading"
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
//             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//             <div className='button'>
//               <button className='primary-btn'>
//                 GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero

import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const history = useHistory();

  const handleViewCourseClick = () => {
    // Navigate to the next page (replace '/nextpage' with your actual route)
    history.push("/allcourses");
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="WELCOME TO Ed-Tech" title="Best Online Education Expertise" />
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button onClick={handleViewCourseClick}>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
