function OnSubmit(){
    const Name = document.getElementById("Name");
    const Email = document.getElementById("email");
    const yourMessage = document.getElementById("message");

    if(Name.value.trim() == "")
    {
        alert("Kindly fill in your name");
    }

    else if(Email.value.trim() == "")
    {
        alert("Kindly fill in your email");
    }

    else if(yourMessage.value.trim() == "")
    {
        alert("Kindly fill in the message");
    }

    else{
        alert(Name.value+" we have received your message. Thank you for reaching out to us.");        
    }
}