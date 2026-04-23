export const CSS = `
@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{-webkit-font-smoothing:antialiased;}

.cab{font-family:'Cabinet Grotesk','Arial Black',sans-serif!important;}
.sat{font-family:'Satoshi','Arial',sans-serif!important;}

@keyframes mq{to{transform:translateX(-50%);}}
.mq{animation:mq 32s linear infinite;display:flex;width:max-content;}

@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
.float{animation:float 5s ease-in-out infinite;}

.rv{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease;}
.rv.vi{opacity:1;transform:none;}
.d1{transition-delay:.05s;}.d2{transition-delay:.15s;}.d3{transition-delay:.25s;}.d4{transition-delay:.35s;}

.nl{font-family:'Satoshi',Arial,sans-serif;font-weight:700;font-size:15px;color:#000;
    cursor:pointer;position:relative;padding:2px 0;text-decoration:none;}
.nl::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;
           background:#000;transition:width .2s;}
.nl:hover::after{width:100%;}

.btn{display:inline-flex;align-items:center;gap:8px;
     font-family:'Satoshi',Arial,sans-serif;font-weight:700;font-size:14px;
     text-transform:uppercase;letter-spacing:.05em;cursor:pointer;
     border:2px solid #000;border-radius:10px;padding:14px 28px;
     transition:transform .15s cubic-bezier(.175,.885,.32,1.275),box-shadow .15s;
     white-space:nowrap;line-height:1;}
.btn-k{background:#000;color:#fff;box-shadow:8px 8px 0 #000;}
.btn-k:hover{transform:translate(4px,4px);box-shadow:4px 4px 0 #000;}
.btn-k:active{transform:translate(8px,8px);box-shadow:0 0 0 #000;}
.btn-w{background:#fff;color:#000;box-shadow:4px 4px 0 #000;}
.btn-w:hover{transform:translate(4px,4px);box-shadow:0 0 0 #000;}
.btn-y{background:#ffe17c;color:#000;box-shadow:4px 4px 0 #000;}
.btn-y:hover{transform:translate(4px,4px);box-shadow:0 0 0 #000;}
.btn-sm{padding:10px 22px;font-size:12px;border-radius:8px;box-shadow:3px 3px 0 #000;}
.btn-sm:hover{transform:translate(3px,3px);box-shadow:0 0 0 #000;}
.btn-lg{padding:18px 40px;font-size:16px;}

.feat-card{background:#fff;border:2px solid #000;box-shadow:4px 4px 0 #000;
           padding:28px;transition:transform .15s,box-shadow .15s;cursor:default;}
.feat-card:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #000;}
.feat-card:hover .feat-icon{background:#ffe17c!important;}

.proj-card{border:2px solid #000;box-shadow:6px 6px 0 #000;overflow:hidden;
           background:#fff;transition:transform .15s,box-shadow .15s;cursor:pointer;}
.proj-card:hover{transform:translate(-3px,-3px);box-shadow:9px 9px 0 #000;}

.dv{position:relative;height:220px;overflow:hidden;}
.dv-grid{position:absolute;inset:0;background-image:
  linear-gradient(rgba(0,0,0,.06) 1px,transparent 1px),
  linear-gradient(90deg,rgba(0,0,0,.06) 1px,transparent 1px);
  background-size:16px 16px;opacity:.8;pointer-events:none;}
.dv-dark .dv-grid{background-image:
  linear-gradient(rgba(255,225,124,.08) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,225,124,.08) 1px,transparent 1px);}
.dv-blob{position:absolute;right:-28px;bottom:-28px;width:110px;height:110px;
         transform:rotate(18deg);pointer-events:none;}

.dv-phone{position:absolute;top:50%;left:50%;background:#0b0b0b;
          border:2px solid #000;border-radius:18px;padding:4px 4px 5px;
          overflow:hidden;transition:transform .45s cubic-bezier(.2,.8,.2,1),
                                      box-shadow .35s ease;
          box-shadow:5px 5px 0 rgba(0,0,0,.55);}
.dv-screen{width:100%;height:100%;background:#fff;border-radius:12px;overflow:hidden;}
.dv-screen img{display:block;width:100%;height:100%;object-fit:cover;}
.dv-notch{position:absolute;top:5px;left:50%;transform:translateX(-50%);
          width:36%;height:4px;background:#000;border-radius:0 0 4px 4px;z-index:2;}

.dv-phone-main{width:112px;height:180px;z-index:2;
               transform:translate(-50%,-50%) rotate(-6deg);}
.dv-phone-back{width:104px;height:168px;z-index:1;opacity:.92;
               transform:translate(-18%,-52%) rotate(10deg);
               box-shadow:3px 3px 0 rgba(0,0,0,.4);}

.dv-tablet.dv-phone-main{width:150px;height:180px;border-radius:14px;
                         transform:translate(-50%,-50%) rotate(-4deg);}
.dv-tablet.dv-phone-back{width:140px;height:168px;border-radius:12px;
                         transform:translate(-18%,-52%) rotate(8deg);}

.proj-card:hover .dv-phone-main{transform:translate(-62%,-56%) rotate(-10deg);
                                box-shadow:8px 8px 0 rgba(0,0,0,.7);}
.proj-card:hover .dv-phone-back{transform:translate(20%,-48%) rotate(16deg);
                                opacity:1;box-shadow:5px 5px 0 rgba(0,0,0,.55);}
.proj-card:hover .dv-tablet.dv-phone-main{transform:translate(-62%,-56%) rotate(-8deg);}
.proj-card:hover .dv-tablet.dv-phone-back{transform:translate(22%,-48%) rotate(12deg);}

.dv-tag{position:absolute;top:14px;right:14px;background:#fff;
        border:2px solid #000;border-radius:999px;padding:3px 12px;z-index:3;
        box-shadow:2px 2px 0 #000;}
.dv-peek{position:absolute;bottom:14px;left:14px;background:#ffe17c;
         border:2px solid #000;padding:4px 10px;z-index:3;
         box-shadow:2px 2px 0 #000;color:#000;
         opacity:0;transform:translateY(6px);
         transition:opacity .25s,transform .25s;}
.proj-card:hover .dv-peek{opacity:1;transform:translateY(0);}

.test-card{background:#fff;border:2px solid #000;box-shadow:4px 4px 0 #000;
           padding:28px;border-radius:0 24px 0 24px;}

.persona-card{border:2px solid #000;padding:32px;position:relative;overflow:hidden;
              transition:transform .15s,box-shadow .15s;}
.persona-card:hover{transform:translate(-2px,-2px);box-shadow:8px 8px 0 #000;}

.fl{font-family:'Satoshi',Arial,sans-serif;font-size:13px;font-weight:500;color:#555;
    cursor:pointer;transition:color .15s;display:block;margin-bottom:10px;}
.fl:hover{color:#b7c6c2;}

.soc{width:42px;height:42px;background:#272727;border:1.5px solid #3a3a3a;
     display:flex;align-items:center;justify-content:center;
     cursor:pointer;transition:all .15s;text-decoration:none;}
.soc:hover{background:#ffe17c;border-color:#000;}
.soc:hover svg{fill:#000;}

.pill{display:inline-flex;align-items:center;gap:6px;background:#fff;
      border:2px solid #000;border-radius:999px;padding:5px 14px;
      font-family:'Satoshi',Arial,sans-serif;font-weight:700;font-size:12px;color:#000;
      box-shadow:2px 2px 0 #000;}

.outline-text{-webkit-text-stroke:3px #000;-webkit-text-fill-color:transparent;}
.outline-text-w{-webkit-text-stroke:3px #fff;-webkit-text-fill-color:transparent;}

@media(max-width:960px){
  .g2{grid-template-columns:1fr!important;}
  .g3{grid-template-columns:1fr!important;}
  .g4{grid-template-columns:1fr 1fr!important;}
  .hide-m{display:none!important;}
  .h1-xl{font-size:52px!important;}
  .h2-xl{font-size:36px!important;}
}
@media(max-width:600px){
  .g4{grid-template-columns:1fr!important;}
  .h1-xl{font-size:40px!important;}
}
`;
