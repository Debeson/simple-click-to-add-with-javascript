 let count = 0;
let autoCount;
let number;

// increase count when the plus + button is clicked and uppdate the even and odd number
function increaseCount(){

    if (count < 10){
        count++;
        document.getElementById("count").innerHTML = count;
        checkEvenOdd();

    }else {
        alert(`you have reach the maximum count of ${count}`);
    }  
}

// decrease count when the plus - button is clicked and uppdate the even and odd number
function decreaseCount(){

    if (count > 0){
        count--;
        document.getElementById("count").innerHTML = count;
        checkEvenOdd();

    }else {
        alert(`cannot go lower than ${count}`);
    }
}

// reset the count to zero 
function reset(){
    
    count = 0;
    document.getElementById("count").innerHTML = count;
}

// auto increse the count every 2 seconds
function autoIncrease(){
    clearInterval(autoCount);
    count = 0;

    autoCount = setInterval(autoadd, 2000)
    document.getElementById("count").innerHTML = count;
}

//calls the increase fnction and check for max range then clear the interval
function autoadd(){
    increaseCount();

    if(count >= 10){
        clearInterval(autoCount);
    }
    
}


// check if he value of count is even or odd number
function checkEvenOdd(){
    
    if(count % 2 === 0){
        number = "Even number";
        document.getElementById("number").innerHTML = number;
    }else{
        number = "Odd number"
        document.getElementById("number").innerText = number
    }
}





// toogle between light and dark theme
function setTheme(theme){
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

document.getElementById("toggle-button").addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
});

setTheme(localStorage.getItem("theme") || "light");