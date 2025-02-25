function Random (){
    let randomNumber = parseInt(Math.random()*100)

    return <h3>This component is reusable one and generating random number : {randomNumber}</h3>
}

export default Random