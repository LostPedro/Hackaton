import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { Home } from './components/home/Home';
import { Simulate } from './components/simulate/Simulate';

const Routes = () => {
 return (
   <Router>
     <Scene key="root" hideNavBar>
       <Scene hideNavBar key="main">
         <Scene key="home" component={Home} />
       </Scene>
       <Scene hideNavBar key="simulate">
         <Scene key="simulate" component={Simulate} />
       </Scene>
    </Scene>
   </Router>
  );
};

const styles = {
  navBar: {
      backgroundColor: 'rgba(255,255,255,0)'
    },
};

 export default Routes;
