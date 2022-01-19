function insert(b)
{
    document.getElementById('Text-Field').value+=b;
    
}
function del()
{
    var a=document.getElementById('Text-Field').value + '';
    a=a.substring(0,a.length-1);
    document.getElementById('Text-Field').value=a;
}
function equal()
{
    console.log('hhhhh');
    var a=eval(document.getElementById('Text-Field').value);
    document.getElementById('Text-Field').value=a;
}
console.log('hello');