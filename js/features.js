

document.getElementById("addMoney").addEventListener("click",function(){

    document.getElementById("add_i").classList.remove("hidden")
    document.getElementById("cash_i").classList.add("hidden")

})

document.getElementById("cashOut").addEventListener("click",function(){

    document.getElementById("cash_i").classList.remove("hidden")
    document.getElementById("add_i").classList.add("hidden")

})