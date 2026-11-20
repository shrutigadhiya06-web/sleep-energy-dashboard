(function(){
const $=id=>document.getElementById(id),MUT="#6B7280",LN="#E5E7EB";
function bars(id,cats,vals,color,mx){const w=520,h=220,p=30,gw=(w-2*p)/cats.length,bw=Math.min(60,gw-30);
 let s=`<svg viewBox="0 0 ${w} ${h}" width="100%" role="img">`;for(let k=0;k<=4;k++){const y=h-p-(h-2*p-10)*k/4;s+=`<line x1="${p}" x2="${w-p}" y1="${y}" y2="${y}" stroke="${LN}"/>`}
 cats.forEach((c,i)=>{const v=vals[i],bx=p+i*gw+(gw-bw)/2,bh=v/mx*(h-2*p-10);
 s+=`<rect x="${bx}" y="${h-p-bh}" width="${bw}" height="${bh}" rx="4" fill="${Array.isArray(color)?color[i]:color}"/><text x="${bx+bw/2}" y="${h-p-bh-6}" font-size="13" font-weight="600" text-anchor="middle">${v}</text><text x="${p+i*gw+gw/2}" y="${h-8}" font-size="12" text-anchor="middle" fill="${MUT}">${c}</text>`});
 $(id).innerHTML=s+'</svg>'}
bars('nh',["< 7 h","7–9 h","> 9 h"],[37.1,60.5,2.4],["#4F46E5","#A5B4FC","#A5B4FC"],70);
bars('cmp',["Sleep < 7 h","Sleep 7–9 h"],[29.3,19.4],["#4F46E5","#A5B4FC"],35);
bars('rct',["Positive mood ↓","Negative mood ↑"],[0.94,0.45],["#4F46E5","#A5B4FC"],1.1);
bars('c_de',["≤ 5 h","6–8 h","≥ 9 h"],[12.3,81.6,6.1],["#4F46E5","#A5B4FC","#A5B4FC"],95);
bars('c_nhis',["Sleep < 7 h","Wake well-rested"],[30.5,54.8],["#4F46E5","#A5B4FC"],65);
bars('c_hr',["< 7 h","7–8 h","≥ 9 h"],[1.17,"1.00",1.29],["#F59E0B","#A5B4FC","#F59E0B"],1.5);
const CR=[["NHANES","Sleep < 7 h","Trouble concentrating (tired)","↑","29.3% vs 19.4%","Association","Wheaton et al. (2011)"],
["NHANES","Sleep < 7 h","Six daily-life difficulties","↑","all six more common","Association","Wheaton et al. (2011)"],
["NHANES","Population","Short sleep (< 7 h)","—","37.1% of 10,896","Prevalence","Wheaton et al. (2011)"],
["NHANES","Sleep < 7 h","All-cause mortality","↑","HR 1.17 (1.03–1.33)","Association","Gu et al. (2024)"],
["NHANES","Sleep ≥ 9 h","All-cause mortality","↑","HR 1.29 (1.08–1.53)","Association","Gu et al. (2024)"],
["DEGS1","Population","Short sleep (≤ 5 h)","—","12.3% of 7,988","Prevalence","Schlack et al. (2013)"],
["DEGS1","Frequent sleep problems","Daytime tiredness (insomnia)","↑","5.7% of adults","Association","Schlack et al. (2013)"],
["NHIS","Population","Waking up well-rested","—","30.5% short sleep; 54.8% rested","Prevalence","Ng et al. (2026)"],
["PubMed","6 h or 4 h for 14 days","Alertness","↓","6 h ≈ up to 2 nights awake","Causal (lab)","Van Dongen et al. (2003)"],
["PubMed","Sleep extended ~7 → 9 h","Fatigue / vigour","↓","P < 0.01","Causal (trial)","Kamdar et al. (2004)"],
["PubMed","+111 min sleep/night","Fatigue / vigour","↓","P < 0.001","Causal (trial)","Mah et al. (2011)"],
["PubMed","10 h in bed (normal sleepers)","Fatigue","↓","p = 0.03; mood unchanged","Causal (trial)","Mantua et al. (2019)"],
["PubMed","Sleep loss","Positive mood","↓","g = −0.94","Meta-analysis","Tomaso et al. (2021)"],
["PubMed","Sleep loss","Negative mood","↑","g = +0.45","Meta-analysis","Tomaso et al. (2021)"],
["PubMed","Sleep loss (all forms)","Positive affect","↓","SMD −0.27 to −1.14","Meta-analysis","Palmer et al. (2024)"]];
const DC={"↑":"up","↓":"dn","—":"nt"};
function ct(f){$('ct').innerHTML='<tr><th>Source</th><th>Factor</th><th>Linked to</th><th>Direction</th><th>Result</th><th>Type</th><th>Citation</th></tr>'+CR.filter(r=>f==='all'||r[0]===f).map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td><span class="b ${DC[r[3]]||'am'}">${r[3]}</span></td><td>${r[4]}</td><td>${r[5]}</td><td style="color:#6B7280">${r[6]}</td></tr>`).join('')}
function pills(id,opts,cb){const d=$(id);opts.forEach(([k,t],i)=>{const b=document.createElement('button');b.type='button';b.textContent=t;if(!i)b.className='on';
 b.addEventListener('click',()=>{[...d.children].forEach(x=>x.className='');b.className='on';cb(k)});d.appendChild(b)});cb(opts[0][0])}
pills('cf',[['all','All (15)'],['NHANES','NHANES (5)'],['DEGS1','RKI DEGS1 (2)'],['NHIS','NHIS (1)'],['PubMed','PubMed (7)']],ct);
const EV=[["Kamdar et al. (2004)","Sleep extension","15","Less fatigue, more vigour (P < 0.01)","Positive","up","short"],["Mah et al. (2011)","Sleep extension, 5–7 wks","11","+111 min/night; fatigue ↓, vigour ↑","Positive","up","short"],
["Mantua et al. (2019)","Sleep extension, 1 wk","27","Fatigue ↓ only; mood unchanged","Small","nt","normal"],["Van Dongen et al. (2003)","Sleep restriction, 14 days","48","6 h ≈ 2 nights awake; felt only slightly sleepy","Negative","dn","loss"],
["Tomaso et al. (2021)","Meta-analysis","64 studies","Positive mood g = −0.94","Negative","dn","loss"],["Palmer et al. (2024)","Meta-analysis","5,717","154 experiments; positive affect ↓","Negative","dn","loss"]];
function tb(f){$('tb').innerHTML='<tr><th>Study</th><th>Design</th><th>n</th><th>Key result</th><th>Direction</th></tr>'+EV.filter(r=>f==='all'||r[6]===f).map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="b ${r[5]}">${r[4]}</span></td></tr>`).join('')}
pills('flt',[['all','All studies'],['short','Short sleepers'],['normal','Normal sleepers'],['loss','Sleep loss']],tb);
})();
