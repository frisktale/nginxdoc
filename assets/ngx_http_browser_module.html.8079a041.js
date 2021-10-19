import{r as s,c as a,a as n,b as t,F as r,d as o,e as d,o as p}from"./app.245ece3f.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const l={},c=o(`<h1 id="ngx-http-browser-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-browser-module" aria-hidden="true">#</a> ngx_http_browser_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#ancient_browser">ancient_browser</a></li><li><a href="#ancient_browser_value">ancient_browser_value</a></li><li><a href="#modern_browser">modern_browser</a></li><li><a href="#modern_browser_value">modern_browser_value</a></li></ul></li></ul><p><code>ngx_http_browser_module</code> \u6A21\u5757\u521B\u5EFA\u503C\u7531 <strong>User-Agent</strong> \u8BF7\u6C42\u5934\u57DF\u51B3\u5B9A\u7684\u53D8\u91CF\uFF1A</p><ul><li><p><code>$modern_browser</code></p><p>\u5982\u679C\u6D4F\u89C8\u5668\u88AB\u8BC6\u522B\u4E3A\u73B0\u4EE3\uFF0C\u5219\u7B49\u4E8E <a href="#modern_browser_value">modern_browser_value</a> \u6307\u4EE4\u8BBE\u7F6E\u7684\u503C</p></li><li><p><code>$ancient_browser</code></p><p>\u5982\u679C\u6D4F\u89C8\u5668\u88AB\u8BC6\u522B\u4E3A\u53E4\u4EE3\uFF0C\u5219\u7B49\u4E8E\u7531 <a href="#ancient_browser_value">ancient_browser_value</a> \u6307\u4EE4\u8BBE\u7F6E\u7684\u503C</p></li><li><p><code>$MSIE</code></p><p>\u5982\u679C\u6D4F\u89C8\u5668\u88AB\u8BC6\u522B\u4E3A\u4EFB\u4F55\u7248\u672C\u7684 MSIE\uFF0C\u5219\u7B49\u4E8E <code>1</code></p></li></ul><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><p>\u9009\u62E9\u4E00\u4E2A\u7D22\u5F15\u6587\u4EF6\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">modern_browser_value</span> <span class="token string">&quot;modern.&quot;</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">modern_browser</span> msie      5.5</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> gecko     1.0.0</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> opera     9.0</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> safari    <span class="token number">413</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> konqueror 3.0</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">index</span> index.$</span><span class="token punctuation">{</span>modern_browser<span class="token punctuation">}</span>html <span class="token directive"><span class="token keyword">index.html</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u65E7\u6D4F\u89C8\u5668\u91CD\u5B9A\u5411\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">modern_browser</span> msie      5.0</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> gecko     0.9.1</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> opera     8.0</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> safari    <span class="token number">413</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">modern_browser</span> konqueror 3.0</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">modern_browser</span> unlisted</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">ancient_browser</span> Links Lynx netscape4</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$ancient_browser</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^ /ancient.html</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="ancient-browser" tabindex="-1"><a class="header-anchor" href="#ancient-browser" aria-hidden="true">#</a> ancient_browser</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>ancient_browser</strong> <code>string ...</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u5982\u679C\u5728 <strong>User-Agent</strong> \u8BF7\u6C42\u5934\u57DF\u4E2D\u627E\u5230\u4EFB\u4F55\u7279\u6B8A\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u6D4F\u89C8\u5668\u5C06\u88AB\u89C6\u4E3A\u4F20\u7EDF\u7C7B\u578B\u3002\u7279\u6B8A\u5B57\u7B26\u4E32 <code>netscape4</code> \u5BF9\u5E94\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F<code>^Mozilla/[1-4]</code>\u3002</p><h3 id="ancient-browser-value" tabindex="-1"><a class="header-anchor" href="#ancient-browser-value" aria-hidden="true">#</a> ancient_browser_value</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>ancient_browser_value</strong> <code>string</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>ancient_browser_value 1;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E <code>$ancient_browser</code> \u53D8\u91CF\u7684\u503C\u3002</p><h3 id="modern-browser" tabindex="-1"><a class="header-anchor" href="#modern-browser" aria-hidden="true">#</a> modern_browser</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>modern_browser</strong> <code>browser version</code>; <br> <strong>modern_browser</strong> <code>unlisted</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u6307\u5B9A\u5C06\u6D4F\u89C8\u5668\u89C6\u4E3A\u73B0\u4EE3\u7248\u672C\u5F00\u59CB\u7684\u7248\u672C\u3002\u6D4F\u89C8\u5668\u53EF\u4EE5\u662F\u4EE5\u4E0B\u4EFB\u4F55\u4E00\u79CD\uFF1A<code>msie</code>\u3001<code>gecko</code>\uFF08\u57FA\u4E8E Mozilla \u7684\u6D4F\u89C8\u5668\uFF09\u3001<code>opera</code>\u3001<code>safari</code> \u6216 <code>konqueror</code>\u3002</p><p>\u7248\u672C\u53EF\u4EE5\u662F\u4EE5\u4E0B\u5217\u683C\u5F0F\uFF1AX\u3001X.X\u3001X.X.X \u6216 X.X.X.X\u3002\u6BCF\u79CD\u683C\u5F0F\u7684\u6700\u5927\u503C\u5206\u522B\u4E3A 4000\u30014000.99\u30014000.99.99 \u548C 4000.99.99.99\u3002</p><p>\u672A\u5217\u51FA\u7684\u7279\u6B8A\u503C\u5982\u679C\u672A\u88AB <code>modern_browser</code> \u548C <a href="#ancient_browser">ancient_browser</a> \u6307\u4EE4\u6307\u5B9A\uFF0C\u5219\u5C06\u5176\u89C6\u4E3A\u73B0\u4EE3\u6D4F\u89C8\u5668\u3002\u5426\u5219\u88AB\u8BA4\u4E3A\u662F\u4F20\u7EDF\u6D4F\u89C8\u5668\u3002\u5982\u679C\u8BF7\u6C42\u6CA1\u6709\u5728\u5934\u4E2D\u63D0\u4F9B <strong>User-Agent</strong> \u57DF\uFF0C\u5219\u6D4F\u89C8\u5668\u88AB\u89C6\u4E3A\u672A\u5217\u51FA\u3002</p><h3 id="modern-browser-value" tabindex="-1"><a class="header-anchor" href="#modern-browser-value" aria-hidden="true">#</a> modern_browser_value</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>modern_browser_value</strong> <code>string</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>modern_browser_value 1;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E <code>$modern_browser</code> \u53D8\u91CF\u7684\u503C\u3002</p><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,27),b={href:"http://nginx.org/en/docs/http/ngx_http_browser_module.html",target:"_blank",rel:"noopener noreferrer"},u=d("http://nginx.org/en/docs/http/ngx_http_browser_module.html");function h(g,_){const e=s("OutboundLink");return p(),a(r,null,[c,n("p",null,[n("a",b,[u,t(e)])])],64)}var w=i(l,[["render",h]]);export{w as default};