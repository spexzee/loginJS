//*******************  Variable declarations  *******************
let passBlock = document.querySelector('#sign-up');
let signUp = document.querySelector('.sign-up');
let signUpBtn = document.querySelector('#sign-up-btn');
let logInBtn = document.querySelector('#button');
let forget = document.querySelector('#forget');
let login = document.querySelector('.login');

//*******************  when u click on 'New-User? Sign-Up.' button  *******************
signUp.addEventListener('click', () => {
    if(passBlock.classList.contains('pass')){
        passBlock.classList.add('active');
        passBlock.classList.remove('display');
        logInBtn.classList.add('display');
        logInBtn.classList.remove('active');
        signUpBtn.classList.add('active');
        signUpBtn.classList.remove('display');
        forget.classList.add('display');
        forget.classList.remove('active');
        signUp.classList.add('display');
        signUp.classList.remove('active');
        login.classList.add('active');
        login.classList.remove('display');  
    }
});
//*******************  when u click on 'Sign In.' button  *******************
login.addEventListener('click' ,() => {
    if(passBlock.classList.contains('pass')){
        passBlock.classList.remove('active');        
        passBlock.classList.add('display');
        logInBtn.classList.remove('display');
        logInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
        signUpBtn.classList.add('display');
        forget.classList.add('active');
        forget.classList.remove('display');
        login.classList.add('display');
        login.classList.remove('active');
        signUp.classList.add('active');
        signUp.classList.remove('display');
}
});

//*******************  Forget Password  *******************
forget.addEventListener('click', ()=>{
    alert('BC 🤬 Tumhe Yaad Rakna chayiye tha na , Maibi bhul chuka hoon 🤔, Mujhe Malumich Nhi hai , Tu hi Kuch karle.')
})



//*******************  validation check  *******************
// let username = document.querySelector('#username').Value;
// let password = document.querySelector('#pass-word').Value;

//logInBtn.addEventListener('click', function run(){
//})------> we can write like this also

// logInBtn.addEventListener('click',()=> {
// if(username=="Admin" && password=="Spexzee"){
//     alert('Log In  Hua');
//     return false;
// }else{
//     alert('Login Failed')
// }
// });










