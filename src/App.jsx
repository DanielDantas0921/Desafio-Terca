import { GroupInput } from "./components/GroupInput"
import  "./App.css"
import imgForm from './assets/image1.png'
import {Button} from "./components/Button"

function App() {


  return (
    
      <div className="container">
        <img src={imgForm} alt="" />
        <form >
          <GroupInput forId="email">Email</GroupInput>
          <GroupInput forId="password">Senha</GroupInput>
          <Button>Enviar</Button>
        </form>
      </div>
   
  )
}

export default App
