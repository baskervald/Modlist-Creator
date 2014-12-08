var input = document.querySelector('#main');
var button = document.querySelector('#button');
var url = document.querySelector('#url');
var shorturl = document.querySelector('#shorturl')

input.onkeydown = function ( e ){
  if( e.keyCode === 13 ){
    submit();
  }
};
button.onclick = submit;

function submit(){
  var encoded = encodeURIComponent(input.value);
  url.className = 'fancyurl';
  shorturl.className = 'fancyurl';
  url.textContent = 'https://ml.reddit.com/r/themoddingofisaac/search?restrict_sr=on&q=flair%3Arelease+author%3A' + encoded;
  shorturl.textContent = 'https://ashlynninwonderland.github.io/Modlist-Creator/redirect.html#' + encoded;
}