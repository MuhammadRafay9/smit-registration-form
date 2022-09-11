let city = document.querySelector('#city');
let course = document.querySelector('#course');
let fullname = document.querySelector('#fullname');
let fathername = document.querySelector('#fathername');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let cnic = document.querySelector('#cnic');
let fcnic= document.querySelector('#fcnic');
let dob = document.querySelector('#dob');
let gender= document.querySelector('#gender');
let address = document.querySelector('#address');
let edu = document.querySelector('#edu');
// let picture = document.querySelector('#picture').files[0].name;

let cand ='';
let list ='';
let single = '';
(()=>{


cand = localStorage.getItem('editcand');
list = JSON.parse(localStorage.getItem('candidates'));
single = list[cand];
console.log(single, list, cand);

if(single && list && cand) 
{
    // window.location.href = './list.html';
}
else
{
    window.location.href = './list.html';
}
city.value = single.city
course.value = single.course
fullname.value = single.fullname
fathername.value = single.fathername
email.value = single.email
phone.value = single.phone
cnic.value = single.cnic
fcnic.value = single.fcnic
dob.value = single.dob
gender.value = single.gender
address.value = single.address
edu.value = single.edu


})();

function updateCand(e)
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
let picture = document.querySelector('#picture').files[0].name;


reader.readAsDataURL(document.querySelector('#picture').files[0])


reader.addEventListener('load' ,function(){
if(this.result && localStorage)
{
let res =this.result;
let newDetail = {

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
list[cand] = newDetail;



window.localStorage.setItem('candidates',JSON.stringify(list));


console.log('ok')
}
else
{
console.log('not ok')

}

})


localStorage.removeItem('editcand')
window.location.href = './list.html';
// reader.readAsDataURL(document.querySelector('#picture').files[0])
}



