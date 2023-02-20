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


const createStore = Redux.createStore;

const store = createStore(counter);

const render = () => {
    document.body.innerHTML = store.getState()
}

store.subscribe(render);
render();

document.body.addEventListener('click',()=>{
    store.dispatch({ type: 'INCREMENT'})
})