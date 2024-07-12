
import './App.css'
import Card from './card'
function App() {

  // let myObj={
  //   name:"Dhruv Senjaliya",
  //   age: 21
  // }
  // let myArr=[1,2,3];
  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-5'>Talwind Test</h1>

      <Card userName="Dhruv Senjaliya" btnText="Click Me"  />
      {/* <Card userName="Dhruv Patel" someObj={myArr} /> */}
      <Card userName="Dhruv Patel" />

    </>
  )
}

export default App
