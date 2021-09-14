const formId = "save-later-form"; 
const url = location.href; 
const formIdentifier = `${url} ${formId}`; 
const saveButton = document.querySelector("#save"); 
const subButton = document.querySelector("#submit1"); 
let form = document.querySelector(`#${formId}`); 
let formElements = form.elements; 

//Getdata
const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements)
	{if (element.name.length > 0 && element.name != "gender") 
		{ data[formIdentifier][element.name] = element.value;}
	}return data;
  };


function checkEmail(){
  var email= document.getElementById("email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat))
  {return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  return false;
  }
  
}

function checkPass(){
  var pass = document.getElementById("pass");
  var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
  if(pass.value.match(passformat))
  {return true;
  }
  else
  {
  alert("You have entered an invalid password!");
  return false;
  }
  
}

function checkMob(){
  var mob = document.getElementById("mob");
  var mobformat = /(7|8|9)\d{9}/;
  if(mob.value.match(mobformat))
  {return true;
  }
  else
  {
  alert("You have entered an invalid mobile number!");
  return false;
  }


}

function checkValidate(){
  var flag=0;
  for (const element of formElements)
  {  
    if (element.value.length ==0 && element.name != "submit" && element.name!="reset" && element.name!="gender"){
      console.log(element.name);

      alert(element.name +" is missing!");
      flag=1;
    } }
      
      var radios=document.getElementsByName("gender");
     
      if (!(radios[0].checked || radios[1].checked || radios[2].checked)) {
          alert("Gender is missing");
          flag=1;
      } 
  if(flag==0){
    return true;
  }else{
    return false;
  }
}
  
//Onsubmit
subButton.addEventListener("click", function()
 {
  if (checkValidate()==true ) {
  
     if(checkEmail()==true && checkPass()==true && checkMob()==true){
       console.log("true");
  
	if (saveButton.checked == true)
  { 
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));   
   
   const radios =  document.getElementsByName("gender");
           for(var i =0; i<radios.length;i++)
		{
            if (radios[i].checked == true)
			{
			   localStorage.setItem('gender',radios[i].value);
            }
        }window.location.href="thankyou.html";
  }
  else
   { localStorage.clear(); }
}}
else{
  event.preventDefault();
}
 });
   
   

//onload
const populateForm = () => {
	if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); 
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
		}
    }}
	
  	var radios = document.getElementsByName("gender");
    var a = localStorage.getItem('gender');
    for(var i=0;i<radios.length;i++){
        if(radios[i].value == a){
            radios[i].checked = true; 
  }
}
};

document.onload = populateForm(); 
  
