import './About.css';
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function aboutMe() {
    return (
        <div className='container'>
            <div className='about'>
                <div className='about-img'>
                    <img src="image/IMG_5582.jpg" />
                </div>

                <div className='about-info'>
                <h1>About Me</h1>
                    <h2>I'M KORNKAMOL SAENGSAWANG</h2>
                    <p>I'm seeking an internship to enhance my knowledge and skills,
                        with the goal of becoming a proficient programmer specializing
                        in website development. I'm eager to apply my technical foundation
                        in a practical setting and grow through real-world experience.
                    </p>
                    <div className='about-box'>
                        <div className='education'>
                            <FaGraduationCap />
                            <h3>Education</h3>
                            <h4>King Mongkut’s Institute of Technology Ladkrabang</h4>
                            <p>Faculty of Science
                                <br />Department of Computer Science
                                <br />GPA 3.14
                            </p>
                        </div>
                        <div className='address'>
                            <FaLocationDot />
                            <h3>Address</h3>
                            <p>Ladkrabang ,Bangkok ,Thailand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default aboutMe;