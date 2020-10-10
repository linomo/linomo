var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello 爾康';
var mybody=document.querySelector('p');
/*let myv='cat';
mybody.textContent=myv;*/
var love_v=0;
var met=document.getElementById('me')

var bnv = document.getElementById('NO'); 
var byv = document.getElementById('YES'); 
function udis()
{
    by.disabled=false;
    bn.disabled=false;
}

document.querySelector('div').onclick = function() {
    mybody.textContent='-';
    met.textContent='你決定？';
 byv.disabled=false;byv.textContent='YES';
 bnv.disabled=false;bnv.textContent='NO';
}



bnv.onclick=function myFunction(){
    met.textContent='不要';
    mybody.textContent='爾康QQ';
    love_v+=0;
    dis(); 
    mylove_show();
    
}

byv.onclick=function myFunction2(){
    met.textContent='好啊';
    mybody.textContent='爾康愛愛';
    love_v+=2;
    mylove_show();
    dis();
}


function mylove_show()
{
    var mylove=document.querySelector('h2');
    mylove.textContent=love_v;

}
function dis()
{
    byv.disabled=true;
    byv.textContent='';
    bnv.disabled=true;
    bnv.textContent='';
}
