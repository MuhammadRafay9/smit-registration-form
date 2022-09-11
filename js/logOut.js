(()=>{

    check = localStorage.getItem('loggined');
    
    if(!check) window.location.href = './index.html';
    // {
    //   window.location.href = './list.html';
        
    // }  
    // else
    // {
    // window.location.href = './login.html';

    // }

    


})()

function logOut()
{
    localStorage.removeItem('loggined');
    window.location.href = './index.html'
}

