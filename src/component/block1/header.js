import logo from './img/logo.png'
import style from './module.css'

function HeaderComponent(){
    return(
        <div class="divheader">
            <nav class="nav">
                <img class="imgnav" src = {logo}/>
                <div class="buttonheader">
                    <ul class="ulnav">
                    <li><u>О нас</u></li>
                    <li>Услуги</li>
                    <li>Аренда</li>
                    </ul>
                </div>
                <button class="buttonnav">Связаться</button>
            </nav>
        </div>
    )
}
export default HeaderComponent