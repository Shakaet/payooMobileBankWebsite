

document.getElementById("btn-add-money").addEventListener("click",function(event){
      
    event.preventDefault()
    let add=document.getElementById("add").innerText
    let amount=document.getElementById("text-add").value
    let pin=document.getElementById("pin-add").value
    // console.log(amount,pin)
   
    if(pin ==="555"){

        let newAmount=Number(add)+Number(amount)
        console.log(newAmount)

        document.getElementById("add").innerText=newAmount
          


    }

})

document.getElementById("btn-del-money").addEventListener("click",function(event){
      
    event.preventDefault()
    let add=document.getElementById("add").innerText
    let amount=document.getElementById("text-del").value
    let pin=document.getElementById("pin-del").value
    // console.log(amount,pin)
   
    if(pin ==="555"){

        if(Number(add)>=Number(amount)){
            let newAmount=Number(add)-Number(amount)
            console.log(newAmount)
            document.getElementById("add").innerText=newAmount


        }
        else{
            alert("you cant to do Cash Out")
        }


          


    }

})