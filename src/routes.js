import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { Home } from './components/home/Home';

const Routes = () => {
 return (
   <Router>
     <Scene key="root" hideNavBar>

       <Scene navTransparent title="TSUNAMI" key="main">
         <Scene key="home" component={Home} />
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
