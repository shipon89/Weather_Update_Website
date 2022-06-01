var mysql = require('mysql');

function setFormMessage(formElement,type,message){
    const messageElement=formElement.querySelector(".form__message");

    messageElement.textContent=message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add('form__message--${type}');
}
function setInputError(inputElement,message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent=message;
}
function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent="";
}

document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.querySelector("#login");
    const createAccountForm=document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registration"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})
  //Insert a record in the "registration" table:
  applicationCache.post('/submit',function(req,res){
      console.log(req.body); 
  })
  var sql = "insert into registration values(username,email,password)";
  connection.query(sql, function (err) {
    if (err) throw err;
    res.render('index',{title:'Data saved',message:'Data Saved Successfully'})
   
  })
  coonnection.end();
});

    document.querySelector("#linkLogin").addEventListener("click",e=>{
         e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginForm.addEventListener("submit",e => {
        e.preventDefault();
        //Perform your ajax/fetch login
        setFormMessage(loginForm,"error","Invalid username/password combination")
    });
    document.querySelectorAll(".form__input").forEach(inputElement=>{
        inputElement.addEventListener("blur",e=>{ 
            if(e.target.id==="signupUsername" && e.target.value.length>0 && e.target.value.length<10){
                setInputError(inputElement,"Username must be at least 10 characters in length")
            }
        });
        inputElement.addEventListener("input",e=>{
            clearInputError(inputElement);
        });
    });
});