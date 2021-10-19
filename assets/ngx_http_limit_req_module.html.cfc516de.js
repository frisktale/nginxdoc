import{r as t,c as s,a as e,b as a,F as r,d as i,e as l,o}from"./app.af3e3276.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const d={},c=i(`<h1 id="ngx-http-limit-req-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-limit-req-module" aria-hidden="true">#</a> ngx_http_limit_req_module</h1><ul><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#limit_req">limit_req</a></li><li><a href="#limit_req_log_level">limit_req_log_level</a></li><li><a href="#limit_req_status">limit_req_status</a></li><li><a href="#limit_req_zone">limit_req_zone</a></li></ul></li></ul><p><code>ngx_http_limit_req_module</code> \u6A21\u5757\uFF080.7.21\uFF09\u7528\u4E8E\u9650\u5236\u6BCF\u4E2A\u5DF2\u5B9A\u4E49 key \u7684\u8BF7\u6C42\u5904\u7406\u901F\u7387\uFF0C\u7279\u522B\u662F\u6765\u81EA\u5355\u4E2A IP \u5730\u5740\u8BF7\u6C42\u7684\u5904\u7406\u901F\u7387\u3002\u9650\u5236\u673A\u5236\u91C7\u7528\u4E86 <strong>leaky bucket</strong> \uFF08\u6F0F\u6876\u7B97\u6CD5\uFF09\u65B9\u6CD5\u5B8C\u6210\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>

    ...

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>

        ...

        <span class="token directive"><span class="token keyword">location</span> /search/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="limit-req" tabindex="-1"><a class="header-anchor" href="#limit-req" aria-hidden="true">#</a> limit_req</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_req</strong> <code>zone=name [burst=number] [nodelay]</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E\u5171\u4EAB\u5185\u5B58\u533A\u57DF\u548C\u8BF7\u6C42\u7684\u6700\u5927\u7A81\u53D1\u5927\u5C0F\u3002\u5982\u679C\u8BF7\u6C42\u901F\u7387\u8D85\u8FC7\u4E3A\u67D0\u4E2A\u533A\u57DF\u914D\u7F6E\u7684\u901F\u7387\uFF0C\u5219\u5B83\u4EEC\u7684\u5904\u7406\u4F1A\u5EF6\u8FDF\uFF0C\u4ECE\u800C\u4F7F\u8BF7\u6C42\u4EE5\u5B9A\u4E49\u7684\u901F\u7387\u5904\u7406\u3002\u8FC7\u591A\u7684\u8BF7\u6C42\u88AB\u5EF6\u8FDF\uFF0C\u76F4\u5230\u5B83\u4EEC\u7684\u6570\u91CF\u8D85\u8FC7\u6700\u5927\u7A81\u53D1\u5927\u5C0F\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8BF7\u6C42\u88AB\u7EC8\u6B62\u5E76\u51FA\u73B0<a href="#limit_req_status">\u9519\u8BEF</a>\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6700\u5927\u7A81\u53D1\u5927\u5C0F\u7B49\u4E8E\u96F6\u3002\u4F8B\u5982\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">location</span> /search/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5E73\u5747\u6BCF\u79D2\u4E0D\u8D85\u8FC7 1 \u4E2A\u8BF7\u6C42\uFF0C\u5E76\u4E14\u7A81\u53D1\u4E0D\u8D85\u8FC7 5 \u4E2A\u8BF7\u6C42\u3002</p><p>\u5982\u679C\u5728\u9650\u5236\u671F\u95F4\u5EF6\u8FDF\u8BF7\u6C42\u8FC7\u591A\uFF0C\u5219\u4E0D\u9700\u8981\u4F7F\u7528\u53C2\u6570 <code>nodelay</code>\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5 nodelay</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u5B58\u5728\u591A\u4E2A <code>limit_req</code> \u6307\u4EE4\u3002\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u914D\u7F6E\u5C06\u9650\u5236\u6765\u81EA\u5355\u4E2A IP \u5730\u5740\u8BF7\u6C42\u7684\u5904\u7406\u901F\u7387\uFF0C\u540C\u65F6\u9650\u5236\u865A\u62DF\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u5904\u7406\u901F\u7387\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=perip:10m rate=1r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m rate=10r/s</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    ...
    <span class="token directive"><span class="token keyword">limit_req</span> zone=perip burst=5 nodelay</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">limit_req</span> zone=perserver burst=10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u4E14\u4EC5\u5F53\u5728\u5F53\u524D\u7EA7\u522B\u4E0A\u6CA1\u6709 <code>limit_req</code> \u6307\u4EE4\u65F6\uFF0C\u8FD9\u4E9B\u6307\u4EE4\u624D\u4ECE\u4E0A\u4E00\u7EA7\u7EE7\u627F\u3002</p><h3 id="limit-req-log-level" tabindex="-1"><a class="header-anchor" href="#limit-req-log-level" aria-hidden="true">#</a> limit_req_log_level</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_req_log_level</strong> <code>info</code> | <code>notice</code> | <code>warn</code> | <code>error</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>limit_req_log_level error;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr><tr><td style="text-align:right;"><strong>\u63D0\u793A</strong></td><td>\u8BE5\u6307\u4EE4\u5728 0.8.18 \u7248\u672C\u4E2D\u51FA\u73B0</td></tr></tbody></table><p>\u5F53\u670D\u52A1\u5668\u7531\u4E8E\u901F\u7387\u8D85\u51FA\u800C\u62D2\u7EDD\u5904\u7406\u8BF7\u6C42\u6216\u5EF6\u8FDF\u8BF7\u6C42\u5904\u7406\u65F6\uFF0C\u8BBE\u7F6E\u6240\u9700\u7684\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B\u3002\u5EF6\u8BEF\u60C5\u51B5\u7684\u8BB0\u5F55\u7B49\u7EA7\u6BD4\u62D2\u7EDD\u60C5\u51B5\u7684\u8BB0\u5F55\u4F4E\u4E00\u4E9B\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6307\u5B9A\u4E86 <code>limit_req_log_level notice</code>\uFF0C\u5219\u5EF6\u8FDF\u60C5\u51B5\u5C06\u4F1A\u5728 <code>info</code> \u7EA7\u522B\u8BB0\u5F55\u3002</p><h3 id="limit-req-status" tabindex="-1"><a class="header-anchor" href="#limit-req-status" aria-hidden="true">#</a> limit_req_status</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_req_status</strong> <code>code</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>limit_req_status 503;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr><tr><td style="text-align:right;"><strong>\u63D0\u793A</strong></td><td>\u8BE5\u6307\u4EE4\u5728 1.3.15 \u7248\u672C\u4E2D\u51FA\u73B0</td></tr></tbody></table><p>\u8BBE\u7F6E\u54CD\u5E94\u62D2\u7EDD\u8BF7\u6C42\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u3002</p><h3 id="limit-req-zone" tabindex="-1"><a class="header-anchor" href="#limit-req-zone" aria-hidden="true">#</a> limit_req_zone</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_req_zone</strong> <code>key zone=name:size rate=rate</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http</td></tr></tbody></table><p>\u4E3A\u5171\u4EAB\u5185\u5B58\u533A\u57DF\u8BBE\u7F6E\u53C2\u6570\uFF0C\u8BE5\u533A\u57DF\u5C06\u4FDD\u7559\u5404\u79CD\u952E\u7684\u72B6\u6001\u3002\u7279\u522B\u662F\uFF0C\u8BE5\u72B6\u6001\u5305\u542B\u5F53\u524D\u7684\u8FDE\u63A5\u6570\u3002<code>key</code> \u53EF\u4EE5\u5305\u542B\u6587\u672C\u3001\u53D8\u91CF\u53CA\u5176\u7EC4\u5408\u3002\u4E0D\u5305\u62EC\u6709\u7A7A\u952E\u503C\u7684\u8BF7\u6C42\u3002</p><blockquote><p>\u5728 1.7.6 \u7248\u672C\u4E4B\u524D\uFF0C\u4E00\u4E2A <code>key</code> \u53EF\u80FD\u53EA\u5305\u542B\u4E00\u4E2A\u53D8\u91CF\u3002</p></blockquote><p>\u7528\u6CD5\u793A\u4F8B\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u8FD9\u91CC\uFF0C\u72B6\u6001\u4FDD\u6301\u5728 10 \u5146\u5B57\u8282\u7684\u533A\u57DF <strong>one</strong>\uFF0C\u5E76\u4E14\u8BE5\u533A\u57DF\u7684\u5E73\u5747\u8BF7\u6C42\u5904\u7406\u901F\u7387\u4E0D\u80FD\u8D85\u8FC7\u6BCF\u79D2 1 \u4E2A\u8BF7\u6C42\u3002</p><p>\u5BA2\u6237\u7AEF IP \u5730\u5740\u4F5C\u4E3A key\u3002\u8BF7\u6CE8\u610F\uFF0C\u4E0D\u662F <code>$remote_addr</code>\uFF0C\u800C\u662F\u4F7F\u7528 <code>$binary_remote_addr</code> \u53D8\u91CF\u3002<code>$binary_remote_addr</code> \u53D8\u91CF\u7684\u5927\u5C0F\u59CB\u7EC8\u4E3A 4 \u4E2A\u5B57\u8282\uFF0C\u5BF9\u4E8E IPv6 \u5730\u5740\u5219\u4E3A 16 \u4E2A\u5B57\u8282\u3002\u5B58\u50A8\u72B6\u6001\u5728 32 \u4F4D\u5E73\u53F0\u4E0A\u59CB\u7EC8\u5360\u7528 32 \u6216 64 \u4E2A\u5B57\u8282\uFF0C\u5728 64 \u4F4D\u5E73\u53F0\u4E0A\u5360\u7528 64 \u4E2A\u5B57\u8282\u3002\u4E00\u5146\u5B57\u8282\u7684\u533A\u57DF\u53EF\u4EE5\u4FDD\u6301\u5927\u7EA6 32000 \u4E2A 32 \u5B57\u8282\u7684\u72B6\u6001\u6216\u5927\u7EA6 16000 \u4E2A 64 \u5B57\u8282\u7684\u72B6\u6001\u6216\u5927\u7EA6 8000 \u4E2A 128 \u5B57\u8282\u7684\u72B6\u6001\u3002</p><p>\u5982\u679C\u533A\u57DF\u5B58\u50A8\u8017\u5C3D\uFF0C\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684\u72B6\u6001\u5C06\u88AB\u5220\u9664\u3002\u5373\u4F7F\u5728\u6B64\u4E4B\u540E\u65E0\u6CD5\u521B\u5EFA\u65B0\u72B6\u6001\uFF0C\u8BE5\u8BF7\u6C42\u4E5F\u4F1A\u56E0<a href="#limit_req_status">\u9519\u8BEF</a>\u800C\u7EC8\u6B62\u3002</p><p>\u901F\u7387\u4EE5\u6BCF\u79D2\u8BF7\u6C42\u6570\uFF08r/s\uFF09\u6307\u5B9A\u3002\u5982\u679C\u9700\u8981\u6BCF\u79D2\u5C0F\u4E8E\u4E00\u4E2A\u8BF7\u6C42\u7684\u901F\u7387\uFF0C\u5219\u6309\u6BCF\u5206\u949F\u8BF7\u6C42\uFF08r/m\uFF09\u6307\u5B9A\u3002\u4F8B\u5982\uFF0C\u6BCF\u79D2\u534A\u8BF7\u6C42\u662F 30r/m\u3002</p><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,35),u={href:"http://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},g=l("http://nginx.org/en/docs/http/ngx_http_limit_req_module.html");function m(h,b){const n=t("OutboundLink");return o(),s(r,null,[c,e("p",null,[e("a",u,[g,a(n)])])],64)}var v=p(d,[["render",m]]);export{v as default};
