function myFunction() {
    event.preventDefault()
    const email = document.getElementById("email").value
    const sub = document.getElementById("sub").value
    const mess = document.getElementById("mess").value
    // const data = { "Email": email, "sub": sub, "Message": mess }
    const data = { email, sub, mess }
    // console.log(data);
    fetch('https://send-mail-server.onrender.com/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            if(data === true){
                alert('Message sent successfully')
            }
            else{
                alert('Unsent')
            }
            // console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
