let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
btn1.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #e53e3e; border:1px solid black;width: 100%;height: 100%');
})
btn2.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #dd6b20; border:1px solid black;width: 100%;height: 100%');
})
btn3.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #faf089; border:1px solid black;width: 100%;height: 100%');
})
btn4.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #48bb78; border:1px solid black;width: 100%;height: 100%');
})
btn5.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #81e6d9; border:1px solid black;width: 100%;height: 100%');
})
btn6.addEventListener('click', ()=>{
    document.getElementById('caja').setAttribute('style','background-color: #d53f8c; border:1px solid black;width: 100%;height: 100%');
})