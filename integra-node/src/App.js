
import './App.css';
import Countercomponent from './Countercomponent';

function App({componentname}){
  console.log(componentname);

  const sum = (a,b) =>{
    return a+b;
  }


  return(

    <div>
      This is {componentname} Component <br/> <br/>
      The sum value is {sum(3,4)} <br/> <br/>
      <Countercomponent componentName = "counter" />
      </div>
  )
}




export default App;
