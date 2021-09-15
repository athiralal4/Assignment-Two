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



function checkAll(){
  var flag=0;
  for (const element of formElements){
  if(element.name !="gender" && element.name != "submit" && element.name!="reset" && element.name !="date of birth" && element.name !="save" && element.name !="address" ){
  var mobformat = new RegExp(document.getElementById(element.name).pattern);
  if( !element.value.match( mobformat ) )
  {  alert("You have entered an invalid "+ element.name+ "!");
flag=1;
  }
  }}
  if (flag==1){return false;}

  else{return true;}
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
subButton.addEventListener("click", function(event)
 {
  if (checkValidate()==true ) {
  
   
      if(checkAll() == true){
       
  
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
}
else event.preventDefault();
}
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

