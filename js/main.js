var input = document.querySelector('#main');
var button = document.querySelector('#button');
var url = document.querySelector('#url');

input.onkeydown = function ( e ){
  if( e.keyCode === 13 ){
    submit();
  }
};
button.onclick = submit;

function submit(){
  url.textContent = 'https://ml.reddit.com/r/themoddingofisaac/search?q=flair%3Arelease+author%3A' + encodeURIComponent(input.value) + '&restrict_sr=on';
}