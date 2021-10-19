import{r as t,c as o,a as n,b as e,F as r,d as p,e as s,o as l}from"./app.af3e3276.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=p('<h1 id="\u63A7\u5236-nginx" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236-nginx" aria-hidden="true">#</a> \u63A7\u5236 nginx</h1><ul><li><a href="#%E9%85%8D%E7%BD%AE%E5%8F%98%E6%9B%B4">\u914D\u7F6E\u53D8\u66F4</a></li><li><a href="#%E6%97%A5%E5%BF%97%E8%BD%AE%E8%BD%AC">\u65E5\u5FD7\u8F6E\u8F6C</a></li><li><a href="#%E5%8D%87%E7%BA%A7%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6">\u5347\u7EA7\u53EF\u6267\u884C\u6587\u4EF6</a></li></ul><p>\u53EF\u4EE5\u7528\u4FE1\u53F7\u63A7\u5236 nginx\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3B\u8FDB\u7A0B\uFF08Master\uFF09\u7684 pid \u5199\u5728 <code>/use/local/nginx/logs/nginx.pid</code> \u6587\u4EF6\u4E2D\u3002\u8FD9\u4E2A\u6587\u4EF6\u7684\u4F4D\u7F6E\u53EF\u4EE5\u5728\u914D\u7F6E\u65F6\u66F4\u6539\u6216\u8005\u5728 nginx.conf \u6587\u4EF6\u4E2D\u4F7F\u7528 <code>pid</code> \u6307\u4EE4\u66F4\u6539\u3002Master \u8FDB\u7A0B\u652F\u6301\u4EE5\u4E0B\u4FE1\u53F7\uFF1A</p><table><thead><tr><th style="text-align:left;">\u4FE1\u53F7</th><th style="text-align:left;">\u4F5C\u7528</th></tr></thead><tbody><tr><td style="text-align:left;">TERM, INT</td><td style="text-align:left;">\u5FEB\u901F\u5173\u95ED</td></tr><tr><td style="text-align:left;">QUIT</td><td style="text-align:left;">\u6B63\u5E38\u9000\u51FA</td></tr><tr><td style="text-align:left;">HUP</td><td style="text-align:left;">\u5F53\u6539\u53D8\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u5C06\u6709\u4E00\u6BB5\u8FC7\u6E21\u65F6\u95F4\u6BB5\uFF08\u4EC5 FreeBSD \u548C Linux\uFF09\uFF0C\u65B0\u542F\u52A8\u7684 Worker \u8FDB\u7A0B\u5C06\u5E94\u7528\u65B0\u7684\u914D\u7F6E\uFF0C\u65E7\u7684 Worker \u8FDB\u7A0B\u5C06\u88AB\u5E73\u6ED1\u9000\u51FA</td></tr><tr><td style="text-align:left;">USR1</td><td style="text-align:left;">\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6</td></tr><tr><td style="text-align:left;">USR2</td><td style="text-align:left;">\u5347\u7EA7\u53EF\u6267\u884C\u6587\u4EF6</td></tr><tr><td style="text-align:left;">WINCH</td><td style="text-align:left;">\u6B63\u5E38\u5173\u95ED Worker \u8FDB\u7A0B</td></tr></tbody></table><p>Worker \u8FDB\u7A0B\u4E5F\u662F\u53EF\u4EE5\u7528\u4FE1\u53F7\u63A7\u5236\u7684\uFF0C\u5C3D\u7BA1\u8FD9\u4E0D\u662F\u5FC5\u987B\u7684\u3002\u652F\u6301\u4EE5\u4E0B\u4FE1\u53F7\uFF1A</p>',5),b=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"\u4FE1\u53F7"),n("th",{style:{"text-align":"left"}},"\u4F5C\u7528")])],-1),k=n("tr",null,[n("td",{style:{"text-align":"left"}},"TERM, INT"),n("td",{style:{"text-align":"left"}},"\u5FEB\u901F\u5173\u95ED")],-1),d=n("tr",null,[n("td",{style:{"text-align":"left"}},"QUIT"),n("td",{style:{"text-align":"left"}},"\u6B63\u5E38\u5173\u95ED")],-1),m=n("tr",null,[n("td",{style:{"text-align":"left"}},"USR1"),n("td",{style:{"text-align":"left"}},"\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6")],-1),g=n("td",{style:{"text-align":"left"}},"WINCH",-1),x={style:{"text-align":"left"}},h=s("\u8C03\u8BD5\u5F02\u5E38\u7EC8\u6B62\uFF08\u9700\u8981\u5F00\u542F "),y={href:"http://nginx.org/en/docs/ngx_core_module.html#debug_points",target:"_blank",rel:"noopener noreferrer"},_=s("debug_points"),v=s("\uFF09"),f=p(`<h2 id="\u914D\u7F6E\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53D8\u66F4" aria-hidden="true">#</a> \u914D\u7F6E\u53D8\u66F4</h2><p>\u4E3A\u4E86\u8BA9 nginx \u91CD\u65B0\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E94\u5C06 <code>HUP</code> \u4FE1\u53F7\u53D1\u9001\u7ED9 Master \u8FDB\u7A0B\u3002Master \u8FDB\u7A0B\u9996\u5148\u4F1A\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7684\u8BED\u6CD5\u6709\u6548\u6027\uFF0C\u4E4B\u540E\u5C1D\u8BD5\u5E94\u7528\u65B0\u7684\u914D\u7F6E\uFF0C\u5373\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6\u548C\u65B0\u7684 socket\u3002\u5982\u679C\u5931\u8D25\u4E86\uFF0C\u5B83\u4F1A\u56DE\u6EDA\u66F4\u6539\u5E76\u7EE7\u7EED\u4F7F\u7528\u65E7\u7684\u914D\u7F6E\u3002\u5982\u679C\u6210\u529F\uFF0C\u5B83\u5C06\u542F\u52A8\u65B0\u7684 Worker \u8FDB\u7A0B\u5E76\u5411\u65E7\u7684 Worker \u8FDB\u7A0B\u53D1\u9001\u6D88\u606F\u8BF7\u6C42\u5B83\u4EEC\u6B63\u5E38\u5173\u95ED\u3002\u65E7\u7684 Worker \u8FDB\u7A0B\u5173\u95ED\u76D1\u542C socket \u5E76\u7EE7\u7EED\u4E3A\u65E7\u7684\u5BA2\u6237\u7AEF\u670D\u52A1\uFF0C\u5F53\u6240\u6709\u65E7\u7684\u5BA2\u6237\u7AEF\u88AB\u5904\u7406\u5B8C\u6210\uFF0C\u65E7\u7684 Worker \u8FDB\u7A0B\u5C06\u88AB\u5173\u95ED\u3002</p><p>\u6211\u4EEC\u6765\u4E3E\u4F8B\u8BF4\u660E\u4E00\u4E0B\u3002 \u5047\u8BBE nginx \u662F\u5728 FreeBSD 4.x \u547D\u4EE4\u884C\u4E0A\u8FD0\u884C\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> axw -o pid,ppid,user,%cpu,vsz,wchan,command <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">&#39;(nginx|PID)&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F97\u5230\u4EE5\u4E0B\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">33126</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1148</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">33127</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1380</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33128</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33129</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u628A <code>HUP</code> \u4FE1\u53F7\u53D1\u9001\u5230 master \u8FDB\u7A0B\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\u5C06\u4F1A\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">33126</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1164</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">33129</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1380</span> kqread nginx: worker process is shutting down <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33134</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33135</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33136</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5176\u4E2D\u4E00\u4E2A PID \u4E3A 33129 \u7684 worker \u8FDB\u7A0B\u4ECD\u7136\u5728\u7EE7\u7EED\u5DE5\u4F5C\uFF0C\u8FC7\u4E00\u6BB5\u65F6\u95F4\u4E4B\u540E\u5B83\u9000\u51FA\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">33126</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1164</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">33134</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33135</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33136</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u65E5\u5FD7\u8F6E\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u8F6E\u8F6C" aria-hidden="true">#</a> \u65E5\u5FD7\u8F6E\u8F6C</h2><p>\u4E3A\u4E86\u505A\u65E5\u5FD7\u8F6E\u8F6C\uFF0C\u9996\u5148\u9700\u8981\u91CD\u547D\u540D\u3002\u4E4B\u540E\u5E94\u8BE5\u53D1\u9001 <code>USR1</code> \u4FE1\u53F7\u7ED9 master \u8FDB\u7A0B\u3002Master \u8FDB\u7A0B\u5C06\u4F1A\u91CD\u65B0\u6253\u5F00\u5F53\u524D\u6240\u6709\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u5206\u914D\u7ED9\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u672A\u7ECF\u6388\u6743\u7684\u7528\u6237\u4E3A\u6240\u6709\u8005\u7684 worker \u8FDB\u7A0B\u3002\u6210\u529F\u91CD\u65B0\u6253\u5F00\u4E4B\u540E Master \u8FDB\u7A0B\u5C06\u4F1A\u5173\u95ED\u6240\u6709\u6253\u5F00\u7684\u6587\u4EF6\u5E76\u4E14\u53D1\u9001\u6D88\u606F\u7ED9 worker \u8FDB\u7A0B\u8981\u6C42\u5B83\u4EEC\u91CD\u65B0\u6253\u5F00\u6587\u4EF6\u3002Worker \u8FDB\u7A0B\u91CD\u65B0\u6253\u5F00\u65B0\u6587\u4EF6\u548C\u7ACB\u5373\u5173\u95ED\u65E7\u6587\u4EF6\u3002\u56E0\u6B64\uFF0C\u65E7\u7684\u6587\u4EF6\u51E0\u4E4E\u53EF\u4EE5\u7ACB\u5373\u7528\u4E8E\u540E\u671F\u5904\u7406\uFF0C\u4F8B\u5982\u538B\u7F29\u3002</p><h2 id="\u5347\u7EA7\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u5347\u7EA7\u53EF\u6267\u884C\u6587\u4EF6</h2><p>\u4E3A\u4E86\u5347\u7EA7\u670D\u52A1\u5668\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u9996\u5148\u5E94\u8BE5\u5C06\u65B0\u7684\u53EF\u6267\u884C\u6587\u4EF6\u66FF\u6362\u65E7\u7684\u53EF\u6267\u884C\u6587\u4EF6\u3002\u4E4B\u540E\u53D1\u9001 <code>USR2</code> \u4FE1\u53F7\u5230 master \u8FDB\u7A0B\u3002Master \u8FDB\u7A0B\u9996\u5148\u5C06\u4EE5\u8FDB\u7A0B ID \u6587\u4EF6\u91CD\u547D\u540D\u4E3A\u4EE5 <code>.oldbin</code> \u4E3A\u540E\u7F00\u7684\u65B0\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>/usr/local/nginx/logs/nginx.pid.oldbin</code>\u3002\u4E4B\u540E\u542F\u52A8\u65B0\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u548C\u4F9D\u6B21\u671F\u5F85\u80FD\u591F\u65B0\u7684 worker \u8FDB\u7A0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">33126</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1164</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">33134</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33135</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1380</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">33136</span> <span class="token number">33126</span> nobody   <span class="token number">0.0</span>  <span class="token number">1368</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36264</span> <span class="token number">33126</span> root     <span class="token number">0.0</span>  <span class="token number">1148</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">36265</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36266</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36267</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E4B\u540E\u6240\u6709\u7684 worker \u8FDB\u7A0B\uFF08\u65E7\u7684\u548C\u65B0\u7684\uFF09\u7EE7\u7EED\u63A5\u6536\u8BF7\u6C42\uFF0C\u5982\u679C <code>WINCH</code> \u4FE1\u53F7\u88AB\u53D1\u9001\u7ED9\u4E86\u7B2C\u4E00\u4E2A master \u8FDB\u7A0B\uFF0C\u5B83\u5C06\u5411\u5176 worker \u8FDB\u7A0B\u53D1\u9001\u6D88\u606F\u8981\u6C42\u5B83\u4EEC\u6B63\u5E38\u5173\u95ED\uFF0C\u4E4B\u540E\u5B83\u4EEC\u5F00\u59CB\u9000\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
33135 33126 nobody   0.0  1380 kqread nginx: worker process is shutting down (nginx)
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FC7\u4E00\u6BB5\u65F6\u95F4\uFF0C\u4EC5\u6709\u65B0\u7684 worker \u8FDB\u7A0B\u5904\u7406\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">33126</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1164</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">36264</span> <span class="token number">33126</span> root     <span class="token number">0.0</span>  <span class="token number">1148</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">36265</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36266</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36267</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u65E7\u7684 master \u8FDB\u7A0B\u4E0D\u4F1A\u5173\u95ED\u5B83\u7684\u76D1\u542C socket\uFF0C\u5E76\u4E14\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u53EF\u4EE5\u7BA1\u7406\u5B83\u6765\u542F\u52A8 worker \u8FDB\u7A0B\u3002\u5982\u679C\u51FA\u4E8E\u67D0\u4E9B\u539F\u56E0\u4E0D\u80FD\u63A5\u53D7\u65B0\u7684\u53EF\u6267\u884C\u6587\u4EF6\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\u4E4B\u4E00\uFF1A</p><ul><li>\u53D1\u9001 <code>HUP</code> \u4FE1\u53F7\u7ED9\u65E7\u7684 master \u8FDB\u7A0B\uFF0C\u65E7\u7684 master \u8FDB\u7A0B\u5C06\u4F1A\u542F\u52A8\u4E0D\u4F1A\u91CD\u65B0\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u7684 worker \u8FDB\u7A0B\u3002\u4E4B\u540E\uFF0C\u901A\u8FC7\u5C06 <code>QUIT</code> \u4FE1\u53F7\u53D1\u9001\u5230\u65B0\u7684\u4E3B\u8FDB\u7A0B\u5C31\u53EF\u4EE5\u6B63\u5E38\u5173\u95ED\u6240\u6709\u7684\u65B0\u8FDB\u7A0B\u3002</li><li>\u53D1\u9001 <code>TERM</code> \u4FE1\u53F7\u5230\u65B0\u7684 master \u8FDB\u7A0B\uFF0C\u5B83\u5C06\u4F1A\u53D1\u9001\u4E00\u4E2A\u6D88\u606F\u7ED9 worker \u8FDB\u7A0B\u8981\u6C42\u5B83\u4EEC\u7ACB\u5373\u5173\u95ED\uFF0C\u5E76\u4E14\u5B83\u4EEC\u7ACB\u5373\u9000\u51FA\uFF08\u5982\u679C\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\u65B0\u7684\u8FDB\u7A0B\u6CA1\u6709\u9000\u51FA\uFF0C\u5E94\u8BE5\u53D1\u9001 <code>KILL</code> \u4FE1\u53F7\u8BA9\u5B83\u4EEC\u5F3A\u5236\u9000\u51FA\uFF09\u3002\u5F53\u65B0\u7684 master \u8FDB\u7A0B\u9000\u51FA\u65F6\uFF0C\u65E7 master \u5C06\u4F1A\u81EA\u52A8\u542F\u52A8\u65B0\u7684 worker \u8FDB\u7A0B\u3002</li></ul><p>\u65B0\u7684 master \u8FDB\u7A0B\u9000\u51FA\u4E4B\u540E\uFF0C\u65E7\u7684 master \u8FDB\u7A0B\u4F1A\u4ECE\u4EE5\u8FDB\u7A0B ID \u547D\u540D\u7684\u6587\u4EF6\u4E2D\u5FFD\u7565\u6389 <code>.oldbin</code> \u540E\u7F00\u7684\u6587\u4EF6\u3002</p><p>\u5982\u679C\u5347\u7EA7\u6210\u529F\uFF0C\u5E94\u8BE5\u53D1\u9001 <code>QUIT</code> \u4FE1\u53F7\u7ED9\u65E7\u7684 master \u8FDB\u7A0B\uFF0C\u4EC5\u4EC5\u65B0\u7684\u8FDB\u7A0B\u9A7B\u7559\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  PID  <span class="token environment constant">PPID</span> <span class="token environment constant">USER</span>    %CPU   VSZ WCHAN  COMMAND
<span class="token number">36264</span>     <span class="token number">1</span> root     <span class="token number">0.0</span>  <span class="token number">1148</span> pause  nginx: master process /usr/local/nginx/sbin/nginx
<span class="token number">36265</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36266</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
<span class="token number">36267</span> <span class="token number">36264</span> nobody   <span class="token number">0.0</span>  <span class="token number">1364</span> kqread nginx: worker process <span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,25),w={href:"http://nginx.org/en/docs/control.html",target:"_blank",rel:"noopener noreferrer"},P=s("http://nginx.org/en/docs/control.html");function D(E,I){const a=t("OutboundLink");return l(),o(r,null,[u,n("table",null,[b,n("tbody",null,[k,d,m,n("tr",null,[g,n("td",x,[h,n("a",y,[_,e(a)]),v])])])]),f,n("ul",null,[n("li",null,[n("a",w,[P,e(a)])])])],64)}var q=c(i,[["render",D]]);export{q as default};
