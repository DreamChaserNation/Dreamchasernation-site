
(function(){
  // Leave SKOOL_URL blank for now as requested
  const SKOOL_URL = '';

  function open(id){ const o=document.getElementById(id); if(o){ o.style.display='flex'; document.body.style.overflow='hidden'; } }
  function close(id){ const o=document.getElementById(id); if(o){ o.style.display='none'; document.body.style.overflow=''; } }
  window.DCNPopup = { open, close };

  document.addEventListener('click', (e)=>{
    const t = e.target.closest('[data-dcn-open]'); if(t){ e.preventDefault(); open(t.getAttribute('data-dcn-open')); }
    const c = e.target.closest('[data-dcn-close]'); if(c){ e.preventDefault(); close(c.getAttribute('data-dcn-close')); }
    if(e.target.classList.contains('dcn-popup-overlay')){ close(e.target.id); }
  });

  document.addEventListener('submit', (e)=>{
    const form = e.target.closest('form[data-dcn-redirect-skool]');
    if(!form) return;
    const frameName = form.getAttribute('target') || 'dcn-submission';
    let frame = document.querySelector(`iframe[name="${frameName}"]`);
    if(!frame){ frame = document.createElement('iframe'); frame.name = frameName; frame.style.display='none'; document.body.appendChild(frame); }
    setTimeout(()=>{
      const box = form.closest('.dcn-popup');
      const success = box.querySelector('.success-state');
      const body = box.querySelector('.form-state');
      if(success && body){ body.style.display='none'; success.style.display='block'; }
      setTimeout(()=>{
        if(SKOOL_URL && /^https?:\/\//.test(SKOOL_URL)){ window.location.href = SKOOL_URL; }
      }, 900);
    }, 400);
  });
})();


document.addEventListener('submit', (e)=>{
  const form = e.target.closest('form[data-dcn-redirect-skool]');
  if(!form) return;
  const frameName = form.getAttribute('target') || 'dcn-submission';
  let frame = document.querySelector(`iframe[name="${frameName}"]`);
  if(!frame){ frame = document.createElement('iframe'); frame.name = frameName; frame.style.display='none'; document.body.appendChild(frame); }
  // Determine post-submit redirect based on which button was used
  const submitter = e.submitter || document.activeElement;
  const goPricing = submitter && submitter.dataset && submitter.dataset.go === 'pricing';

  setTimeout(()=>{
    const box = form.closest('.dcn-popup');
    const success = box.querySelector('.success-state');
    const body = box.querySelector('.form-state');
    if(success && body){ body.style.display='none'; success.style.display='block'; }
    setTimeout(()=>{
      if(goPricing){ window.location.href = 'pricing.html'; }
    }, 700);
  }, 5500);
});


document.addEventListener('submit', (e)=>{
  const form = e.target.closest('form[data-dcn-redirect-skool]');
  if(!form) return;
  const submitter = e.submitter || document.activeElement;
  const goPricing = submitter && submitter.dataset && submitter.dataset.go === 'pricing';
  setTimeout(()=>{
    if(goPricing){ window.location.href = 'pricing.html'; }
  }, 5500);
});
