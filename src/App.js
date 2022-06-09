import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';
import Story from './Routes/Story/story.component';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' index element={<Home />} />
      <Route exact path='/story' index element={<Story />}/>
    </Routes>
  );
};

export default App;
