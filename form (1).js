const subButton = document.querySelector("#submit"); 
subButton.addEventListener("click", function(){

    window.location.href="thankyou.html";
});

function ckChange(el) {
    var ckName = document.getElementsByName(el.name);

    for (var i = 0, c; c = ckName[i]; i++)
 {
     c.disabled = !(!el.checked || c === el);
    }
  }


function ckDisable(el){
    var noSafety=document.getElementById("check13");
    
    if(el.checked)
    {
        if( !noSafety.disabled)
        {    
            noSafety.disabled = true;
            
        }
    }
    else{
        if(noSafety.disabled== true)
        {
            var flag=1;
        var ckName=document.getElementsByClassName("checkbox");
        for (var i = 0, c; c = ckName[i]; i++)
        {
            if(c.checked)
            {
                flag=0;
            }
        }
        if (flag==0){
            noSafety.disabled=true;
        }
        else{
            noSafety.disabled=false;
        }

    }
    }
}
