export const dynamic = "force-static";

export function GET() {
  const html = String.raw`<!doctype html>
<!--
  ASH CLEMENTS · NFC TAP CARD  ( ashclements.dev/card )
  =====================================================
  WHAT THIS IS: the landing page an NTAG215 sticker points to.
  Program the chip (NFC Tools app) with the URL where you host this page,
  e.g.  https://ashclements.dev/card   (NOT the whole page, just that URL).

  ALL FIELDS CONFIRMED: LinkedIn /in/ash-clements-75b62b22, email ash@ashclements.dev.
  Phone intentionally OFF (public page, hacker con); to add it, uncomment the TEL line in buildVCard().
  DEPLOY: drop this file at ashclements.dev/card (Next.js: app/card/page or public/card.html).
-->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Ash Clements · AI Security</title>
<meta name="description" content="Ash Clements. AI Security, red team + runtime defense. Tap to save contact.">
<style>
  :root{
    --ink:#0d0f14; --ink-2:#14171e; --ink-3:#1b1f29;
    --text:#e9e7e1; --muted:#8c909b;
    --brass:#c9a24b; --brass-hi:#e7ca7d; --brass-lo:#8c6b2c;
    --line:rgba(201,162,75,.22); --hair:rgba(233,231,225,.08);
    --mono:ui-monospace,"SF Mono","Cascadia Code",Menlo,Consolas,monospace;
    --sans:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  @media (prefers-color-scheme: light){
    :root{
      --ink:#f4f0e7; --ink-2:#ece6d9; --ink-3:#e1dac9;
      --text:#22252c; --muted:#6b6357;
      --brass:#9a7a2e; --brass-hi:#b8933f; --brass-lo:#6d551f;
      --line:rgba(154,122,46,.30); --hair:rgba(34,37,44,.10);
    }
  }
  :root[data-theme="dark"]{
    --ink:#0d0f14; --ink-2:#14171e; --ink-3:#1b1f29;
    --text:#e9e7e1; --muted:#8c909b;
    --brass:#c9a24b; --brass-hi:#e7ca7d; --brass-lo:#8c6b2c;
    --line:rgba(201,162,75,.22); --hair:rgba(233,231,225,.08);
  }
  :root[data-theme="light"]{
    --ink:#f4f0e7; --ink-2:#ece6d9; --ink-3:#e1dac9;
    --text:#22252c; --muted:#6b6357;
    --brass:#9a7a2e; --brass-hi:#b8933f; --brass-lo:#6d551f;
    --line:rgba(154,122,46,.30); --hair:rgba(34,37,44,.10);
  }

  *{box-sizing:border-box}
  html,body{margin:0;padding:0}
  body{
    background:
      radial-gradient(120% 80% at 50% -10%, color-mix(in srgb, var(--brass) 8%, transparent), transparent 60%),
      var(--ink);
    color:var(--text);
    font-family:var(--sans);
    -webkit-font-smoothing:antialiased;
    min-height:100dvh;
    display:flex; align-items:center; justify-content:center;
    padding:max(20px, env(safe-area-inset-top)) 18px max(24px, env(safe-area-inset-bottom));
  }
  .card{
    width:100%; max-width:400px;
    display:flex; flex-direction:column; align-items:center;
    text-align:center;
    animation:rise .7s cubic-bezier(.2,.7,.2,1) both;
  }

  /* ---- coin seal ---- */
  .seal{width:132px; height:132px; margin-bottom:22px; animation:rise .7s .02s both}
  .seal .edge{transform-box:view-box; transform-origin:100px 100px; animation:spin 42s linear infinite}
  .seal .ring-txt{font-family:var(--mono); font-size:10.5px; letter-spacing:2.3px; fill:var(--brass); text-transform:uppercase}

  /* ---- identity ---- */
  .name{
    font-size:clamp(30px,9vw,38px); font-weight:800; letter-spacing:-.02em;
    line-height:1.02; margin:0; text-wrap:balance;
  }
  .role{
    font-family:var(--mono); font-size:11.5px; letter-spacing:.18em; text-transform:uppercase;
    color:var(--brass); margin:12px 0 0; display:flex; align-items:center; gap:9px; justify-content:center;
  }
  .role::before,.role::after{content:""; height:1px; width:22px; background:var(--line)}
  .org{font-family:var(--mono); font-size:12px; color:var(--muted); letter-spacing:.04em; margin:7px 0 0}

  .hook{
    margin:20px 0 0; font-size:17px; line-height:1.45; color:var(--text);
    max-width:34ch; text-wrap:balance;
  }
  .hook b{color:var(--brass); font-weight:700}

  /* ---- primary action ---- */
  .save{
    margin:26px 0 4px; width:100%;
    appearance:none; border:1px solid var(--brass-lo); cursor:pointer;
    background:linear-gradient(180deg,var(--brass-hi),var(--brass));
    color:#191408; font-family:var(--mono); font-weight:700;
    font-size:14px; letter-spacing:.08em; text-transform:uppercase;
    padding:16px 18px; border-radius:12px;
    display:flex; align-items:center; justify-content:center; gap:10px;
    box-shadow:0 1px 0 var(--brass-hi) inset, 0 10px 24px -12px var(--brass);
    transition:transform .12s ease, filter .2s ease;
  }
  .save:hover{filter:brightness(1.05)}
  .save:active{transform:translateY(1px)}
  .save.done{background:var(--ink-2); color:var(--brass); border-color:var(--line)}
  .save svg{width:17px; height:17px; display:block}

  /* ---- link rows ---- */
  .links{list-style:none; margin:18px 0 0; padding:0; width:100%;
    border-top:1px solid var(--hair)}
  .links a{
    display:flex; align-items:center; gap:14px; text-decoration:none; color:var(--text);
    padding:15px 6px; border-bottom:1px solid var(--hair);
    transition:padding-left .18s ease, color .18s ease;
  }
  .links a:hover{padding-left:12px; color:var(--brass)}
  .links .k{font-family:var(--mono); font-size:10.5px; letter-spacing:.14em; text-transform:uppercase;
    color:var(--muted); width:22px; flex:none; text-align:center}
  .links .v{font-size:15px; font-weight:600; flex:1; text-align:left}
  .links .go{font-family:var(--mono); font-size:12px; color:var(--brass); opacity:.55}

  /* ---- footer strip ---- */
  .strip{
    margin:24px 0 0; width:100%;
    font-family:var(--mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase;
    color:var(--muted); display:flex; justify-content:space-between; gap:10px;
    border-top:1px solid var(--hair); padding-top:14px;
  }
  .strip .grant{color:var(--brass)}

  a:focus-visible,.save:focus-visible{outline:2px solid var(--brass); outline-offset:3px; border-radius:6px}

  @keyframes rise{from{opacity:0; transform:translateY(14px)} to{opacity:1; transform:none}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @media (prefers-reduced-motion:reduce){
    .card,.seal{animation:none}
    .seal .edge{animation:none}
    *{transition:none!important}
  }
</style>
</head>
<body>
  <main class="card">
    <svg class="seal" viewBox="0 0 200 200" role="img" aria-label="Ash Clements seal">
      <defs>
        <radialGradient id="disc" cx="42%" cy="36%" r="75%">
          <stop offset="0%" stop-color="#20263a"/>
          <stop offset="100%" stop-color="#0b0d12"/>
        </radialGradient>
        <path id="ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/>
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="#c9a24b" stroke-width="1.5" opacity=".5"/>
      <circle cx="100" cy="100" r="63" fill="url(#disc)" stroke="#c9a24b" stroke-width="2"/>
      <g class="edge">
        <text class="ring-txt"><textPath href="#ring" startOffset="0%">· ASH CLEMENTS · AI SECURITY · RED TEAM · RUNTIME DEFENSE </textPath></text>
      </g>
      <text x="100" y="112" text-anchor="middle" font-family="var(--sans)" font-weight="800" font-size="42" fill="#ecd08a" letter-spacing="-1">Ash</text>
      <text x="100" y="132" text-anchor="middle" font-family="var(--mono)" font-size="9" letter-spacing="3" fill="#c9a24b">AI · SEC</text>
    </svg>

    <h1 class="name">Ash Clements</h1>
    <p class="role">AI Security</p>
    <p class="org">Red Team + Runtime Defense</p>

    <p class="hook"><b>Break it to fix it.</b></p>

    <button class="save" id="save" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
      <span id="saveLabel">Save my contact</span>
    </button>

    <ul class="links">
      <li><a href="https://www.linkedin.com/in/ash-clements-75b62b22/" target="_blank" rel="noopener">
        <span class="k">in</span><span class="v">LinkedIn</span><span class="go">open ↗</span></a></li>
      <li><a href="https://ashclements.dev" target="_blank" rel="noopener">
        <span class="k">://</span><span class="v">ashclements.dev</span><span class="go">open ↗</span></a></li>
      <li><a href="https://aiseal.ai" target="_blank" rel="noopener">
        <span class="k">◆</span><span class="v">AISeal.ai</span><span class="go">open ↗</span></a></li>
      <li><a href="mailto:ash@ashclements.dev">
        <span class="k">@</span><span class="v">Email me</span><span class="go">write ↗</span></a></li>
    </ul>

    <div class="strip">
      <span>// Met at</span>
      <span class="grant">Black Hat · DEF CON 2026</span>
    </div>
  </main>

<script>
  function buildVCard(){
    // LinkedIn + email confirmed. Phone intentionally omitted (public page, hacker con).
    return [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Clements;Ash;;;",
      "FN:Ash Clements",
      "TITLE:AI Security · Red Team + Runtime Defense",
      "EMAIL;TYPE=INTERNET,WORK:ash@ashclements.dev",
      // "TEL;TYPE=CELL:+1XXXXXXXXXX",   // uncomment to include a phone number
      "URL:https://ashclements.dev",
      "URL:https://aiseal.ai",
      "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/ash-clements-75b62b22/",
      "NOTE:AI Security. Red team + runtime defense. Met at Black Hat / DEF CON 2026.",
      "END:VCARD"
    ].join("\r\n");
  }

  document.getElementById("save").addEventListener("click", function(){
    var btn=this, label=document.getElementById("saveLabel");
    try{
      var blob=new Blob([buildVCard()],{type:"text/vcard;charset=utf-8"});
      var url=URL.createObjectURL(blob);
      var a=document.createElement("a");
      a.href=url; a.download="Ash-Clements.vcf";
      document.body.appendChild(a); a.click();
      setTimeout(function(){URL.revokeObjectURL(url); a.remove();},1500);
    }catch(e){
      window.location.href="data:text/vcard;charset=utf-8,"+encodeURIComponent(buildVCard());
    }
    btn.classList.add("done"); label.textContent="✓ Contact saved";
    setTimeout(function(){btn.classList.remove("done"); label.textContent="Save my contact";},2600);
  });
</script>
</body>
</html>
`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
