import './Smarthome.css';
import driver from '../../../images/projectIcons/smarthome.jpg'
import driver2 from '../../../images/sh.jpg'
import driver3 from '../../../images/sh2.jpg'
import file from '../../../images/Система удаленного контроля помещений-Писонов Д..docx'



function Smarthome(props) {
    return (
        <div className="wrappult">
            <div className="pultdiv">
                Для любого человека актуально обеспечение безопасности помещения, являющегося его собственностью.
                Под обеспечением безопасности будем понимать контроль доступа в помещение; сведения о температуре, влажности, загазованности помещения.
                Не менее актуально оперативное получение данной информации. На сегодняшний день самым быстрым способом информирования для большинства людей является сотовый телефон
                <br/><br/>
                Моей целью было создание удаленной системы контроля, которая будет подстраиваться под любое помещение.<br/><br/>
                <a className="linkIceClass" href={file} download="">Скачать доклад</a>
            </div>
            <img className="inlineclass"  src={driver}/>
            <img className="inlineclass"  src={driver2}/>
            <img className="inlineclass"  src={driver3}/>
        </div>
    )
}

export default Smarthome;