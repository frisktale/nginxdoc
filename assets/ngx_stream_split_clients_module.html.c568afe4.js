import{r as a,c as e,a as n,b as t,F as p,d as r,e as l,o as i}from"./app.af3e3276.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";const c={},d=r(`<h1 id="ngx-stream-split-clients-module" tabindex="-1"><a class="header-anchor" href="#ngx-stream-split-clients-module" aria-hidden="true">#</a> ngx_stream_split_clients_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#split_clients">split_clients</a></li></ul></li></ul><p><code>ngx_stream_split_clients_module</code> \u6A21\u5757\uFF081.11.3\uFF09\u521B\u5EFA\u9002\u7528\u4E8E A/B \u6D4B\u8BD5\u7684\u53D8\u91CF\uFF0C\u4E5F\u79F0\u4E3A\u62C6\u5206\u6D4B\u8BD5\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    ...
    <span class="token directive"><span class="token keyword">split_clients</span> <span class="token string">&quot;<span class="token variable">\${remote_addr}</span>AAA&quot;</span> <span class="token variable">$upstream</span></span> <span class="token punctuation">{</span>
                  <span class="token directive"><span class="token keyword">0.5%</span>                feature_test1</span><span class="token punctuation">;</span>
                  <span class="token directive"><span class="token keyword">2.0%</span>                feature_test2</span><span class="token punctuation">;</span>
                  *                   <span class="token directive"><span class="token keyword">production</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        ...
        <span class="token directive"><span class="token keyword">proxy_pass</span> <span class="token variable">$upstream</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="split-clients" tabindex="-1"><a class="header-anchor" href="#split-clients" aria-hidden="true">#</a> split_clients</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>split_clients</strong> <code>string $variable { ... }</code></td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream</td></tr></tbody></table><p>\u4E3A A/B \u6D4B\u8BD5\u521B\u5EFA\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">split_clients</span> <span class="token string">&quot;<span class="token variable">\${remote_addr}</span>AAA&quot;</span> <span class="token variable">$variant</span></span> <span class="token punctuation">{</span>
               <span class="token directive"><span class="token keyword">0.5%</span>               .one</span><span class="token punctuation">;</span>
               <span class="token directive"><span class="token keyword">2.0%</span>               .two</span><span class="token punctuation">;</span>
               *                  &quot;&quot;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528 MurmurHash2 \u5BF9\u539F\u59CB\u5B57\u7B26\u4E32\u7684\u503C\u8FDB\u884C\u54C8\u5E0C\u5904\u7406\u3002\u5728\u7ED9\u51FA\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4ECE 0 \u5230 21474835 \uFF080.5\uFF05\uFF09\u7684\u54C8\u5E0C\u503C\u5BF9\u5E94\u4E8E <code>$variant</code> \u53D8\u91CF\u7684\u503C <code>.one</code>\uFF0C\u4ECE 21474836 \u5230 107374180 \uFF082\uFF05\uFF09\u7684\u54C8\u5E0C\u503C\u5BF9\u5E94\u4E8E\u503C <code>.two</code>\uFF0C\u54C8\u5E0C\u503C\u4ECE 107374181 \u5230 4294967295 \u5BF9\u5E94\u4E8E\u503C <code>&quot;&quot;</code>\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09\u3002</p><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,14),u={href:"http://nginx.org/en/docs/stream/ngx_stream_split_clients_module.html",target:"_blank",rel:"noopener noreferrer"},m=l("http://nginx.org/en/docs/stream/ngx_stream_split_clients_module.html");function b(k,h){const s=a("OutboundLink");return i(),e(p,null,[d,n("p",null,[n("a",u,[m,t(s)])])],64)}var x=o(c,[["render",b]]);export{x as default};