import './Projects.css';
import Project from "./project/Project";
import logoSphere from '../../images/projectIcons/sphere.jpg'
import logoPult from '../../images/projectIcons/pult.jpg'
import logoIce from '../../images/projectIcons/iceCencer.jpg'
import db from '../../images/projectIcons/db.jpg'


function Projects(props) {
    return (
        <div className="projects">
            <Project imgPath={logoSphere} heading={"Игра \"Шарик\""} id={2} description={<span>Игра, в которой кружок двигается по случайным траекториям <br/>(когда дойдет до границы, выбирает направление в соответствии  <br/>с положением границы). Пользователь должен указателем мышки  <br/>попасть по изображению и нажать кнопку, за что ему засчитываются баллы.</span>}/>
            <Project imgPath={logoPult} heading={"Драйвер для пульта"} id={3} description={<span>В условиях пандемии невозможно тренироваться на реальном треке,<br/> поэтому автомодельному кружку необходимо было заставить самодельный <br/>пульт работать с игрой Virtual SlotCars. Для этой цели я помог усовершенствовать<br/> пульт и написал драйвер.</span>}/>
            <Project imgPath={logoIce} heading={"Датчик льдины"} id={4} description={<span>Передо мной стояла конкурсная задача. Ученые исследователи Арктики<br/> находятся на дрейфующей льдине. Мне необходимо было разработать<br/> устройство, которое контролировало бы устойчивость и целостность льдины.</span>}/>
            <Project imgPath={db} heading={"Архивариус"} id={5} description={<span>Владимиром Дубенко и мной был разработан концепт программы, <br/> которая позволяла бы удобно хранить файлы. Данная программа также <br/> решает проблему доступа к файлам, включает в себя контроль целостности <br/> файлов и их удобный поиск. </span>}/>
        </div>
    )
}

export default Projects;