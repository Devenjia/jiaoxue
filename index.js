var lmn='数学很难';

function clickHeader(){
   var box=document.getElementsByClassName('back')[0];
   var box1=document.getElementsByClassName('dialog')[0]
   box.style.display='block';
   box1.style.display='block';
    console.error('点击事件')
}
function closeDialog() {
    var box=document.getElementsByClassName('back')[0];
    var box1=document.getElementsByClassName('dialog')[0];
    box.style.display='none';
    box1.style.display='none';
}
// (function(){
// console.log('加载函数')
// load(lmn);

// function load(data){
//     console.error(data)
// }
//     console.error(data)
// }
// function load(data){
//     console.error(data)
// }
// function load(data){
//     console.error(data)
// }
// function load(data){
//     console.error(data)
// }
// })()


// function XXX(){}
// var k = function(){}
// document是window的一个子对象。
// window run 
// 1.window search
// 2.找到则执行，没找到则返回报错
