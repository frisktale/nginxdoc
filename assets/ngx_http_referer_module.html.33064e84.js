import{r as a,c as d,a as t,b as r,w as l,F as i,d as s,e,o as c}from"./app.138b5321.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";const p={},g=s(`<h1 id="ngx-http-referer-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-referer-module" aria-hidden="true">#</a> ngx_http_referer_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#referer_hash_bucket_size">referer_hash_bucket_size</a></li><li><a href="#referer_hash_max_size">referer_hash_max_size</a></li><li><a href="#valid_referers">valid_referers</a></li></ul></li><li><a href="#embedded_variables">\u5185\u5D4C\u53D8\u91CF</a></li></ul><p><code>ngx_http_referer_module</code> \u6A21\u5757\u7528\u4E8E\u963B\u6B62 <strong>Referer</strong> \u5934\u5B57\u6BB5\u4E3A\u65E0\u6548\u503C\u7684\u8BF7\u6C42\u8BBF\u95EE\u7AD9\u70B9\u3002\u9700\u8BB0\u4F4F\u7684\u662F\uFF0C\u4F7F\u7528\u9002\u5F53\u7684 <strong>Referer</strong> \u5B57\u6BB5\u503C\u6765\u4F2A\u9020\u8BF7\u6C42\u975E\u5E38\u5BB9\u6613\uFF0C\u56E0\u6B64\u672C\u6A21\u5757\u7684\u9884\u671F\u76EE\u7684\u4E0D\u662F\u8981\u5F7B\u5E95\u963B\u6B62\u6B64\u7C7B\u8BF7\u6C42\uFF0C\u800C\u662F\u963B\u6B62\u5E38\u89C4\u6D4F\u89C8\u5668\u53D1\u9001\u7684\u5927\u91CF\u6D41\u91CF\u8BF7\u6C42\u3002\u8FD8\u5E94\u8BE5\u8003\u8651\u5230\uFF0C\u5373\u4F7F\u662F\u6709\u6548\u8BF7\u6C42\uFF0C\u5E38\u89C4\u6D4F\u89C8\u5668\u4E5F\u53EF\u80FD\u4E0D\u53D1\u9001 <strong>Referer</strong> \u5B57\u6BB5\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">valid_referers</span> none blocked server_names
               *.example.com example.* www.example.org/galleries/
               ~\\.google\\.</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="referer-hash-bucket-size" tabindex="-1"><a class="header-anchor" href="#referer-hash-bucket-size" aria-hidden="true">#</a> referer_hash_bucket_size</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>referer_hash_bucket_size</strong> <code>size</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">referer_hash_bucket_size 64;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">server\u3001location</td></tr></tbody></table>`,10),_=e("\u8BBE\u7F6E\u6709\u6548\u5F15\u7528\u54C8\u5E0C\u8868\u7684\u6876\u5927\u5C0F\u3002\u8BBE\u7F6E\u54C8\u5E0C\u8868\u7684\u8BE6\u7EC6\u4FE1\u606F\u5728\u5355\u72EC\u7684"),f=e("\u6587\u6863"),u=e("\u4E2D\u63D0\u4F9B\u3002"),x=s('<h3 id="referer-hash-max-size" tabindex="-1"><a class="header-anchor" href="#referer-hash-max-size" aria-hidden="true">#</a> referer_hash_max_size</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>referer_hash_max_size</strong> <code>size</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">referer_hash_max_size 2048;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">server\u3001location</td></tr><tr><td style="text-align:left;"><strong>\u63D0\u793A</strong></td><td style="text-align:left;">\u8BE5\u6307\u4EE4\u5728 1.0.5 \u7248\u672C\u4E2D\u51FA\u73B0</td></tr></tbody></table>',2),b=e("\u8BBE\u7F6E\u6709\u6548\u5F15\u7528\u54C8\u5E0C\u8868\u7684\u6700\u5927 "),m=t("code",null,"size",-1),v=e("\u3002\u8BBE\u7F6E\u54C8\u5E0C\u8868\u7684\u8BE6\u7EC6\u4FE1\u606F\u5728\u5355\u72EC\u7684"),k=e("\u6587\u6863"),y=e("\u4E2D\u63D0\u4F9B\u3002"),B=s(`<h3 id="valid-referers" tabindex="-1"><a class="header-anchor" href="#valid-referers" aria-hidden="true">#</a> valid_referers</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>valid_referers</strong> <code>none</code> | <code>blocked</code> | <code>server_names</code> | <code>string ...</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">\u2014\u2014</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">server\u3001location</td></tr></tbody></table><p>\u6307\u5B9A <strong>Referer</strong> \u8BF7\u6C42\u5934\u5B57\u6BB5\u503C\u5C06\u5BFC\u81F4\u5185\u5D4C\u7684 <code>$invalid_referer</code> \u53D8\u91CF\u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002\u5426\u5219\uFF0C\u53D8\u91CF\u5C06\u4E3A <code>1</code>\u3002\u5339\u914D\u641C\u7D22\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002</p><p>\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><p><code>none</code></p><p>\u8BF7\u6C42\u5934\u4E2D\u7F3A\u5C11 <strong>Referer</strong> \u5B57\u6BB5</p></li><li><p><code>blocked</code></p><p><strong>Referer</strong> \u5B57\u6BB5\u51FA\u73B0\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u4F46\u5176\u503C\u5DF2\u88AB\u9632\u706B\u5899\u6216\u4EE3\u7406\u670D\u52A1\u5668\u5220\u9664\uFF0C\u8FD9\u4E9B\u503C\u4E3A\u4E0D\u4EE5 <code>http://</code> \u6216 <code>https://</code> \u5F00\u5934\u7684\u5B57\u7B26\u4E32</p></li><li><p><code>server_names</code></p><p><strong>Referer</strong> \u8BF7\u6C42\u5934\u5B57\u6BB5\u5305\u542B\u4E00\u4E2A\u670D\u52A1\u5668\u540D\u79F0</p></li><li><p>\u4EFB\u610F\u5B57\u7B26\u4E32</p><p>\u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1\u5668\u540D\u79F0\u548C\u4E00\u4E2A\u53EF\u9009\u7684 URI \u524D\u7F00\u3002\u670D\u52A1\u5668\u540D\u79F0\u7684\u5F00\u5934\u6216\u7ED3\u5C3E\u53EF\u4EE5\u5305\u542B<code>*</code>\u3002\u5728\u68C0\u67E5\u671F\u95F4\uFF0C<strong>Referer</strong> \u5B57\u6BB5\u4E2D\u7684\u670D\u52A1\u5668\u7AEF\u53E3\u88AB\u5FFD\u7565</p></li><li><p>\u6B63\u5219\u8868\u8FBE\u5F0F</p><p>\u7B2C\u4E00\u4E2A\u7B26\u53F7\u5E94\u4E3A <code>\u301C</code>\u3002\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8868\u8FBE\u5F0F\u53EA\u4E0E <code>http://</code> \u6216 <code>https://</code> \u4E4B\u540E\u7684\u6587\u672C\u5339\u914D\u3002</p></li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">valid_referers</span> none blocked server_names
               *.example.com example.* www.example.org/galleries/
               ~\\.google\\.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a id="embedded_variables"></a></p><h2 id="\u5185\u5D4C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u5D4C\u53D8\u91CF</h2><ul><li><p><code>$invalid_referer</code></p><p>\u5982\u679C <strong>Referer</strong> \u8BF7\u6C42\u5934\u5B57\u6BB5\u7684\u503C<a href="#valid_referers">\u6709\u6548</a>\uFF0C\u5219\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5426\u5219\u4E3A 1\u3002</p></li></ul><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>`,11),E={href:"http://nginx.org/en/docs/http/ngx_http_referer_module.html",target:"_blank",rel:"noopener noreferrer"},z=e("http://nginx.org/en/docs/http/ngx_http_referer_module.html");function w(R,A){const n=a("RouterLink"),o=a("OutboundLink");return c(),d(i,null,[g,t("p",null,[_,r(n,{to:"/%E4%BB%8B%E7%BB%8D/%E8%AE%BE%E7%BD%AE%E5%93%88%E5%B8%8C.html"},{default:l(()=>[f]),_:1}),u]),x,t("p",null,[b,m,v,r(n,{to:"/%E4%BB%8B%E7%BB%8D/%E8%AE%BE%E7%BD%AE%E5%93%88%E5%B8%8C.html"},{default:l(()=>[k]),_:1}),y]),B,t("p",null,[t("a",E,[z,r(o)])])],64)}var L=h(p,[["render",w]]);export{L as default};