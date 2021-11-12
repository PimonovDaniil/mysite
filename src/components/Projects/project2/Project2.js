import './Project2.css';
import {NavLink} from "react-router-dom";

function Project2(props) {
    return (
        <div className="projClass">
            <div className="imgDiv">
                <img className="imgClass" src={props.imgPath} alt={"logo"}/>
            </div>
            <div className="textimgDiv">
                <a className="headingDiv"  href="http://176.119.147.29:3000/menu" target="_blank">{props.heading}</a>
                <div className="discrDiv">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Project2;