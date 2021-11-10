import './Project.css';

function Project(props) {
    return (
        <div className="projClass">
            <div className="imgDiv">
                <img className="imgClass" src={props.imgPath} alt={"logo"}/>
            </div>
            <div className="textimgDiv">
                <div className="headingDiv">
                    {props.heading}
                </div>
                <div className="discrDiv">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Project;