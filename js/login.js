document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
     
     if(email === 'sazzad@gmail.com' && password === '12345'){
         window.location.href = 'bank.html'
        
     }
     else{
         alert('Please input valid email and password');
     }

 })