import {useSelector, useDispatch, useStore} from 'react-redux'
import classes from './Counter.module.css';
import {counterActions} from '../store/index'
const Counter = () => {


  const store = useStore();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();


  const incrementHandler = ()=>{

    dispatch(counterActions.increment())
  };

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  };

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {

    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>} 
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {increaseHandler}>increase</button>
        <button onClick = {decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
