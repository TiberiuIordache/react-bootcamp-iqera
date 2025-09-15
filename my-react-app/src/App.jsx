import Hello from './components/Hello'
import UserCard from './components/UserCard'
import ClickButton from './components/ClickButton';
import Contatore from './components/Contatore';
import Car from './components/Car';
import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';
import AuthPanel from './components/AuthPanel';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <Hello/>
      <ClickButton/>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <UserCard name="John" lname="Doe" age="30" email="test@email.it" address="via delle ciliegie" phone="12345566"/>
        <UserCard name="Jane" lname="Smith" age="25" email="test@email.it" address="123 Main St" phone="555-1234"/>
        <UserCard name="Alice" lname="Johnson" age="28" email="test@email.it" address="456 Oak Ave" phone="555-5678"/>
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Contatore/>
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Car/>
        <LoginForm/>
        <ContactForm/>
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <AuthPanel/>
        <UserList/>
      </div>
    </>
  )
}

export default App;
