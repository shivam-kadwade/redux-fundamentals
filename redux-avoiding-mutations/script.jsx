
const addCounter = (list) =>{
    list.push(0)
    return list
}

const removeCounter = (list, index) =>{
    return [...list.slice(0,index),...list.slice(index+1)]
}

const incrementCounter = (list, index)=>{
return [...list.slice(0,index), list[index] +1, ...list.splice(index+1)]
}

const testAddCounter = ()=>{
    const listBefore = []
    const listAfter = [0]

    expect(addCounter(listBefore)).toEqual(listAfter)
}
testAddCounter()

const testRemoveCounter = ()=>{
    const listBefore = [1,10,11]
    const listAfter = [1,11]

    expect(removeCounter(listBefore,1)).toEqual(listAfter)
}
testRemoveCounter()

const testIncrementCounter = ()=>{
    const listBefore = [1,10,22]
    const listAfter = [1,11,22]

    expect(incrementCounter(listBefore,1)).toEqual(listAfter)
}
testIncrementCounter()

console.log("All tests passed!")