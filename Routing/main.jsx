import React from 'react'
import ReactDom from "react-dom/client";
import App from './App';
import Toggel from './Toggel';
import Registert from './Assigment/Registert';
import Logindashbord from './Assigment/Logindashbord';
import CreateRegister from './Assigment/Registert';
import Datastore from './Usecontext/Datastore';
import Loginpage from './Usecontext/loginpage';
import Task1 from './useState task/Task1';
import Child from './useState task/Child';
import Task3 from './useState task/Task3';
import Task4 from './useState task/Task4';
import ParentComponent from './useState task/Task2';
import Shoppingcard, { Usercontext } from './useEffect Task/Shoppingcard';
import ProductList from './useEffect Task/EffectDemo';
import Profile from './Dashboard/Profile';
import Showcart from './useEffect Task/Showcart';

ReactDom.createRoot(document.getElementById("root")).render(
  //   < App>
  //     <Toggel />
  //   </App>

  // <Registert >
  //    <Logindashbord />
  // </Registert>

  // <CreateRegister>
  //   <Logindashbord />
  // </CreateRegister>

  // <Datastore>
  //   <Loginpage />
  // </Datastore>
  // <Task1 />
  //  <Child />
  // <Task3 />
  // <Task4 />
  //  <ParentComponent />

  // < Shoppingcard />
  // <ProductList />
  // <Profile />

  <App />

  // <Shoppingcard>
  //   <Showcart />
  // </Shoppingcard>
)