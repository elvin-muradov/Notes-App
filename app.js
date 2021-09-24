const bodyText = document.querySelector('textarea');
const editBtn = document.querySelector('.fa-edit');
const confirmBtn = document.querySelector('.fa-check');
const trashBtn = document.querySelector('.fa-trash');
const newBodyText = document.querySelector('.body-text');

confirmBtn.addEventListener('click', function(e) {
    if(bodyText.value != ""){
      newBodyText.innerHTML = bodyText.value;
      bodyText.style.display = "none";
      newBodyText.style.display = "block";
    }else {
      alert('Write Something !')
    }
});

editBtn.addEventListener('click',function(){
  bodyText.style.display = "block";
  newBodyText.style.display = "none";
});

trashBtn.addEventListener('click',function(){
  bodyText.value = " ";
  newBodyText.innerHTML = " ";
  bodyText.style.display = "block";
  newBodyText.style.display = "none";
})

