import { useState } from 'react';
import './App.css';
import { Panel } from './components/shared/Panel';
import { PanelMovil } from './components/shared/PanelMovil';

function App() {
  const [Menu, setMenu] = useState(false);
  const [Orden, setOrden] = useState(false); 

  const miMenu = () => {
    setMenu(!Menu);
    setOrden(false)
  };
  
  const miOrden = () => {
    setOrden(!Orden)
    setMenu(false)
  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Panel Menu={Menu} />
      <PanelMovil miMenu={miMenu} Menu={Menu} miOrden={miOrden} Orden={Orden} />
    </div>
  );
}

export default App;
