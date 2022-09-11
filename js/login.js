let user = document.querySelector('#form3Example3')
let pass = document.querySelector('#form3Example4')
let item ;

(()=>{

    localStorage.setItem('admin',JSON.stringify({user:'admin',pass:'123456'}))

    item = JSON.parse(localStorage.getItem('admin'));

    user.value = item['user']
    pass.value = item['pass']

    check = localStorage.getItem('loggined');
    
    if(check)  window.location.href = './list.html';
    


})()


function loginUser() {

    let msg = document.querySelector('#msg')
    // e.preventDefault();

    if(user.value && pass.value)
    {
        if(item['user'] === user.value)
        {
            if(item['pass'] === pass.value)
            {
                localStorage.setItem('loggined', item['user']);

                window.location.href = './list.html';
            }

        }
        else
        {

        msg.innerText = 'User not found';

            
        }

    }
    else
    {
        msg.innerText = 'form can not be null'
    }

    
}