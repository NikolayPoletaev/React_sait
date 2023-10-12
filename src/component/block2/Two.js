import bicycle from './img/bicycle.jpg'
import style from './two.css'
function MyTwo(){
    return(
        <div class="bicycle">
        <div class="twoh2">
            <h2>Что мы предлагаем</h2>
            <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
        </div>
            <img class="imgb" src={bicycle}/>
        </div>
    )
}
export default MyTwo