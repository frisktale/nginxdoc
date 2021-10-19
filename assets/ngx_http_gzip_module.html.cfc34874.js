import{r as i,c as s,a as e,b as d,w as r,F as p,d as a,e as t,o as g}from"./app.af3e3276.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const h={},c=a(`<h1 id="ngx-http-gzip-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-gzip-module" aria-hidden="true">#</a> ngx_http_gzip_module</h1><ul><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#gzip">gzip</a></li><li><a href="#gzip_buffers">gzip_buffers</a></li><li><a href="#gzip_comp_level">gzip_comp_level</a></li><li><a href="#gzip_disable">gzip_disable</a></li><li><a href="#gzip_min_length">gzip_min_length</a></li><li><a href="#gzip_http_version">gzip_http_version</a></li><li><a href="#gzip_proxied">gzip_proxied</a></li><li><a href="#gzip_types">gzip_types</a></li><li><a href="#gzip_vary">gzip_vary</a></li></ul></li><li><a href="#embedded_variables">\u5185\u5D4C\u53D8\u91CF</a></li></ul><p><code>ngx_http_gzip_module</code> \u6A21\u5757\u662F\u4E00\u4E2A\u4F7F\u7528\u4E86 <strong>gzip</strong> \u65B9\u6CD5\u538B\u7F29\u54CD\u5E94\u7684\u8FC7\u6EE4\u5668\u3002\u6709\u52A9\u4E8E\u5C06\u4F20\u8F93\u6570\u636E\u7684\u5927\u5C0F\u51CF\u5C11\u4E00\u534A\u751A\u81F3\u66F4\u591A\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">gzip</span>            <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_proxied</span>    expired no-cache no-store private auth</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_types</span>      text/plain application/xml</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>$gzip_ratio</code> \u53D8\u91CF\u53EF\u7528\u4E8E\u8BB0\u5F55\u5B9E\u73B0\u7684\u538B\u7F29\u6BD4\u7387\u3002</p><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip</strong> <code>on</code> | <code>off</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip off;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location\u3001location \u4E2D\u7684 if</td></tr></tbody></table><p>\u542F\u7528\u6216\u7981\u7528\u54CD\u5E94\u7684 gzip \u538B\u7F29\u3002</p><h3 id="gzip-buffers" tabindex="-1"><a class="header-anchor" href="#gzip-buffers" aria-hidden="true">#</a> gzip_buffers</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_buffers</strong> <code>number size</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_buffers 32 4k|16 8k;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E\u7528\u4E8E\u538B\u7F29\u54CD\u5E94\u7684\u7F13\u51B2\u533A\u7684\u6570\u91CF\uFF08<code>number</code>\uFF09\u548C\u5927\u5C0F\uFF08<code>size</code>\uFF09\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7F13\u51B2\u533A\u5927\u5C0F\u7B49\u4E8E\u4E00\u4E2A\u5185\u5B58\u9875\uFF084K \u6216 8K\uFF0C\u53D6\u51B3\u4E8E\u5E73\u53F0\uFF09\u3002</p><blockquote><p>\u5728 0.7.28 \u7248\u672C\u4E4B\u524D\uFF0C\u9ED8\u8BA4\u4F7F\u7528 4 \u4E2A 4K \u6216 8K \u7F13\u51B2\u533A\u3002</p></blockquote><h3 id="gzip-comp-level" tabindex="-1"><a class="header-anchor" href="#gzip-comp-level" aria-hidden="true">#</a> gzip_comp_level</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_comp_level</strong> <code>level</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_comp_level 1;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E\u54CD\u5E94\u7684 gzip \u538B\u7F29\u7EA7\u522B\uFF08<code>level</code>\uFF09\u3002\u503C\u7684\u8303\u56F4\u4E3A 1 \u5230 9\u3002</p><h3 id="gzip-disable" tabindex="-1"><a class="header-anchor" href="#gzip-disable" aria-hidden="true">#</a> gzip_disable</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_disable</strong> <code>regex ...</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr><tr><td style="text-align:right;"><strong>\u63D0\u793A</strong></td><td>\u8BE5\u6307\u4EE4\u5728 0.6.23 \u7248\u672C\u4E2D\u51FA\u73B0</td></tr></tbody></table><p>\u7981\u7528\u5BF9\u4E0E\u4EFB\u4F55\u6307\u5B9A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684 <code>User-Agent</code> \u5934\u5B57\u6BB5\u7684\u8BF7\u6C42\u54CD\u5E94\u505A gzip \u5904\u7406\u3002</p><p>\u7279\u6B8A\u63A9\u7801 <code>msie6</code>\uFF080.7.12\uFF09\u5BF9\u5E94\u6B63\u5219\u8868\u8FBE\u5F0F <code>MSIE [4-6]\\.</code>\uFF0C\u4F46\u6548\u7387\u66F4\u9AD8\u3002\u4ECE 0.8.11 \u7248\u672C\u5F00\u59CB\uFF0C<code>MSIE 6.0; ... SV1</code> \u4E0D\u5305\u542B\u5728\u6B64\u63A9\u7801\u4E2D\u3002</p><h3 id="gzip-min-length" tabindex="-1"><a class="header-anchor" href="#gzip-min-length" aria-hidden="true">#</a> gzip_min_length</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_min_length</strong> <code>length</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_min_length 20;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E\u88AB\u538B\u7F29\u54CD\u5E94\u7684\u6700\u5C0F\u957F\u5EA6\u3002\u8BE5\u957F\u5EA6\u4EC5\u7531 <code>Content-Length</code> \u54CD\u5E94\u5934\u5B57\u6BB5\u786E\u5B9A\u3002</p><h3 id="gzip-http-version" tabindex="-1"><a class="header-anchor" href="#gzip-http-version" aria-hidden="true">#</a> gzip_http_version</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_http_version</strong> <code>1.0</code> | <code>1.1</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_http_version 1.1;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u8BBE\u7F6E\u538B\u7F29\u54CD\u5E94\u4E00\u4E2A\u8BF7\u6C42\u6240\u9700\u7684\u6700\u5C0F HTTP \u7248\u672C\u3002</p><h3 id="gzip-proxied" tabindex="-1"><a class="header-anchor" href="#gzip-proxied" aria-hidden="true">#</a> gzip_proxied</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_proxied</strong> <code>off</code> | <code>expired</code> | <code>no-cache</code> | <code>no-store</code> | <code>private</code> | <code>no_last_modified</code> | <code>no_etag</code> | <code>auth</code> | <code>any ...</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_proxied off;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u6839\u636E\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u542F\u7528\u6216\u7981\u7528\u9488\u5BF9\u4EE3\u7406\u8BF7\u6C42\u7684\u54CD\u5E94\u7684 gzip\u3002\u4E8B\u5B9E\u4E0A\u8BF7\u6C42\u88AB\u4EE3\u7406\u53D6\u51B3\u4E8E <code>Via</code> \u8BF7\u6C42\u5934\u5B57\u6BB5\u662F\u5426\u5B58\u5728\u3002\u8BE5\u6307\u4EE4\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p><code>off</code></p><p>\u7981\u7528\u6240\u6709\u4EE3\u7406\u8BF7\u6C42\u538B\u7F29\uFF0C\u5FFD\u7565\u5176\u4ED6\u53C2\u6570</p></li><li><p><code>expired</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u5305\u542B <code>Expires\u201D</code> \u5B57\u6BB5\u5E76\u4E14\u5176\u503C\u4E3A\u7981\u7528\u7F13\u5B58\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>no-cache</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u5305\u542B\u5177\u6709 <code>no-cache</code> \u53C2\u6570\u7684 <code>Cache-Control</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>no-store</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u5305\u542B\u5177\u6709 <code>no-store</code> \u53C2\u6570\u7684 <code>Cache-Control</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>private</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u5305\u542B\u5E26\u6709 <code>private</code> \u53C2\u6570\u7684 <code>Cache-Control</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>no_last_modified</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u4E0D\u5305\u542B <code>Last-Modified</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>no_etag</code></p><p>\u5982\u679C\u54CD\u5E94\u5934\u4E0D\u5305\u542B <code>ETag</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>auth</code></p><p>\u5982\u679C\u8BF7\u6C42\u5934\u5305\u542B <code>Authorization</code> \u5B57\u6BB5\uFF0C\u5219\u542F\u7528\u538B\u7F29</p></li><li><p><code>any</code></p><p>\u4E3A\u6240\u6709\u4EE3\u7406\u8BF7\u6C42\u542F\u7528\u538B\u7F29</p></li></ul><h3 id="gzip-types" tabindex="-1"><a class="header-anchor" href="#gzip-types" aria-hidden="true">#</a> gzip_types</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_types</strong> <code>mime-type ...</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_types text/html;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table><p>\u9664\u4E86 <code>text/html</code> \u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u9488\u5BF9\u6307\u5B9A\u7684 MIME \u7C7B\u578B\u542F\u7528 gzip \u54CD\u5E94\u3002\u7279\u6B8A\u503C <code>*</code> \u5339\u914D\u4EFB\u4F55 MIME \u7C7B\u578B\uFF080.8.29\uFF09\u3002\u5BF9 <code>text/html</code> \u7C7B\u578B\u7684\u54CD\u5E94\u59CB\u7EC8\u542F\u7528\u538B\u7F29\u3002</p><h3 id="gzip-vary" tabindex="-1"><a class="header-anchor" href="#gzip-vary" aria-hidden="true">#</a> gzip_vary</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>gzip_vary</strong> <code>on</code> | <code>off</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>gzip_vary off;</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>http\u3001server\u3001location</td></tr></tbody></table>`,38),_=t("\u5982\u679C\u6307\u4EE4 "),z=t("gzip"),x=t("\u3001"),b=t("gzip_static"),u=t(" \u6216 "),y=t("gunzip"),f=t(" \u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001\uFF0C\u5219\u542F\u7528\u6216\u7981\u7528\u63D2\u5165 "),m=e("code",null,"Vary:Accept-Encoding",-1),v=t(" \u54CD\u5E94\u5934\u5B57\u6BB5\u3002"),k=a('<p><a id="embedded_variables"></a></p><h2 id="\u5185\u5D4C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u5D4C\u53D8\u91CF</h2><ul><li><p><code>$gzip_ratio</code></p><p>\u5B9E\u73B0\u538B\u7F29\u6BD4\u7387\uFF0C\u8BA1\u7B97\u4E3A\u539F\u59CB\u538B\u7F29\u54CD\u5E94\u5927\u5C0F\u4E0E\u538B\u7F29\u540E\u54CD\u5E94\u5927\u5C0F\u4E4B\u95F4\u7684\u6BD4\u7387\u3002</p></li></ul><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>',4),E={href:"http://nginx.org/en/docs/http/ngx_http_gzip_module.html",target:"_blank",rel:"noopener noreferrer"},A=t("http://nginx.org/en/docs/http/ngx_http_gzip_module.html");function C(M,V){const o=i("RouterLink"),n=i("OutboundLink");return g(),s(p,null,[c,e("p",null,[_,d(o,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_module.html#gzip"},{default:r(()=>[z]),_:1}),x,d(o,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gzip_static_module.html#gzip_static"},{default:r(()=>[b]),_:1}),u,d(o,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/http/ngx_http_gunzip_module.html#gunzip"},{default:r(()=>[y]),_:1}),f,m,v]),k,e("p",null,[e("a",E,[A,d(n)])])],64)}var F=l(h,[["render",C]]);export{F as default};
