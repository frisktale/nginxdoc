import{r as o,c as i,a as e,b as n,w as a,F as d,d as l,e as t,o as _}from"./app.af3e3276.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const c={},r=l(`<h1 id="ngx-http-gzip-static-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-gzip-static-module" aria-hidden="true">#</a> ngx_http_gzip_static_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#gzip_static">gzip_static</a></li></ul></li></ul><p><code>ngx_http_gzip_static_module</code> \u6A21\u5757\u5141\u8BB8\u53D1\u9001\u4EE5 <strong>.gz</strong> \u7ED3\u5C3E\u7684\u9884\u538B\u7F29\u6587\u4EF6\u66FF\u4EE3\u666E\u901A\u6587\u4EF6\u3002 \u8BE5\u6A21\u5757\u9ED8\u8BA4\u4E0D\u4F1A\u88AB\u6784\u5EFA\u5230 nginx \u4E2D\uFF0C\u9700\u8981\u5728\u7F16\u8BD1\u65F6\u52A0\u5165 <code>--with-http_gzip_static_module</code> \u914D\u7F6E\u53C2\u6570\u542F\u7528\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">gzip_static</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_proxied</span> expired no-cache no-store private auth</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="gzip-static" tabindex="-1"><a class="header-anchor" href="#gzip-static" aria-hidden="true">#</a> gzip_static</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>gzip_static</strong> <code>on</code> | <code>off</code> | <code>always</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">gzip_static off;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">http\u3001server\u3001location</td></tr></tbody></table>`,10),h=t("\u5F00\u542F("),g=e("strong",null,"on",-1),u=t(")\u6216\u7981\u7528("),x=e("strong",null,"off",-1),f=t(")\u4F1A\u68C0\u67E5\u9884\u538B\u7F29\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002\u4E0B\u5217\u6307\u4EE4\u4E5F\u4F1A\u88AB\u5F71\u54CD\u5230 "),m=t("gzip_http_verson"),z=t("\uFF0C "),E=t("gzip_proxied"),b=t("\uFF0C "),v=t("gzip_disable"),y=t("\uFF0C "),k=t("gzip_vary"),A=t("\u3002"),w=t("\u503C\u4E3A "),F=e("strong",null,"always",-1),D=t(" (1.3.6)\uFF0C\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u4F7F\u7528\u538B\u7F29\u6587\u4EF6\uFF0C\u4E0D\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u652F\u6301\u3002\u5982\u679C\u78C1\u76D8\u4E0A\u6CA1\u6709\u672A\u88AB\u538B\u7F29\u7684\u6587\u4EF6\u6216\u8005 "),N=t("ngx_http_gunzip_module"),V=t(" \u6A21\u5757\u88AB\u542F\u7528\uFF0C\u8FD9\u4E2A\u53C2\u6570\u975E\u5E38\u6709\u7528\u3002"),B=e("p",null,[t("\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"gzip"),t("\u547D\u4EE4\uFF0C\u6216\u8005\u4EFB\u4F55\u517C\u5BB9\u6587\u4EF6\u8FDB\u884C\u538B\u7F29\u3002\u5EFA\u8BAE\u538B\u7F29\u6587\u4EF6\u548C\u6E90\u6587\u4EF6\u7684\u4FEE\u6539\u65E5\u671F\u548C\u65F6\u95F4\u4FDD\u6301\u4E00\u81F4\u3002")],-1);function j(C,L){const s=o("RouterLink");return _(),i(d,null,[r,e("p",null,[h,g,u,x,f,n(s,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_module.html#gzip_http_version"},{default:a(()=>[m]),_:1}),z,n(s,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_module.html#gzip_proxied"},{default:a(()=>[E]),_:1}),b,n(s,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_module.html#gzip_disable"},{default:a(()=>[v]),_:1}),y,n(s,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_module.html#gzip_vary"},{default:a(()=>[k]),_:1}),A]),e("p",null,[w,F,D,n(s,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gunzip_module.html"},{default:a(()=>[N]),_:1}),V]),B],64)}var T=p(c,[["render",j]]);export{T as default};
