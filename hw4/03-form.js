// Add your code here
//const form = document.querySelector('form');
//console.log(form.elements[0].name + ': ' + form.elements[0].value);
//console.log(form.elements[1].name + ': ' + form.elements[1].value);
//    console.log(form.elements[5].name + ': ' + form.elements[5].value);

function myFunction(){

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let yes = document.getElementById("yes");
    let no = document.getElementById("no");
    let date = document.getElementById("date");
    
    if(username.value == '' && email.value == '' && password.value == '' 
    && yes.checked != true && no.checked != true && date.value == '')
        alert('You must enter some data to submit this form!')
    else
    {
        console.log('======== Form Subission ========')
        if(username.value != '')
        console.log(username.name + ': ' + username.value);
        else
            console.log(username.name + ': no submission');
    
        if(email.value != '')
            console.log(email.name + ': ' + email.value);
        else
            console.log(email.name + ': no submission');

        if(yes.checked == true)
            console.log('Newsletter: Yes');
        if(no.checked == true)
            console.log('Newsletter: No');
        if(yes.checked == false && no.checked == false)
            console.log('Newsletter: no submission');

        if(date.value != '')
            console.log(date.name + ': ' + date.value);
        else
            console.log(date.name + ': no submission');
    }    
    
}