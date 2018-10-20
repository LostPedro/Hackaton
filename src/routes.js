import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { Home } from './components/home/Home';

const Routes = () => {
 return (
   <Router>
     <Scene key="root" hideNavBar>

       <Scene title="TSUNAM" key="main">
         <Scene key="home" component={Home} />
       </Scene>

    </Scene>
   </Router>
  );
};

const style = {

};

 export default Routes;
