
document.addEventListener("DOMContentLoaded",()=>{
  const header=document.querySelector(".site-header"), nav=header?.querySelector("nav");
  if(header&&nav&&!header.querySelector(".menu-toggle")){
    const b=document.createElement("button"); b.className="menu-toggle"; b.type="button"; b.textContent="☰";
    header.insertBefore(b,nav); b.onclick=()=>{nav.classList.toggle("nav-open");b.textContent=nav.classList.contains("nav-open")?"✕":"☰"};
  }
  document.querySelectorAll(".faq-q").forEach(q=>q.addEventListener("click",()=>q.parentElement.classList.toggle("open")));
  document.querySelectorAll(".product-tab").forEach(tab=>tab.addEventListener("click",()=>{
    const id=tab.dataset.tab;
    document.querySelectorAll(".product-tab").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(x=>x.classList.remove("active"));
    tab.classList.add("active"); document.getElementById(id)?.classList.add("active");
  }));
  const search=document.querySelector("[data-site-search]");
  const cards=[...document.querySelectorAll(".product-card,.cat-card,.guide-list-card,.product-mini")];
  if(search&&cards.length) search.addEventListener("input",()=>{
    const q=search.value.toLowerCase().trim(); cards.forEach(c=>c.style.display=!q||c.textContent.toLowerCase().includes(q)?"":"none");
  });
  const filters=[...document.querySelectorAll("[data-filter]")];
  if(filters.length) filters.forEach(f=>f.addEventListener("click",()=>{
    filters.forEach(x=>x.classList.remove("active"));f.classList.add("active");
    const v=f.dataset.filter;
    document.querySelectorAll("[data-cat]").forEach(c=>c.style.display=(v==="all"||c.dataset.cat===v)?"":"none");
  }));
  const top=document.createElement("button"); top.className="back-top"; top.textContent="↑"; top.setAttribute("aria-label","Back to top");
  document.body.appendChild(top); addEventListener("scroll",()=>top.classList.toggle("show",scrollY>500)); top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
  document.querySelectorAll('a[href*="amazon.in"]').forEach(a=>a.addEventListener("click",()=>a.classList.add("clicked")));
});
