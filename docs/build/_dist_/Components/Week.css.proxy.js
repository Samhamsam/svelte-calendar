// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".week.svelte-1f2gkwh.svelte-1f2gkwh{padding:0;margin:0;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-flow:row;-webkit-flex-flow:row;justify-content:space-around;-ms-grid-column:1;grid-column:1}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 1){-ms-grid-row:1;grid-row:1}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 2){-ms-grid-row:2;grid-row:2}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 3){-ms-grid-row:3;grid-row:3}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 4){-ms-grid-row:4;grid-row:4}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 5){-ms-grid-row:5;grid-row:5}.week.svelte-1f2gkwh.svelte-1f2gkwh:nth-child(6n + 6){-ms-grid-row:6;grid-row:6}.day.svelte-1f2gkwh.svelte-1f2gkwh{margin:2px;color:var(--day-text-color);font-weight:bold;text-align:center;font-size:16px;flex:1 0 auto;height:auto;display:flex;flex-basis:0}.day.outside-month.svelte-1f2gkwh.svelte-1f2gkwh,.day.is-disabled.svelte-1f2gkwh.svelte-1f2gkwh{opacity:0.35}.day.svelte-1f2gkwh.svelte-1f2gkwh:before{content:'';float:left;padding-top:100%}.day--label.svelte-1f2gkwh.svelte-1f2gkwh{color:var(--day-text-color);display:flex;justify-content:center;flex-direction:column;width:100%;position:relative;border:1px solid #fff;border-radius:50%;margin:10%;padding:0;align-items:center;background:var(--day-background-color);cursor:pointer;transition:all 100ms linear;font-weight:normal}.day--label.disabled.svelte-1f2gkwh.svelte-1f2gkwh{cursor:default}@media(min-width: 480px){.day--label.highlighted.svelte-1f2gkwh.svelte-1f2gkwh,.day--label.svelte-1f2gkwh.svelte-1f2gkwh:not(.disabled):hover{background:var(--day-highlighted-background-color);border-color:var(--day-highlighted-background-color);color:var(--day-highlighted-text-color)}}.day--label.shake-date.svelte-1f2gkwh.svelte-1f2gkwh{animation:svelte-1f2gkwh-shake 0.4s 1 linear}.day--label.selected.svelte-1f2gkwh.svelte-1f2gkwh:hover,.day--label.selected.svelte-1f2gkwh.svelte-1f2gkwh,.day--label.svelte-1f2gkwh.svelte-1f2gkwh:active:not(.disabled){background-color:var(--highlight-color);border-color:var(--highlight-color);color:#fff}.day.is-today.svelte-1f2gkwh .day--label.svelte-1f2gkwh,.day.is-today.svelte-1f2gkwh .day--label.svelte-1f2gkwh:hover{opacity:1;background:none;border-color:var(--highlight-color);color:#000}@keyframes svelte-1f2gkwh-shake{0%{transform:translate(7px)}20%{transform:translate(-7px)}40%{transform:translate(3px)}60%{transform:translate(-3px)}80%{transform:translate(1px)}100%{transform:translate(0px)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}