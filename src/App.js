import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NamesList from './components/NamesList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp';
import RefsComp from './components/RefsComp';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalsDemo from './components/PortalsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RPCounter from './components/RPCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import Todo from './components/Todo';
import Button from './components/button/button';
import OrderedList from './components/OrderedList';
import Login from './components/Login';


function App() {
  const todos=[
    {
      id:1,title:'Buy milk',completed:false
    },
    {
      id:2,title:'Buy coffee',completed:true
    }
  ]
  const list=['React','Jest','Enzyme']
  return (
       <div className="App">
         <header className="App-header">
         <Button label="clicke Me" />
         {
           todos.map(todo=>{
             return <Todo todo={todo} />
           })
         }
         <OrderedList options={list}/>
         <Login />
         {/* <Todo /> */}
         {/* <UserProvider value="Sanjana">
            <ComponentC />
         </UserProvider> */}
         {/* <RPCounter>{(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>}</RPCounter>
         <RPCounter>{(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}</RPCounter> */}
         {/* <ClickCounterTwo />
         <HoverCounterTwo /> */}
         {/* <User render={(isLoggedIn)=>isLoggedIn?"Sanjana":"Guest"} /> */}
         {/* <ClickCounter name="Sanjana"/>
         <HoverCounter /> */}
         {/* <ErrorBoundary>
         <Hero heroName="Batman" />
         </ErrorBoundary>
         <ErrorBoundary>
         <Hero heroName="Superman" />
         </ErrorBoundary>
         <ErrorBoundary>
         <Hero heroName="Joker" />
         </ErrorBoundary> */}
         {/* <PortalsDemo /> */}
         {/* <FRParentInput /> */}
         {/* <FocusInput /> */}
         {/* <RefsComp /> */}
         {/* <ParentComp /> */}
         {/* <Table /> */}
         {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
      <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NamesList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter />
      <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder woman"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana"heroName="Wonder woman"/>
      <Hello /> */}
      </header>
    </div>
    
  );
}

export default App;
