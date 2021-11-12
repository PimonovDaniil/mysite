import './Arhivarius.css';
import driver from '../../../images/arh1.jpg'
import driver2 from '../../../images/arh4.jpg'
import driver3 from '../../../images/arh3.jpg'
import file from '../../../images/Архивариус.docx'


function Arhivarius(props) {
    return (
        <div className="wrappult">
            <div className="pultdiv">
                Многим компаниям необходимо хранить файлы, обеспечивать их целостность
                и доступ к ним.  Проанализировав литературные источники, я не нашёл
                удобной архивной службы, которая предназначена именно для хранения файлов
                и решил создать свою.<br/><br/>
                Передо мной стояла цель разработать удобную архивную службу, предназначенную
                для хранения файлов, которая выполняла бы функции: хранения файлов и информации
                о них, проверки целостности файлов, приёма в архив файлов с одинаковым именем,
                обеспечения уровня доступа к файлам, администрирования файлов и пользователей.<br/><br/>
                {/*<a className="linkIceClass"  href="https://github.com/PimonovDaniil/ldina" target="_blank">github</a>*/}
                <a className="linkIceClass" href={file} download="">Скачать доклад</a>
            </div>
            <img className="inlineclass"  src={driver}/>
            <img className="inlineclass"  src={driver3}/>
            <img className="inlineclass"  src={driver2}/>
        </div>
    )
}

export default Arhivarius;