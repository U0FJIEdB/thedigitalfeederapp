function contact(){
    const contactForm=document.querySelector('#contactForm')
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let message=document.getElementById('message')
    
    contactForm.addEventListener('submit',(e)=>{
        e.preventDefault()

        let formData={
            name: name.value,
            email: email.value,
            message: message.value,
        }
        //console.log(formData)
        let xhr=new XMLHttpRequest()
        xhr.open('POST','/report')
        xhr.setRequestHeader('content-type','application/json')
        xhr.onload=function(){
            //console.log(xhr/this.responseText)
            if(xhr.responseText=="success"){
                alert("Email Sent Successfully")
                name.value=''
                email.value=''
                message.value=''
                window.location.href = '/thanks'
            }else{
                alert("something went wrong")
            }
        }
        xhr.send(JSON.stringify(formData))
    })
}
