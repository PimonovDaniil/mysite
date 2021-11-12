import './Glonass.css';
import driver from '../../../images/sp1.jpg'
import driver2 from '../../../images/sp2.jpg'
import driver3 from '../../../images/IceMunic.jpg'
import video from '../../../images/ГЛОНАСС.mp4'
import file from "../../../images/glonass.docx";
import file2 from "../../../images/beta 0.8.zip";



function Glonass(props) {
    return (
        <div className="wrappult">
            <div className="pultdiv">
                Отрасль спутникостроения играет всё более и более важную роль
                в современном мире. В том числе и я заинтересовался  спутниками,
                мне было интересно, как именно они попадают на орбиту, их функции
                и передвижение в космическом пространстве. Так родилась идея создать
                симулятор спутника, в котором каждый наглядно увидит, как спутник  выводиться
                на орбиту, раскрывается, ориентируется в пространстве, и сможет им управлять.
                Данная работа явилась первым шагом в этом направлении и охватывает процесс
                вывода спутника ГЛОНАСС на орбиту и симуляцию его поведения в космическом пространстве.
                <br/><br/>
                <a className="linkIceClass" href={file} download="">Скачать доклад</a>
                <br/>
                <a className="linkIceClass" href={file2} download="">Скачать игру</a>
                {/*<a className="linkIceClass"  href="https://github.com/PimonovDaniil/ldina" target="_blank">github</a>*/}
            </div>
            <video width="750" height="500" controls >
                <source src={video} type="video/mp4"/>
            </video>
            <img className="inlineclass"  src={driver}/>
            <img className="inlineclass"  src={driver2}/>
            {/*<img className="inlineclass"  src={driver3}/>*/}
        </div>
    )
}

export default Glonass;