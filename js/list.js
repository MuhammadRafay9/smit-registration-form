
(()=>{
    localStorage.removeItem('editcand');
})()


let list = document.querySelector('#list')
        

let item = JSON.parse(localStorage.getItem('candidates'));
createList()

function createList()
{
    let html= '';
    
    if(item)
    {

        list.innerHTML = html;
        
        html += `
        <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>CNIC</th>
    <th>Father Name</th>
    <th>Father CNIC</th>
    <th>City</th>
    <th>action</th>
   </tr>`

for (let index = 0; index < item.length; index++) {
    
//    var imgs= new Image();
   
//    imgs.src =item[index]['res']

html += `
    
    
    
    <tr >`;
        // if(item[index][res]){
            //     html += `<td style=""> <img src=""> item[index]  </td>`;    

        // }   
        // else
        // {
            html += `
            <td id='img${index}' style=""></td>
            <td style=""> ${item[index]['fullname']} </td>
            <td style=""> ${item[index]['cnic']} </td>
            <td style=""> ${item[index]['fathername']} </td>
            <td style=""> ${item[index]['fcnic']} </td>
            <td style=""> ${item[index]['city']} </td>
            <td style=""> <button class="btn btn-success" onclick="EditCandidates(${index})">Edit</button> <button class="btn btn-danger" onclick="delCandidates(${index})">Delete</button></td>
            </tr>
            `;    

        // } 
        
        // document.querySelector('#img'+index).appendChild(imgs);

    
}

list.innerHTML = html;


for (let index = 0; index < item.length; index++) {
    
    var imgs= new Image();
    
    imgs.src =item[index]['res']

    imgs.style.height = '100px';
    imgs.style.width = '200px';
    document.querySelector('#img'+index).appendChild(imgs);
}
}
else
{
    list.innerHTML = html;
        
        html += `
        <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>CNIC</th>
    <th>Father Name</th>
    <th>Father CNIC</th>
    <th>City</th>
    <th>action</th>
    </tr>
    <tr>
    <td colspan='7' style="text-align:center">Record not found</td>
    </tr>
    `

    list.innerHTML = html;

}

}
function EditCandidates(num) {
    
    localStorage.setItem('editcand',num);
    window.open('./edit.html','_new')
    
}
// var a;
function delCandidates(num) {


    item.splice(num, 1);
    window.localStorage.setItem('candidates',JSON.stringify(item));
    // alert(num)
    // console.log(
    event.target.parentNode.parentNode.remove();
        //)
    
    //.remove();
    createList()
    
}

