import AB from './ab-test';

AB.create('home',{
  'wide':0.3,
  'normal':0.7
});

AB.create('video',{
  'wide':0.1,
  'normal':0.9
});

let btn1=document.getElementById('btn-home');
btn1.addEventListener('click',function(){
  let count=document.getElementById('home').value*1||0;
  let hit={
    wide:0,
    normal:0
  };
  for(let i=0;i<count;i++){
    hit[AB.run('home')]++;
  }
  let txt=document.getElementById('result-home');
  txt.innerHTML=`设计比例：0.3：0.7==${0.3/0.7}；wide:${hit.wide}次；normal:${hit.normal}次；实际发生次数比例：${hit.wide/hit.normal}`
},false);

let btn2=document.getElementById('btn-video');
btn2.addEventListener('click',function(){
  let count=document.getElementById('video').value*1||0;
  let hit={
    wide:0,
    normal:0
  };
  for(let i=0;i<count;i++){
    hit[AB.run('video')]++;
  }
  let txt=document.getElementById('result-video');
  txt.innerHTML=`设计比例：0.1：0.9==${0.1/0.9}；wide:${hit.wide}次；normal:${hit.normal}次；实际发生次数比例：${hit.wide/hit.normal}`
},false);
