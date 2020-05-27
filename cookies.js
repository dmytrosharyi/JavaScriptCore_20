function addToLocalStorage(key, value){
  if(value === undefined){
    localStorage.removeItem('key');
  }else{
    localStorage.setItem(key, JSON.stringify(value));
  }
}

$('#button1').click(function(){
  var userData = {
    name: $('#userName').val(),
    age: $('#userAge').val()
  };
  if(userData.age >= 1 && userData.age <= 100){
    addToLocalStorage('Your Data', userData);
  }else{alert('wrong data');}
})

function setCookie(name, value, daysToLive){
  var data = JSON.stringify(value);
  var cookieString = name + '=' + encodeURIComponent(data);
  if(typeof daysToLive==='number'){
    cookieString + 'max-edge' + (daysToLive*60*60*24);
  }
  document.cookie = cookieString;
}

$('#button2').click(function(){
  var userData = {
    name: $('#userName').val(),
    age: $('#userAge').val()
  };
  if(userData.age >= 1 && userData.age <= 100){
    setCookie('Your Data', userData, 5);
  }else{alert('wrong data');}
})