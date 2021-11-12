import './Ice.css';
import driver from '../../../images/shema.jpg'
import driver2 from '../../../images/ustroystv.jpg'
import driver3 from '../../../images/IceMunic.jpg'
import video from '../../../images/gonka.mp4'



function Ice(props) {
    return (
        <div className="wrappult">
            <div className="pultdiv">
                Передо мной стояла конкурсная задача. Ученые исследователи Арктики
                находятся на дрейфующей льдине. Мне необходимо было разработать
                устройство, которое контролировало бы устойчивость и целостность льдины.<br/><br/>
                Для решения данной задачи в моём устройстве предусмотрены гираскоп, барометр и
                акселерометр. При отклонении данных, поступающих с датчиков, зуммер будет
                издавать предупредительный сигнал. Также предполагается что по краям льдины
                будет проходить кабель, при разрыве которго устройство также будет сообщать.
                Настраивать устройство можно как и через LCD дисплей, так и через смартфон.<br/><br/>
                <a className="linkIceClass"  href="https://github.com/PimonovDaniil/ldina" target="_blank">github</a>
            </div>
            <img className="inlineclass"  src={driver}/>
            <img className="inlineclass"  src={driver2}/>
            <img className="inlineclass"  src={driver3}/>
        </div>
    )
}

export default Ice;