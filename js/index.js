document.querySelector(".confirm-btn").addEventListener("click", handleClick);
document.querySelector(".continue-btn").addEventListener("click", () =>{
    document.querySelector(".submit-form").classList.remove("submit-form-hide");
    document.querySelector(".thankyou-form-show").classList.add("thankyou-form-hide");
    document.querySelector("#cvc").value = '';
    document.querySelector("#month").value = '';
    document.querySelector("#year").value = '';
    document.querySelector("#name").value = '';
    document.querySelector("#card-number").value = '';
    document.querySelector(".cvv").innerText = '000';
    document.querySelector(".img-date").innerText = '00/00';
    document.querySelector(".img-name").innerText = 'Jane Appleseed';
    document.querySelector(".img-card-number").innerText = '0000 0000 0000 0000';

})

var numberOfInputs = document.querySelectorAll(".input").length;
var flag = true;

for(let i= 0 ;i < numberOfInputs ; i++){
    document.querySelectorAll(".input")[i].addEventListener("click", () =>{
        if(i == 3 || i==4){
            document.querySelectorAll(".error-msg")[i-1].classList.remove("error");
            document.querySelectorAll(".error-msg")[i-1].classList.add("error-hide");
        }else{
        document.querySelectorAll(".error-msg")[i].classList.remove("error");
        document.querySelectorAll(".error-msg")[i].classList.add("error-hide");
        
        }
    })
}


function handleClick(){
    
        if(!document.querySelector("#name").value){
           document.querySelector(".name-error").classList.add("error");
           document.querySelector(".name-error").classList.remove("error-hide");
            flag = false;
        }
        if(!document.querySelector("#card-number").value || document.querySelector("#card-number").value.length !=19 ){
            document.querySelector(".number-error").classList.add("error");
            document.querySelector(".number-error").classList.remove("error-hide");
            flag = false;
        }
        if(!document.querySelector("#month").value || document.querySelector("#month").value.length != 2 ){
            document.querySelector(".date-error").classList.add("error");
            document.querySelector(".date-error").classList.remove("error-hide");
            flag = false;
        }
        if(!document.querySelector("#year").value  || document.querySelector("#year").value.length != 2 ){
            document.querySelector(".date-error").classList.add("error");
            document.querySelector(".date-error").classList.remove("error-hide");
            flag = false;
        }
        if(!document.querySelector("#cvc").value  || document.querySelector("#cvc").value.length !=3){
            document.querySelector(".cvc-error").classList.add("error");
            document.querySelector(".cvc-error").classList.remove("error-hide");
            flag = false;
        }
       if(flag){
        changeDiv();
    }
}


function changeDiv(){
    document.querySelector(".submit-form").classList.add("submit-form-hide");
    document.querySelector(".thankyou-form-show").classList.remove("thankyou-form-hide");
    document.querySelector(".img-card-number").innerText = document.querySelector("#card-number").value;
    document.querySelector(".img-name").innerText = document.querySelector("#name").value;
    document.querySelector(".img-date").innerText = document.querySelector("#month").value + "/" + document.querySelector("#year").value;
    document.querySelector(".cvv").innerText=document.querySelector("#cvc").value;
}