
const addCounter = (list) =>{
    list.push(0)
    return list
}

const removeCounter = (list, index) =>{
    return list.slice(0,index).concat(list.slice(index+1))
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
console.log("All tests passed!")