var input = document.querySelector('#main');
input.onkeydown = function ( e ){
  if( e.keyCode === 13 ){
    submit();
  }
};

function submit(){
  input.value = 'https://ml.reddit.com/r/themoddingofisaac/search?q=flair%3Arelease+author%3A' + encodeURIComponent(input.value) + '&restrict_sr=on';
}