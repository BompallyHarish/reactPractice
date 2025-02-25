function Hello(){

    let name="Harish"
    let testFxn = ()=>{
        return "creating a dynamic component in React"
    }
    return <p>Hello Everyone, this is {name} and I am {testFxn()}</p>
}

export default Hello