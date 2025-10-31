
import './App.css'
import Counter from './component/Counter.jsx'

function App() {

  return ( 
    <>
      <h1>useState Hook</h1>
      <Counter />
     
    </>
  )
}

export default App


// IN react, the useState hook is a fundamental tool for managing local state within functional components. It allows developers to add stateful logic to their components without needing to convert them into class components. The useState hook returns an array with two elements: the current state value and a function to update that state. This makes it easy to create interactive and dynamic user interfaces in React applications.