const rows = [
{s:"NHANES (USA)", t:"Survey", f:"Sleep < 7 h", l:"Trouble concentrating from tiredness", d:"↑", r:"29.3% vs 19.4% in 7–9 h sleepers", n:"10,896", c:"Wheaton et al. (2011)"},
{s:"NHANES (USA)", t:"Survey", f:"Sleep < 7 h", l:"Six daily-life difficulties from sleepiness", d:"↑", r:"All six more common in short sleepers", n:"10,896", c:"Wheaton et al. (2011)"},
{s:"NHANES (USA)", t:"Survey", f:"Population", l:"Short sleep prevalence", d:"—", r:"37.1% sleep < 7 h on weekdays", n:"10,896", c:"Wheaton et al. (2011)"},
{s:"RKI DEGS1 (Germany)", t:"Survey", f:"Population", l:"Short sleep prevalence", d:"—", r:"12.3% sleep ≤ 5 h; 81.6% 6–8 h", n:"7,988", c:"Schlack et al. (2013)"},
{s:"RKI DEGS1 (Germany)", t:"Survey", f:"Frequent sleep problems", l:"Tiredness / exhaustion (insomnia)", d:"↑", r:"5.7% have sleep problems plus daytime tiredness", n:"7,988", c:"Schlack et al. (2013)"},
{s:"NHIS (USA)", t:"Survey", f:"Population", l:"Waking up well-rested", d:"—", r:"30.5% sleep < 7 h; only 54.8% wake well-rested", n:"national", c:"Ng et al. (2026)"},
{s:"NHANES (USA)", t:"Survey", f:"Sleep ≥ 9 h", l:"All-cause mortality", d:"↑", r:"HR 1.29 (95% CI 1.08–1.53) vs 7–8 h", n:"24,141", c:"Gu et al. (2024)"},
{s:"NHANES (USA)", t:"Survey", f:"Sleep < 7 h", l:"All-cause mortality", d:"↑", r:"HR 1.17 (95% CI 1.03–1.33) vs 7–8 h", n:"24,141", c:"Gu et al. (2024)"},
{s:"PubMed", t:"Trial", f:"Sleep cut to 6 h or 4 h for 14 days", l:"Alertness / sleepiness", d:"↓", r:"6 h ≈ deficits of up to 2 nights without sleep; people felt only slightly sleepy", n:"48", c:"Van Dongen et al. (2003)"},
{s:"PubMed", t:"Trial", f:"Sleep extended (~7 → 9 h)", l:"Fatigue & vigour (POMS)", d:"fatigue ↓ vigour ↑", r:"Improved, P < 0.01", n:"15", c:"Kamdar et al. (2004)"},
{s:"PubMed", t:"Trial", f:"+110.9 min sleep/night, 5–7 wks", l:"Fatigue, vigour, sleepiness (ESS)", d:"fatigue ↓ vigour ↑", r:"POMS P < 0.001; ESS ↓ P < 0.01", n:"11", c:"Mah et al. (2011)"},
{s:"PubMed", t:"Trial", f:"10 h in bed for 7 nights (normal sleepers)", l:"Fatigue; sleepiness; mood", d:"fatigue ↓", r:"Fatigue ↓ (p = .03); sleepiness and mood unchanged", n:"27", c:"Mantua et al. (2019)"},
{s:"PubMed", t:"Meta-analysis", f:"Sleep loss", l:"Positive mood", d:"↓", r:"g = −0.94 (large)", n:"64 studies", c:"Tomaso et al. (2021)"},
{s:"PubMed", t:"Meta-analysis", f:"Sleep loss", l:"Negative mood", d:"↑", r:"g = +0.45 (moderate)", n:"64 studies", c:"Tomaso et al. (2021)"},
{s:"PubMed", t:"Meta-analysis", f:"Sleep loss (all forms)", l:"Positive affect", d:"↓", r:"SMD −0.27 to −1.14", n:"5,717", c:"Palmer et al. (2024)"}
];
const tbody = document.getElementById('tbody');
let filt = 'all';
function render(){
const q = document.getElementById('q').value.toLowerCase();
tbody.innerHTML = rows.filter(r => (filt==='all'||r.t===filt) && Object.values(r).join(' ').toLowerCase().includes(q))
.map(r => `<tr><td>${r.s}</td><td>${r.t}</td><td>${r.f}</td><td>${r.l}</td><td class="dir">${r.d}</td><td>${r.r}</td><td>${r.n}</td><td>${r.c}</td></tr>`).join('')
|| '<tr><td colspan="8">No matching rows.</td></tr>';
}
document.getElementById('filters').addEventListener('click', e => {
if(e.target.tagName!=='BUTTON') return;
document.querySelectorAll('#filters button').forEach(b=>b.classList.remove('on'));
e.target.classList.add('on'); filt = e.target.dataset.f; render();
});
document.getElementById('q').addEventListener('input', render);
render();

const tip = document.getElementById('tip');
document.querySelectorAll('[data-tip]').forEach(el=>{
el.addEventListener('mousemove', e=>{tip.innerHTML=el.dataset.tip;tip.style.left=(e.clientX+12)+'px';tip.style.top=(e.clientY+12)+'px';tip.style.opacity=1});
el.addEventListener('mouseleave', ()=>tip.style.opacity=0);
});
