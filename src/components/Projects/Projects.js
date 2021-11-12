import './Projects.css';
import Project from "./project/Project";
import logoSphere from '../../images/projectIcons/sphere.jpg'
import logoPult from '../../images/projectIcons/pult.jpg'
import logoIce from '../../images/projectIcons/iceCencer.jpg'
import db from '../../images/projectIcons/db.jpg'
import sh from '../../images/projectIcons/smarthome.jpg'
import glonass from '../../images/projectIcons/glonass.jpg'
import admiralt from '../../images/projectIcons/admiralt.jpg'
import reader from '../../images/projectIcons/reader.jpg'
import perc from '../../images/projectIcons/perc.jpg'
import galaxy from '../../images/projectIcons/galaxy.jpg'
import sqsk from '../../images/projectIcons/sqsk.jpg'



function Projects(props) {
    return (
        <div className="projects">
            <Project imgPath={logoSphere} heading={"Игра \"Шарик\""} id={2} description={<span>Игра, в которой кружок двигается по случайным траекториям <br/>(когда дойдет до границы, выбирает направление в соответствии  <br/>с положением границы). Пользователь должен указателем мышки  <br/>попасть по изображению и нажать кнопку, за что ему засчитываются баллы.</span>}/>
            <Project imgPath={logoPult} heading={"Драйвер для пульта"} id={"Driver"} description={<span>В условиях пандемии невозможно тренироваться на реальном треке,<br/> поэтому автомодельному кружку необходимо было заставить самодельный <br/>пульт работать с игрой Virtual SlotCars. Для этой цели я помог усовершенствовать<br/> пульт и написал драйвер.</span>}/>
            <Project imgPath={logoIce} heading={"Датчик льдины"} id={"Sensor"} description={<span>Передо мной стояла конкурсная задача. Ученые исследователи Арктики<br/> находятся на дрейфующей льдине. Мне необходимо было разработать<br/> устройство, которое контролировало бы устойчивость и целостность льдины.</span>}/>
            <Project imgPath={db} heading={"Архивариус"} id={"arhivarius"} description={<span>Владимиром Дубенко и мной был разработан концепт программы, <br/> которая позволяла бы удобно хранить файлы. Данная программа также <br/> решает проблему доступа к файлам, включает в себя контроль целостности <br/> файлов и их удобный поиск. </span>}/>
            <Project imgPath={sh} heading={"Умный дом"} id={"smarthome"} description={<span>Передо мной стояла задача разработать систему, которая должна реагировать<br/>  на движение и отправлять sms о проникновении владельцу помещения. Также <br/> должна быть возможность удалённо узнать температуру, влажность и<br/>  загазованность помещения.</span>}/>
            <Project imgPath={glonass} heading={"Создание видео \"Запуск ГЛОНАССа\""} id={"glonass"} description={<span>Я под руководством Синкевич Светланы смоделировал<br/>  запуск и вывод на орбиту спутника ГЛОНАСС средствами blender. Также<br/>  мной была создана игра где можно самому попробовать сориентировать спутник. </span>}/>
            <Project imgPath={admiralt} heading={"Якорь Адмиралтейский"} id={8} description={<span>Я под руководством Синкевич Светланы смоделировал трёхмерную<br/> модель якоря Адмиралтейский для последующей печати на 3д принтере. <br/>Данная модель нужна судомодельному кружку. </span>}/>
            <Project imgPath={reader} heading={"Читалка 3д файлов"} id={9} description={<span>С целью изучения трёхмерной графики, мной была написана программа,<br/>  способная читать и отображать трёхмерные файлы. </span>}/>
            <Project imgPath={perc} heading={"Перцептрон"} id={10} description={<span>С целью изучения искусственного интеллекта, мной был реализован перцептрон,<br/>  способный распознавать цифры.</span>}/>
            <Project imgPath={galaxy} heading={"Пародия на игру galaxy"} id={11} description={<span>С целью изучения темы "спрайты", мной была написана<br/>  игра пародия на galaxy.</span>}/>
            <Project imgPath={sqsk} heading={"Лабиринт"} id={12} description={<span>С целью изучения темы простейшей графики, мной была написана<br/>  простая игра с редактором карты.</span>}/>
        </div>
    )
}

export default Projects;