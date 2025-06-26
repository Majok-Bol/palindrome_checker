console.log("It is working");

const result = document.getElementById("result");
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
  const input = textInput.value.trim();

  if (input === "") {
    result.textContent='Please input a value';
    result.style.color='red';
    return;

  }

  // Normalize: remove non-alphanumeric characters and make lowercase
  const cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanInput.split("").reverse().join("");

  if (cleanInput === reversed) {
    result.textContent = `${input} is a palindrome`;
      result.style.color='';
    
     
    
  } else {
    result.textContent = `${input} is not a palindrome`;
      result.style.color='';
  }
  textInput.value="";

});
