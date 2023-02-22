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

const Counter = ({value})=>{
    return(
        <div>{value}</div>
    );
};

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}/>,
        document.getElementById('root')
    )
}

store.subscribe(render);
render();