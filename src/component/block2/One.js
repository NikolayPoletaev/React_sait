import dino from './img/dino.png'
import style from './one.css'
function MyOne(){
    return(
        <div class="onedino">
            <div class="text">
            <h1>Веломастерская “Велозар”</h1>
            <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p></div>
            <div>
                <img class="img" src={dino}/>
            </div>
        </div>
    )
}
export default MyOne