import './Contests.css';
import driver from "../../images/g1.jpg";
import driver2 from "../../images/g2.jpg";
import driver3 from "../../images/g3.jpg";



function Contests(props) {
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
        </div>
    )
}

export default Contests;