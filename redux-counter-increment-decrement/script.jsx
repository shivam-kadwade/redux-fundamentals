const counter = (state=0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

const createStore = Redux.createStore
const store = createStore(counter);

const Counter = ({value, onIncrement, onDecrement})=>{
    return(
        <div>
        <div>{value}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        </div>
    );
};

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()} onDecrement={()=> store.dispatch({type:'DECREMENT'})} onIncrement={()=> store.dispatch({type:'INCREMENT'})}/>,
        document.getElementById('root')
    )
}

store.subscribe(render);
render();