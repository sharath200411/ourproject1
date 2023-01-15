const form = document.querySelector("#form");
const fusername= document.querySelector("#username");
const femail= document.querySelector("#email");
const fcoursename= document.querySelector("#coursename");
const fregnumber= document.querySelector("#regnumber");
//var bt = document.getElementsByClassName("btn")[0];


//preventing the form for loading  and submit
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    validate();
})

//validate email function
const isEmail=(emailval)=>
{
    var atSymbol =emailval.indexOf("@",0);
    if(atSymbol <2)
    {
        return false;
    }

    var dotSymbol = emailval.lastIndexOf(".");
    if(dotSymbol < atSymbol+5)
    {
        return false;
    }
    if (dotSymbol === emailval.length-1)
    {
        return flase
    }
    return true;

}

// setErrorMsg defined
function setErrorMsg(input,message)
{

    const formControl =input.parentNode;
    const small =formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=message;
}

// setSuccessMsg defined

function setSuccessMsg(input){
    const formControl =input.parentNode;
    formControl.className="form-control success";
}

//isPass is defined

function isPass(pass)
{
    var specialCharec=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pass.match(specialCharec))
    {
        return true;
    }
    else
    {
        return false;
    }
}

// sendData defined
function sendData(sRate,count,fusernameVal)
{
    if(sRate === count)
    {
        swal("Good job! Welcome! " + fusernameVal, "Registration Successful", "success");
        location.href=`index1.html?username=${fusernameVal}`;
    }
}

//final data validation
const successMsg =(fusernameVal)=>{
    let formCon =document.getElementsByClassName("form-control");
    var count = formCon.length-1;
    for(var i=0;i<formCon.length;i++)
    {
        if(formCon[i].className === "form-control success")
        {
            var sRate=0+i;
            console.log(sRate);
            sendData(sRate,count,fusernameVal);
        }
        else
        {
            return false;
        }
    }
}

// making validate function
function validate()
{
    const fusernameVal=fusername.value.trim();
    const femailVal= femail.value.trim();
    const fcoursenameVal=fcoursename.value.trim();
    const fregnumberVal=fregnumber.value.trim();

    
    //validate username

    if(fusernameVal === "")
    {
        setErrorMsg(fusername, "username cannot be blank");
    }
    else if(fusernameVal.length <= 3)
    {
        setErrorMsg(fusername, "username length should be four");
    }
    else{
        setSuccessMsg(fusername);
    }


        //validate email

        if(femailVal === "")
        {
            setErrorMsg(femail, "email cannot be blank");
        }
        else if(!isEmail(femailVal))
        {
            setErrorMsg(femail, "email is not vaild");
        }
        else{
            setSuccessMsg(femail);
        }


        //validate course

        if( fcoursename === "")
        {
            setErrorMsg( fcoursename, "course name cannot be blank");
        }
        else if(fcoursenameVal.length <=2 )
        {
            setErrorMsg(fcoursename, "course name is not vaild");
        }
        else{
            setSuccessMsg(fcoursename);
        }

        //validate regno

        if( fregnumber === "")
        {
            setErrorMsg( fregnumber, "reg number cannot be blank");
        }
        else if(fregnumberVal.length <=9 )
        {
            setErrorMsg(fregnumber, "reg number is not vaild");
        }
        else{
            setSuccessMsg(fregnumber);
        }
         
        successMsg(fusernameVal);
        

}

