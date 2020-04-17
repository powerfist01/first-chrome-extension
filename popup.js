document.addEventListener('DOMContentLoaded',function(){
    console.log('Yay! DOM Loaded Sucessfully.')
    var button = document.getElementById("changeColor");
    button.addEventListener('click',function(){
        chrome.tabs.getSelected(null,function(tab){
            alert('Hey there!!! This is my first chrome extention');
        })
    },false);
},false);