// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",addtowallet)
function addtowallet(){
    event.preventDefault()
    let x=document.getElementById("amount").value;
    // localStorage.setItem("money",x);
   let j= localStorage.setItem("amount",x)
}