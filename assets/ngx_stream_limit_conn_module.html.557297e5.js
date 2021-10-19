import{r as a,c as t,a as n,b as s,F as r,d as i,e as o,o as l}from"./app.af3e3276.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const d={},p=i(`<h1 id="ngx-stream-limit-conn-module" tabindex="-1"><a class="header-anchor" href="#ngx-stream-limit-conn-module" aria-hidden="true">#</a> ngx_stream_limit_conn_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#limit_conn">limit_conn</a></li><li><a href="#limit_conn_log_level">limit_conn_log_level</a></li><li><a href="#limit_conn_zone">limit_conn_zone</a></li></ul></li></ul><p><code>ngx_stream_limit_conn_module</code> \u6A21\u5757\uFF081.9.3\uFF09\u7528\u4E8E\u9650\u5236\u6BCF\u4E2A\u5B9A\u4E49\u7684 key \u7684\u8FDE\u63A5\u6570\uFF0C\u7279\u522B\u662F\u6765\u81EA\u5355\u4E2A IP \u5730\u5740\u7684\u8FDE\u63A5\u6570\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>

    ...

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>

        ...

        <span class="token directive"><span class="token keyword">limit_conn</span>           addr <span class="token number">1</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">limit_conn_log_level</span> error</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="limit-conn" tabindex="-1"><a class="header-anchor" href="#limit-conn" aria-hidden="true">#</a> limit_conn</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_conn</strong> <code>zone number</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream\u3001server</td></tr></tbody></table><p>\u8BBE\u7F6E\u5171\u4EAB\u5185\u5B58\u533A\u57DF\u548C\u7ED9\u5B9A key \u7684\u6700\u5927\u5141\u8BB8\u8FDE\u63A5\u6570\u3002\u8D85\u8FC7\u6B64\u9650\u5236\u65F6\uFF0C\u670D\u52A1\u5668\u5C06\u5173\u95ED\u8FDE\u63A5\u3002\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u6307\u4EE4\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    ...
    <span class="token directive"><span class="token keyword">limit_conn</span> addr <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6BCF\u6B21\u53EA\u5141\u8BB8\u4E00\u4E2A IP \u5730\u5740\u4E00\u4E2A\u8FDE\u63A5\u3002</p><p>\u5982\u679C\u6307\u5B9A\u4E86\u51E0\u4E2A <code>limit_conn</code> \u6307\u4EE4\uFF0C\u5219\u5C06\u5E94\u7528\u6240\u6709\u5DF2\u914D\u7F6E\u7684\u9650\u5236\u3002</p><p>\u5F53\u4E14\u4EC5\u5F53\u5F53\u524D\u7EA7\u522B\u6CA1\u6709 <code>limit_conn</code> \u6307\u4EE4\u65F6\uFF0C\u6307\u4EE4\u624D\u4ECE\u4E0A\u7EA7\u7EE7\u627F\u3002</p><h3 id="limit-conn-log-level" tabindex="-1"><a class="header-anchor" href="#limit-conn-log-level" aria-hidden="true">#</a> limit_conn_log_level</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_conn_log_level</strong> <code>info</code> | <code>notice</code> | <code>warn</code> | <code>error</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>limit_conn_log_level error;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream\u3001server</td></tr></tbody></table><p>\u4E3A\u670D\u52A1\u5668\u9650\u5236\u8FDE\u63A5\u6570\u8BBE\u7F6E\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B\u3002</p><h3 id="limit-conn-zone" tabindex="-1"><a class="header-anchor" href="#limit-conn-zone" aria-hidden="true">#</a> limit_conn_zone</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>limit_conn_zone</strong> <code>key zone=name:size</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream</td></tr></tbody></table><p>\u4E3A\u6307\u5B9A\u7684\u5171\u4EAB\u5185\u5B58\u533A\u57DF\u8BBE\u7F6E\u53C2\u6570\uFF0C\u8BE5\u533A\u57DF\u5C06\u4FDD\u7559\u5404\u79CD key \u7684\u72B6\u6001\u3002\u5C24\u5176\u662F\u72B6\u6001\u5305\u62EC\u5F53\u524D\u7684\u8FDE\u63A5\u6570\u3002<code>key</code> \u53EF\u4EE5\u5305\u542B\u6587\u672C\u3001\u53D8\u91CF\u53CA\u5176\u7EC4\u5408\uFF081.11.2\uFF09\u3002\u4E0D\u8BA1\u7B97 key \u4E3A\u7A7A\u7684\u8FDE\u63A5\u3002\u7528\u6CD5\u793A\u4F8B\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u8FF0\u4E2D\uFF0Ckey \u662F\u4E00\u4E2A <code>$binary_remote_addr</code> \u53D8\u91CF\u8BBE\u7F6E\u7684\u5BA2\u6237\u7AEF IP \u5730\u5740\u3002<code>$binary_remote_addr</code> \u7684\u5927\u5C0F\u4E3A IPv4 \u5730\u5740\u7684 4 \u4E2A\u5B57\u8282\u6216 IPv6 \u5730\u5740\u7684 16 \u4E2A\u5B57\u8282\u3002\u5B58\u50A8\u72B6\u6001\u5728 32 \u4F4D\u5E73\u53F0\u4E0A\u603B\u662F\u5360\u7528 32 \u6216 64 \u5B57\u8282\uFF0C\u5728 64 \u4F4D\u5E73\u53F0\u4E0A\u5360\u7528 64 \u5B57\u8282\u3002\u4E00\u5146\u5B57\u8282\u533A\u57DF\u53EF\u4EE5\u4FDD\u7559\u5927\u7EA6 32,000 \u4E2A 32 \u5B57\u8282\u72B6\u6001\u6216\u5927\u7EA6 16,000 \u4E2A 64 \u5B57\u8282\u72B6\u6001\u3002\u5982\u679C\u533A\u57DF\u5B58\u50A8\u8017\u5C3D\uFF0C\u670D\u52A1\u5668\u5C06\u5173\u95ED\u8FDE\u63A5\u3002</p><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,24),m={href:"http://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"},g=o("http://nginx.org/en/docs/stream/ngx_stream_limit_conn_module.html");function _(u,h){const e=a("OutboundLink");return l(),t(r,null,[p,n("p",null,[n("a",m,[g,s(e)])])],64)}var x=c(d,[["render",_]]);export{x as default};
