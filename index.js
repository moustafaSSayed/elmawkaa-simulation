/* this elements is for coordinating the 4 forms together using the (next & previous buttons) 
   for every form there is 2 buttons : one for next and the other for previous */
let previous1=document.getElementById("form1Previous");
let next1=document.getElementById("form1Next");
let previous2=document.getElementById("form2Previous");
let next2=document.getElementById("form2Next");
let previous3=document.getElementById("form3Previous");
let next3=document.getElementById("form3Next");
let previous4=document.getElementById("form4Previous");
let next4=document.getElementById("form4Next");
/* here are the 4 forms (only one form can appear at a time) */
let Form1=document.getElementById("formOne");
let Form2=document.getElementById("formTwo");
let Form3=document.getElementById("formThree");
let Form4=document.getElementById("formFour");
/* there are the buttons up that acknowledge the user at which form he is */
let item1=document.getElementById("icon1");
let item2=document.getElementById("icon2");
let item3=document.getElementById("icon3");
let item4=document.getElementById("icon4");
/* here's the first action taken 
    (when the user press next the code check 
    the validation of the first form and if it's valid
    the button move to the second form )  */
next1.onclick = function() {
    /* validating the 1st form */
    let needed =document.getElementById("form1Required");
    /* making sure that the 2nd input area isn't empty */
    if(needed.value === "" || needed.value <= 20  ) {
        document.getElementById("required1").style.display = "block";
    }
    else { 
        /* changing the 2nd form to be shown and the 1st form to be hidden */
        next2.style.display = "block";
        previous2.style.display = "block";
        Form1.style.display = "none";
        next1.style.display = "none";
        previous1.style.display = "none";
        Form2.style.display = "block";
        /* changing the color of the 2nd button and also to the 1st button */
        item2.style.color = "#FFF";
        item2.style.backgroundColor ="#935cae";
        item1.style.backgroundColor =" #6610f2";
        /* hiding the 3rd and 4th forms buttons */
        next3.style.display = "none";
        previous3.style.display = "none";
        next4.style.display = "none";
        previous4.style.display = "none";
        document.getElementById("required1").style.display = "none";
    }
}
/* when the user click previous 2 it's gonna open form1 and close form2
   with all it's buttons */
previous2.onclick = function() {
    /* veiwing form1 and it's button & hiding form2 and everything else*/
    Form1.style.display = "block";
    Form2.style.display = "none";
    next2.style.display = "none";
    previous2.style.display = "none";
    next1.style.display = "block";
    previous1.style.display = "block";
    Form3.style.display = "none";
    next3.style.display = "none";
    previous3.style.display = "none";
    next4.style.display = "none";
    previous4.style.display = "none";
}
/* when the user press next2 it should open the 3rd form and its buttons
    & hid everything else  */
next2.onclick = function() {
    /* validating the 2nd form */
    let needed1 =document.getElementById("form2Input1");
    let needed2 =document.getElementById("form2Input3");
    let needed3 =document.getElementById("form2Input2");
    let needed4 =document.getElementById("form2Input4");
    /* making sure that the first input is not empty */
    if(needed1.value === "اختر مكان المشروع") {
        document.getElementById("required21").style.display = "block";
    }
    /* making sure that the 2nd input is not empty */
    else if(needed2.value === "") {
        document.getElementById("required21").style.display = "none";
        document.getElementById("required23").style.display = "block";
    }
    /* making sure that the 3rd input is not empty */
    else if(needed3.value === "") {
        document.getElementById("required21").style.display = "none";
        document.getElementById("required23").style.display = "none";
        document.getElementById("required22").style.display = "block";
    }
    /* making sure that the 4th input is not empty */
    else if(needed4.value === "") {
        document.getElementById("required21").style.display = "none";
        document.getElementById("required23").style.display = "none";
        document.getElementById("required24").style.display = "none";
        document.getElementById("required24").style.display = "block";
    }
    else { 
        /* veiwing form3 and its buttons & hiding everything else */
        Form2.style.display = "none";
        Form3.style.display = "block";
        item3.style.color = "#FFF";
        item3.style.backgroundColor ="#935cae";
        item2.style.backgroundColor =" #6610f2";
        next3.style.display = "block";
        previous3.style.display = "block";
        next2.style.display = "none";
        previous2.style.display = "none";
        Form1.style.display = "none";
        next1.style.display = "none";
        previous1.style.display = "none";
        next4.style.display = "none";
        previous4.style.display = "none"
        document.getElementById("required21").style.display = "none";
        document.getElementById("required23").style.display = "none";
        document.getElementById("required24").style.display = "none";
        document.getElementById("required22").style.display = "none";
    }
    
}
/* when the user press previous3 the 2nd form is shown and its buttons & 
    hiding everything else  */
previous3.onclick = function() {
    /* showing form2 and its buttons & 
    hiding everything else */
    Form1.style.display = "none";
    Form2.style.display = "block";
    next2.style.display = "block";
    previous2.style.display = "block";
    next1.style.display = "none";
    previous1.style.display = "none";
    item2.style.color = "#FFF";
    item2.style.backgroundColor ="#935cae";
    item1.style.backgroundColor =" #6610f2";
    Form3.style.display = "none";
    Form4.style.display = "none";
    next3.style.display = "none";
    previous3.style.display = "none";
    next4.style.display = "none";
    previous4.style.display = "none";
    
}
/* when the user press next3 the 4th form is shown and its buttons & 
    hiding everything else  */
next3.onclick = function() {
    /* showing form4 and its buttons & 
    hiding everything else */
    Form4.style.display = "block";
    Form3.style.display = "none";
    item4.style.color = "#FFF";
    item4.style.backgroundColor ="#935cae";
    item3.style.backgroundColor =" #6610f2";
    next4.style.display = "block";
    previous4.style.display = "block";
    next2.style.display = "none";
    previous2.style.display = "none";
    next3.style.display = "none";
    previous3.style.display = "none";
    Form1.style.display = "none";
    next1.style.display = "none";
    previous1.style.display = "none";
    
}
/* when the user press previous4 the 3rd form is shown and its buttons & 
    hiding everything else  */
previous4.onclick = function() {
    /* showing form3 and its buttons & 
    hiding everything else */
    Form3.style.display = "block";
    Form2.style.display = "none";
    Form4.style.display = "none";
    item3.style.color = "#FFF";
    item3.style.backgroundColor ="#935cae";
    item2.style.backgroundColor =" #6610f2";
    next3.style.display = "block";
    previous3.style.display = "block";
    next2.style.display = "none";
    previous2.style.display = "none";
    Form1.style.display = "none";
    next1.style.display = "none";
    previous1.style.display = "none";
    next4.style.display = "none";
    previous4.style.display = "none";
    
}
/* validating the 4th form before submitting */
next4.onclick = function() {
    let needed1 =document.getElementById("input41");
    let needed2 =document.getElementById("input42");
    let needed3 =document.getElementById("input43");
    let needed4 =document.getElementById("input44");
    /* making sure that the 1st input isn't empty */
    if(needed1.value === "") {
        document.getElementById("required41").style.display = "block";
    }
    /* making sure that the 2nd input isn't empty */
    else if(needed2.value === "") {
        document.getElementById("required41").style.display = "none";
        document.getElementById("required42").style.display = "block";
    }
    /* making sure that the 3rd input isn't empty */
    else if(needed3.value === "" || needed3.value.length !== 11) {
        document.getElementById("required41").style.display = "none";
        document.getElementById("required42").style.display = "none";
        document.getElementById("required43").style.display = "block";
    }
    /* making sure that the 4th input isn't empty */
    else if(needed4.value === "") {
        document.getElementById("required41").style.display = "none";
        document.getElementById("required42").style.display = "none";
        document.getElementById("required43").style.display = "none";
        document.getElementById("required44").style.display = "block";
    }
    /* submitting the 4th form done successfully */
    else {
        document.getElementById("required41").style.display = "none";
        document.getElementById("required42").style.display = "none";
        document.getElementById("required43").style.display = "none";
        document.getElementById("required44").style.display = "none";
    }
}