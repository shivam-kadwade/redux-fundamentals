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

const createStore = (reducer) =>{
    let state;
    let listeners = []

    const dispatch = (action)=>{
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    const getState = () => state
    const subscribe = (listener) =>{
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l=> l!==listener)
        }
    }
    dispatch({})
    return {dispatch, getState, subscribe}
}

const store = createStore(counter);

const render = () => {
    document.body.innerHTML = store.getState()
}

store.subscribe(render);
render();

document.body.addEventListener('click',()=>{
    store.dispatch({ type: 'INCREMENT'})
})