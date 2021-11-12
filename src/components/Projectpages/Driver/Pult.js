import './Pult.css';
import driver from '../../../images/driver.jpg'
import driver2 from '../../../images/driver2.jpg'
import video from '../../../images/gonka.mp4'

function Pult(props) {
    return (
        <div className="wrappult">
            <div className="pultdiv">
                В условиях пандемии невозможно тренироваться на реальном треке,поэтому автомодельному
                кружку необходимо было заставить самодельный пульт работать с игрой Virtual SlotCars.
                Для этой цели я помог усовершенствовать пульт и написал драйвер.<br/><br/>
                С помощью arduino я считывю напряжение с пульта, затем я передаю
                информацию об этом на компьютер, где её считывает мой драйвер и в
                зависимости от напряжения и настроек драйвера, он эмулирует нажатия клавишь.
            </div>
            <img className="inlineclass"  src={driver}/>
            <img className="inlineclass"  src={driver2}/>
            <video width="750" height="500" controls >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Pult;