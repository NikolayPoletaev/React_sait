import './App.css';
import HeaderComponent from './component/block1/header';
import MyOne from './component/block2/One';
import ThreeComponent from './component/block2/Three';
import MyTwo from './component/block2/Two';
import MyFour from './component/block2/Four';
import ThreeCardProps from './component/block3/threecard';



function App() {
  const square_1 ={
    title: "Готовое ТО"
  }
  const square_2 ={
    title: "Выравнивание колес"
  }
  const square_3 ={
    title: "Настройка переключателей"
  }
  return (
    <div className="App">
      <HeaderComponent />
      <MyOne/>
      <MyTwo/>
      <ThreeComponent/>
      <ThreeCardProps data = 
      {{square_1,
        square_2,
        square_3,
      }}/>
      <MyFour/>
    </div>
  );
}

export default App;
