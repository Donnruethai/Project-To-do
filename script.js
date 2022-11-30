const form=document.getElementById('form');
const taskname=document.getElementById('taskname');
const description=document.getElementById('description');
const assignedto=document.getElementById('assignedto');
const duedate=document.getElementById('duedate');
const status=document.getElementById('status');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput([taskname,description,assignedto]);
    
});

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';       
}

function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() ===''){
            showerror(input,'Must not be empty!');
        }else{
            showsuccess(input);
        }
    });
}