import './Courses.css';
import driver from "../../images/k1.jpg";
import driver2 from "../../images/k2.jpg";
import driver3 from "../../images/k3.jpg";
import driver4 from "../../images/k4.jpg";



function Courses(props) {
    return (
        <div className="projects">
            <div >
                <img  className="con"  src={driver}/>
            </div>
            <div >
                <img  className="con"   src={driver2}/>
            </div>
            <div >
                <img  className="con"  src={driver3}/>
            </div>
            <div >
                <img  className="con"  src={driver4}/>
            </div>
        </div>
    )
}

export default Courses;