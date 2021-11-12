import './Project.css';
import {NavLink} from "react-router-dom";

function Project(props) {
    return (
        <div className="projClass">
            <div className="imgDiv">
                <img className="imgClass" src={props.imgPath} alt={"logo"}/>
            </div>
            <div className="textimgDiv">
                <NavLink to={"/"+props.id} className="headingDiv" >{props.heading}</NavLink>
                <div className="discrDiv">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Project;