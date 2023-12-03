import './App.css';
import {Routers} from './Router/Routers';
import { useTransition } from 'react';

function App() {

  const [isPending, startTransition ] = useTransition()

  
  return isPending ? <h1>Loading...</h1> : (
    <>
    <Routers />
    </>
  );
}

export default App;
