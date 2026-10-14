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
  document.querySelectorAll('[data-demo-track]').forEach(button=>{
    button.addEventListener('click',()=>{
      const track=tracks[button.dataset.demoTrack];
      if(!track)return;
      const changed=audio.getAttribute('src')!==track.src;
      if(changed){audio.pause();audio.setAttribute('src',track.src);audio.load();}
      title.textContent=track.title;
      player.hidden=false;
      document.querySelectorAll('[data-demo-track]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      if(changed||audio.paused){audio.play().catch(()=>{});}else{audio.pause();}
    });
  });
})();
