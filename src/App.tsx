import React from 'react';
import {Header} from './component/Header';
import {Main} from './component/Main';
import {Menu} from './component/Menu';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
