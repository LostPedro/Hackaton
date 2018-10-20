import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { Home } from './components/home/Home';
import { Simulate } from './components/simulate/Simulate';
import { DisasterInventory } from './components/inventory';


const Routes = () => {
 return (
   <Router>
     <Scene key="root" hideNavBar>

       <Scene hideNavBar key="main">
         <Scene back title='Inventory' backButtonTintColor="white" titleStyle={{ color: 'white', fontSize: 20 }} navigationBarStyle={styles.navBar} key="inventory" component={DisasterInventory} />
         <Scene initial hideNavBar key="home" component={Home} />
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
      backgroundColor: '#33486b'
    },
};

 export default Routes;
