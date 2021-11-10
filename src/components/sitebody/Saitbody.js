import './Saitbody.css';
import ava from '../../images/ava.jpg' // relative path to image

function Saitbody(props) {
    return (
        <div className="sitediv">
            <div className="kek">
                <div className="whitebox">
                    <div>
                        <img src={ava} alt={"logo"}/>
                    </div>
                   <div className="myname">
                       Я <b>Пимонов Даниил</b>
                   </div>
                    <div className="proger">
                        <span className="proger2">программист</span>
                    </div>
                </div>
            </div>
            <div className="textaboutme">
                <span className="educationtext">
                    Мне 20. Я учусь на 3 курсе в ТУСУРе по направлению<br/>
                    информатика и вычислительная техника.
                </span>
                <br/><br/><br/>
                <span className="skillstext">
                    У меня есть знания языков python, java, pascal, c++.<br/> Также мне доводилось работать
                    с микроконтроллерами <br/>arduino и создавать 3д модели в blender.
                </span>
            </div>
        </div>
    )
}

export default Saitbody;