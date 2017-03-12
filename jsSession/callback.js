// Waits 1000 milliseconds, then call function
setTimeout(
  function(){
    alert('hello!');
  },
  1000
);

function countDown(count){
  var display = count;
  for(var i=count; i >= 0; i--){
    setTimeout(function(){
      console.log(display--);
    }, (count-i)*1000);
  }
}

countDown(6);
