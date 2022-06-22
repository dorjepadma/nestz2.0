import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';
import Story from './Routes/Story/story.component';
import Navigation from './Routes/Navigation/Navigation.component';

const App = () => {
  return (
    <Routes>
      < Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} />
      <Route  path='story' index element={<Story />}/>
      </Route>
    </Routes>
  );
};

export default App;
