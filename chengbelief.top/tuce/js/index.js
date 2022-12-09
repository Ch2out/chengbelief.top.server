console.log('');






let btn = document.getElementById('btn');
let music = document.getElementById('music');

// 音乐播放
btn.addEventListener('click', function () {
  //music.paused() 判断音乐是否暂停
  // btn.innerHTML = '';
  if (music.paused) {
    music.play();
    btn.innerHTML = '&#xe600;';
  } else {
    music.pause();
    btn.innerHTML = '&#xe609;';
  }
});
let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');

// 时间
function getDate() {
  let date = new Date();
  let yearDate = date.getFullYear();
  year.innerHTML = yearDate;
  let monthDate = date.getMonth() + 1;
  month.innerHTML = monthDate;
  let dayDate = date.getDate();
  day.innerHTML = dayDate;
}
getDate();
setInterval(function () {
  getDate();
}, 1000);

// 字体逐个显示
let title = document.getElementById('title');
let fontList = ['H', 'U', 'A', 'I', 'L', 'A', 'N', 'J', 'U', 'N'];
let fontIndex = 0;
let time = setInterval(function () {
  if (fontIndex < fontList.length) {
    title.append(fontList[fontIndex++]);
  } else {
    clearInterval(time);
  }
}, 600);

// 图片跑马灯
let tu1 = document.getElementById('tu1');
let tu2 = document.getElementById('tu2');
let tu3 = document.getElementById('tu3');
let tu4 = document.getElementById('tu4');
let tu5 = document.getElementById('tu5');
let slideShow = document.getElementById('slideShow');
let url = '';

tu1.addEventListener('mousemove',function(){
  let src = tu1.getAttribute('src');
  slideShow.setAttribute('src',src);

});

tu2.addEventListener('mousemove',function(){
  let src = tu2.getAttribute('src');
  slideShow.setAttribute('src',src);

})

tu3.addEventListener('mousemove',function(){
  let src = tu3.getAttribute('src');
  slideShow.setAttribute('src',src);

})

tu4.addEventListener('mousemove',function(){
  let src = tu4.getAttribute('src');
  slideShow.setAttribute('src',src);

})

tu5.addEventListener('mousemove',function(){
  let src = tu5.getAttribute('src');
  slideShow.setAttribute('src',src);

})

