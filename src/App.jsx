import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Button2 from "./Button2.jsx"
import Student from "./student.jsx"
import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <Card/>
      <Header/>
      <Food/>
      <Button/>
      <Button2/>
      <Student name="John" age={30} isStudent={true}/>
      <Student name="Jane" age={25} isStudent={false}/>
      <Student name="Bob" age={40} isStudent={true}/>
      <Student name="Alice" age={35} isStudent={false}/>
      <Student/>
      <UserGreeting isLoggedIn={true} username="GabbenPapa"/>
      <Footer/>
    </>
  );


} 

export default App

