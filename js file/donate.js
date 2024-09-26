
document.getElementById("donate-button").addEventListener("click", function(){
    
    let donateAmount =parseFloat (document.getElementById("donate-amount").value);
    let availableAmount = parseFloat(document.querySelector(".available-amount").innerText);
    let collectedAmount = parseFloat(document.getElementById("collected-amount").innerText);
    

    if (donateAmount <= 0 || isNaN(donateAmount) || donateAmount > availableAmount) {
        alert("Kindly, enter a valid amount please.");
        document.getElementById("donate-amount").value = "";
        return;
    }
    else {
        alert(`Thank you for your generous donation of $${donateAmount}.`);

        let remainAmount = availableAmount - donateAmount;
        let presentAmount = collectedAmount + donateAmount;
        
        document.querySelector(".available-amount").innerText = remainAmount;
        document.getElementById("collected-amount").innerText = presentAmount;
       
        document.getElementById("donate-amount").value = "";
    }
});


// Section 2 

document.getElementById("donate-button2").addEventListener("click", function(){
    
    let donateAmount =parseFloat (document.getElementById("donate-amount2").value);
    let availableAmount = parseFloat(document.querySelector(".available-amount").innerText);
    let collectedAmount = parseFloat(document.getElementById("collected-amount2").innerText);
    

    if (donateAmount <= 0 || isNaN(donateAmount) || donateAmount > availableAmount) {
        alert("Kindly, enter a valid amount please.");
        document.getElementById("donate-amount2").value = "";
        return;
    }
    else {
        alert(`Thank you for your generous donation of $${donateAmount}.`);

        let remainAmount = availableAmount - donateAmount;
        let presentAmount = collectedAmount + donateAmount;
        
        document.querySelector(".available-amount").innerText = remainAmount;
        document.getElementById("collected-amount2").innerText = presentAmount;
       
        document.getElementById("donate-amount2").value = "";
    }
});



// Section 3
document.getElementById("donate-button3").addEventListener("click", function(){
    
    let donateAmount =parseFloat (document.getElementById("donate-amount3").value);
    let availableAmount = parseFloat(document.querySelector(".available-amount").innerText);
    let collectedAmount = parseFloat(document.getElementById("collected-amount3").innerText);
    

    if (donateAmount <= 0 || isNaN(donateAmount) || donateAmount > availableAmount) {
        alert("Kindly, enter a valid amount please.");
        document.getElementById("donate-amount3").value = "";
        return;
    }
    else {
        alert(`Thank you for your generous donation of $${donateAmount}.`);

        let remainAmount = availableAmount - donateAmount;
        let presentAmount = collectedAmount + donateAmount;
        
        document.querySelector(".available-amount").innerText = remainAmount;
        document.getElementById("collected-amount3").innerText = presentAmount;
       
        document.getElementById("donate-amount3").value = "";
    }
});
 