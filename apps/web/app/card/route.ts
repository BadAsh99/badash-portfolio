export const dynamic = "force-static";

export function GET() {
  const html = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>BadAsh99 · AI Red Team</title>
<meta name="description" content="BadAsh99. AI red team and offensive security. Tap to save contact.">
</head>
<body>
<style>
  :root{
    --bg:#050609; --bg2:#0a0e16; --panel:#0b1019;
    --cyan:#00d4ff; --cyan-dim:#0f7f9c; --magenta:#ff2e97;
    --text:#d6f2ff; --muted:#5d7b8c; --hair:rgba(0,212,255,.14);
    --mono:ui-monospace,"SF Mono","Cascadia Code",Menlo,Consolas,monospace;
  }
  *{box-sizing:border-box}
  body{
    margin:0; background:var(--bg); color:var(--text); font-family:var(--mono);
    -webkit-font-smoothing:antialiased; min-height:100dvh;
    display:flex; align-items:center; justify-content:center;
    padding:max(20px,env(safe-area-inset-top)) 18px max(24px,env(safe-area-inset-bottom));
    position:relative; overflow-x:hidden;
  }
  /* CRT scanlines + vignette */
  body::before{content:""; position:fixed; inset:0; pointer-events:none; z-index:2;
    background:repeating-linear-gradient(0deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,.16) 2px 3px);
    mix-blend-mode:multiply;}
  body::after{content:""; position:fixed; inset:0; pointer-events:none; z-index:1;
    background:radial-gradient(120% 90% at 50% 8%, rgba(0,212,255,.10), transparent 55%),
               radial-gradient(80% 60% at 50% 120%, rgba(255,46,151,.07), transparent 60%);}

  .card{width:100%; max-width:400px; position:relative; z-index:3;
    display:flex; flex-direction:column; align-items:center; text-align:center;
    animation:boot .5s ease both}

  .prompt{font-size:11px; letter-spacing:.06em; color:var(--muted); margin:0 0 16px; align-self:flex-start}
  .prompt .c{color:var(--cyan)}
  .prompt .cur{display:inline-block; width:7px; height:13px; background:var(--cyan); margin-left:3px;
    vertical-align:-2px; animation:blink 1.1s steps(1) infinite}

  /* seal (same geometry as the brass coin, cast in cyan) */
  .seal{width:130px; height:130px; margin-bottom:20px; filter:drop-shadow(0 0 10px rgba(0,212,255,.35))}
  .seal .edge{transform-box:view-box; transform-origin:100px 100px; animation:spin 30s linear infinite}
  .seal .ring-txt{font-family:var(--mono); font-size:10px; letter-spacing:2.1px; fill:var(--cyan); text-transform:uppercase}

  .name{font-size:clamp(30px,10vw,40px); font-weight:800; letter-spacing:.01em; margin:0; line-height:1;
    color:var(--text); position:relative; text-shadow:0 0 18px rgba(0,212,255,.45); animation:glitch 5.5s infinite}
  .name b{color:var(--cyan)}
  .role{font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--cyan);
    margin:13px 0 0; display:flex; align-items:center; gap:9px; justify-content:center}
  .role::before,.role::after{content:""; height:1px; width:20px; background:var(--hair)}
  .tag{margin:18px 0 0; font-size:17px; color:var(--text); letter-spacing:.01em}
  .tag b{color:var(--magenta); font-weight:700; text-shadow:0 0 14px rgba(255,46,151,.4)}

  .save{margin:24px 0 4px; width:100%; appearance:none; cursor:pointer; font-family:var(--mono);
    background:linear-gradient(180deg, rgba(0,212,255,.16), rgba(0,212,255,.06));
    border:1px solid var(--cyan); color:var(--cyan); font-weight:700; font-size:14px;
    letter-spacing:.06em; padding:15px 18px; border-radius:8px; text-transform:lowercase;
    box-shadow:0 0 20px -6px rgba(0,212,255,.5), inset 0 0 18px -12px var(--cyan);
    transition:background .15s, box-shadow .2s, transform .1s; text-align:left; display:flex; gap:8px}
  .save:hover{background:rgba(0,212,255,.20); box-shadow:0 0 26px -4px rgba(0,212,255,.7)}
  .save:active{transform:translateY(1px)}
  .save .cur{display:inline-block; width:8px; height:14px; background:var(--cyan); animation:blink 1.1s steps(1) infinite}
  .save.done{color:var(--magenta); border-color:var(--magenta); box-shadow:0 0 24px -6px rgba(255,46,151,.6)}

  .links{list-style:none; margin:16px 0 0; padding:0; width:100%; border-top:1px solid var(--hair)}
  .links a{display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--text);
    padding:14px 4px; border-bottom:1px solid var(--hair); transition:color .15s, padding-left .15s}
  .links a:hover{color:var(--cyan); padding-left:8px}
  .links .k{color:var(--cyan-dim); font-size:13px; width:16px; flex:none}
  .links .v{flex:1; text-align:left; font-size:14px}
  .links .go{color:var(--cyan); opacity:.5; font-size:12px}

  .strip{margin:22px 0 0; width:100%; font-size:10px; letter-spacing:.16em; text-transform:uppercase;
    color:var(--muted); display:flex; justify-content:space-between; border-top:1px solid var(--hair); padding-top:13px}
  .strip .g{color:var(--cyan)}

  a:focus-visible,.save:focus-visible{outline:2px solid var(--cyan); outline-offset:3px}

  @keyframes boot{from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:none}}
  @keyframes blink{0%,50%{opacity:1} 51%,100%{opacity:0}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes glitch{
    0%,92%,100%{text-shadow:0 0 18px rgba(0,212,255,.45)}
    93%{text-shadow:2px 0 var(--magenta), -2px 0 var(--cyan), 0 0 18px rgba(0,212,255,.45); transform:translateX(1px)}
    95%{text-shadow:-2px 0 var(--magenta), 2px 0 var(--cyan); transform:translateX(-1px)}
    97%{text-shadow:0 0 18px rgba(0,212,255,.45); transform:none}
  }
  @media (prefers-reduced-motion:reduce){
    .card{animation:none} .seal .edge{animation:none} .name{animation:none}
    .prompt .cur,.save .cur{animation:none} *{transition:none!important}
  }
</style>

<main class="card">
  <p class="prompt"><span class="c">root@badash99</span>:~$ whoami<span class="cur"></span></p>

  <svg class="seal" viewBox="0 0 200 200" role="img" aria-label="BadAsh99 seal">
    <defs>
      <radialGradient id="disc" cx="42%" cy="36%" r="75%">
        <stop offset="0%" stop-color="#0c1826"/>
        <stop offset="100%" stop-color="#050609"/>
      </radialGradient>
      <path id="ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/>
    </defs>
    <circle cx="100" cy="100" r="92" fill="none" stroke="#00d4ff" stroke-width="1.4" opacity=".55"/>
    <circle cx="100" cy="100" r="63" fill="url(#disc)" stroke="#00d4ff" stroke-width="2"/>
    <g class="edge"><text class="ring-txt"><textPath href="#ring" startOffset="0%">· BADASH99 · AI RED TEAM · OFFENSIVE SECURITY </textPath></text></g>
    <text x="100" y="113" text-anchor="middle" font-family="ui-monospace,monospace" font-weight="800" font-size="30" fill="#00d4ff" letter-spacing="0.5">ba99</text>
  </svg>

  <h1 class="name">Bad<b>Ash</b>99</h1>
  <p class="role">AI Red Team · Offensive Security</p>
  <p class="tag"><b>Break it to fix it.</b></p>

  <button class="save" id="save" type="button"><span id="saveLabel">&gt; save_contact</span><span class="cur"></span></button>

  <ul class="links">
    <li><a href="https://badash99.dev" target="_blank" rel="noopener"><span class="k">$</span><span class="v">badash99.dev</span><span class="go">exec ↗</span></a></li>
    <li><a href="https://github.com/BadAsh99" target="_blank" rel="noopener"><span class="k">⌥</span><span class="v">github.com/BadAsh99</span><span class="go">exec ↗</span></a></li>
    <li><a href="https://aiseal.ai" target="_blank" rel="noopener"><span class="k">◆</span><span class="v">AISeal.ai</span><span class="go">exec ↗</span></a></li>
  </ul>

  <div class="strip"><span>// scanned at</span><span class="g">DEF CON 2026 · LAS VEGAS</span></div>
</main>

<script>
  function buildVCard(){
    return ["BEGIN:VCARD","VERSION:3.0","N:Clements;Ash;;;","FN:Ash Clements","NICKNAME:BadAsh99",
      "TITLE:AI Red Team · Offensive Security",
      "EMAIL;TYPE=INTERNET,WORK:ash@ashclements.dev",
      "URL:https://badash99.dev","URL:https://github.com/BadAsh99","URL:https://aiseal.ai",
      "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/ash-clements-75b62b22/",
      "NOTE:BadAsh99. AI red team + offensive security. Met at DEF CON 2026.","END:VCARD"].join("\r\n");
  }
  document.getElementById("save").addEventListener("click", function(){
    var btn=this, label=document.getElementById("saveLabel");
    try{
      var blob=new Blob([buildVCard()],{type:"text/vcard;charset=utf-8"});
      var url=URL.createObjectURL(blob); var a=document.createElement("a");
      a.href=url; a.download="BadAsh99.vcf"; document.body.appendChild(a); a.click();
      setTimeout(function(){URL.revokeObjectURL(url); a.remove();},1500);
    }catch(e){ window.location.href="data:text/vcard;charset=utf-8,"+encodeURIComponent(buildVCard()); }
    btn.classList.add("done"); label.textContent="✓ saved_to_contacts";
    setTimeout(function(){btn.classList.remove("done"); label.textContent="> save_contact";},2600);
  });
</script>

</body>
</html>
`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
