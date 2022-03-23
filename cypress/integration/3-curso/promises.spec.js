
it("sem testes",()=>{})

const getSomething = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(134);
        }, 1000);
    })
 
}

const system=() =>{
    console.log('init');
    getSomething().then( some => {
        console.log(`Something is ${some}`)
        console.log('end')
    })
}


system();