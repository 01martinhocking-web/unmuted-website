document.getElementById('year').textContent = new Date().getFullYear();


// Prototype chart showcase: listening does not imply ranking or voting.
(function(){
  const tracks={
    real:{title:"I'M AS REAL AS ANYBODY ELSE — JAX RYDER",src:"I'm%20As%20Real%20As%20Anybody%20Else.mp3"},
    built:{title:"BUILT DIFFERENT — JAX RYDER",src:"BUILT%20DIFFERENT.mp3"}
  };
  const player=document.getElementById('chart-demo-player');
  const audio=document.getElementById('chart-demo-audio');
  const title=document.getElementById('chart-demo-title');
  if(!player||!audio||!title)return;
  const buttons=[...document.querySelectorAll('[data-demo-track]')];
  let activeButton=null;
  function updateButtons(){
    buttons.forEach(b=>{
      const selected=b===activeButton;
      b.setAttribute('aria-pressed',String(selected));
      const status=b.querySelector('.chart-status');
      if(status)status.textContent=selected?'✕ CLOSE':'▶ LISTEN';
    });
  }
  buttons.forEach(button=>{
    button.addEventListener('click',()=>{
      if(activeButton===button){
        audio.pause();
        player.hidden=true;
        activeButton=null;
        updateButtons();
        return;
      }
      const track=tracks[button.dataset.demoTrack];
      if(!track)return;
      audio.pause();
      if(audio.getAttribute('src')!==track.src){
        audio.setAttribute('src',track.src);
        audio.load();
      }
      title.textContent=track.title;
      player.hidden=false;
      activeButton=button;
      updateButtons();
      audio.play().catch(()=>{});
    });
  });
})();
