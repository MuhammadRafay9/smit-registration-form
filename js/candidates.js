let candidates = [];

(()=>{

    let item = localStorage.getItem('candidates')
    if(item) candidates = JSON.parse(item);

    // let login_session = localStorage.getItem('loggedInUser');
    // if(login_session)
    // {
    //     window.location.href = './quiz.html'
    // }


})();


function submitF(e)
{
    e.preventDefault();

    
    var reader = new FileReader();

    let city = document.querySelector('#city').value;
    let course = document.querySelector('#course').value;
    let fullname = document.querySelector('#fullname').value;
    let fathername = document.querySelector('#fathername').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let cnic = document.querySelector('#cnic').value;
    let fcnic= document.querySelector('#fcnic').value;
    let dob = document.querySelector('#dob').value;
    let gender= document.querySelector('#gender').value;
    let address = document.querySelector('#address').value;
    let edu = document.querySelector('#edu').value;
    let picture = document.querySelector('#picture').value;

    
    if( 
        city
        &&course
        &&fullname
        &&fathername
        &&email
        &&phone
        &&cnic
        &&dob
        &&gender
        &&address
        &&edu
        &&picture
        )
        {
            
            picture = document.querySelector('#picture').files[0].name;
        
        reader.readAsDataURL(document.querySelector('#picture').files[0])


    reader.addEventListener('load' ,function(){
        if(this.result && localStorage)
        {
            let res =this.result;
            let cand = {

                city,
                course,
                fullname,
                fathername,
                email,
                phone,
                cnic,
                fcnic,
                dob,
                gender,
                address,
                edu,
                res

            }
            candidates.push(cand);
            


            window.localStorage.setItem('candidates',JSON.stringify(candidates));

            
            console.log('ok')
        }
        else
        {
            console.log('not ok')

        }

    })

window.location.reload();

    // reader.readAsDataURL(document.querySelector('#picture').files[0])
}

else
{
    alert('form can not be null')
}
}


