
import './App.css'
import Message from "./Message.jsx";



const Description = () => {
    return (
        <div>
            <p>This is a simple app</p>
        </div>
    )
}

function App() {
  return (
    <div>
        <Message color='red'message="we are working"/>
        <Message color='yellow'message="in a React "/>
        <Message color='blue'message="course"/>
        <Description />
        <br />
        {new Date().toLocaleDateString()}
    </div>
  )
}

export default App
