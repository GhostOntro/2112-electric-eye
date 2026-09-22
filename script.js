const photos=[
["milky-way.jpg","The Milky Way","2023 Bortle 2.\n1 hour total exposure.\nWide field lens."],
["soul.jpg","Soul nebula (IC 1848)","2023 Bortle 8.\n12 hours total exposure."],
["trifid.jpg","Trifid nebula (M20)","2024 Bortle 8.\n4 1/2 hours total exposure."],
["north-american.jpg","North American nebula (NGC7000)","2023 Bortle 8.\n16 hours total exposure."],
["andromeda.png","Andromeda (M31)","2023, Bortle 2.\n5 hours total exposure."],
["brainv3.jpg","Crescent nebula (NGC 6888)","2026, Bortle 8.\n19h total exposure."],
["catspaw.jpg","Cat’s Paw nebula (NGC 6334)","2024 Bortle 2.\n3 hours total exposure."],
["dumbbell.jpg","Dumbbell nebula (M27)","Bortle 8 2026.\n9h total exposure."],
["eastern-veil.jpg","The Eastern Veil nebula (NGC 6992)","2024 Bortle 8.\n11 hours total exposure."],
["horsehead-flame.jpg","Horsehead and Flame nebulae (B33 & NGC 2024)","2023 Bortle 8.\n6 hours total exposure."],
["LION.jpg","Lion nebula (SH2-132)","2024, Bortle 8.\n98 hours total exposure."],
["orion.jpg","Great Orion & Running man nebulae (M42 - M43)","2024 Bortle 8.\n19 hours total exposure."],
["triangulum.jpg","Triangulum Galaxy (M33)","2024 Bortle 2.\n3 hours total exposure."],
["phases-moon.jpg","The Phases of the Moon","Composite image.\n200+ subs for each phase."],
["mineral-moon.png","The Mineral Moon.","Composite image.\n200 subs stacked."],
["moonclose3.jpg","Drawing Down the Moon.","South west of Mare Nubium,.\nBetween the craters Tycho and Stevinus.\n270 stacked images."],
["sadr-ic1318-20250923.jpg?v=20260923a","Sadr region (IC 1318)","2025 Bortle 8.\n12H total exposure."],
["quintetplusone.jpg","NGC 7331 Galaxy and friends, along with Stephan’s Quintet.","2026 Bortle 8.\n9 hours total exposure."],
["rosette.jpg","Rosette or ‘Skull’ Nebula (C49)","2024 Bortle 8.\n14 hours total exposure."],
["lagoon.jpg","Lagoon nebula (M8)","2023 Bortle 2.\n5 hours total exposure."],
["veilwide.jpg","Veil Nebula (NGC 6960, 6979, 6974, 6992, 6995, IC 1340)","2026 Bortle 8.\n9h total exposure."],
["Via.jpg","Via Lactea the Milky way core","Bortle 2.\n1h total exposure.\n2024."],
["swan.jpg","Swan nebula (M17)","27h total exposure.\n2024."],
["xmastree.jpg","Cone or \"Xmas tree\" nebula (NGC 2264)","Bortle 8.\n19h Total exposure."]
].map(([file,title,description])=>({file:`images/${file}`,title,description})).sort((a,b)=>a.title.localeCompare(b.title, undefined, {sensitivity:'base'}));
const grid=document.querySelector('#grid'),box=document.querySelector('#lightbox'),big=document.querySelector('#bigImage'),title=document.querySelector('#bigTitle'),desc=document.querySelector('#bigDesc'),full=document.querySelector('#full');let current=0;
photos.forEach((p,i)=>{const c=document.createElement('article');c.className='card';c.innerHTML=`<button type="button"><img src="${p.file}" alt="${p.title}" loading="lazy"></button><div class="caption"><h3>${p.title}</h3><p>${p.description}</p></div>`;c.querySelector('button').onclick=()=>open(i);grid.append(c)});
function show(i){current=i;const p=photos[i];big.src=p.file;big.alt=p.title;title.textContent=p.title;desc.textContent=p.description;full.href=p.file;document.querySelector('#bigStory').textContent=p.title.startsWith('Andromeda')?'The Andromeda Galaxy (M31), our closest spiral galaxy neighbor, located about 2.5 million light-years from Earth. In this image, the vast structure of its spiral arms and dust lanes becomes visible, accompanied by its companion galaxies M32 and M110.':'A view into the deep sky, captured from Earth and carefully processed to reveal faint structure, dust and light.'}
function open(i){show(i);box.classList.add('active');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}function close(){box.classList.remove('active');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelector('#close').onclick=close;document.querySelectorAll('.closeLink').forEach(x=>x.onclick=close);document.querySelector('#prev').onclick=()=>show((current-1+photos.length)%photos.length);document.querySelector('#next').onclick=()=>show((current+1)%photos.length);document.onkeydown=e=>{if(!box.classList.contains('active'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show((current-1+photos.length)%photos.length);if(e.key==='ArrowRight')show((current+1)%photos.length)};
