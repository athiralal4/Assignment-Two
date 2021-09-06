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



   
