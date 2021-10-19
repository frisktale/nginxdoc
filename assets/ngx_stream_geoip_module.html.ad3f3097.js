import{r as a,c as i,a as e,b as s,F as d,d as o,e as t,o as c}from"./app.af3e3276.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const p={},l=o('<h1 id="ngx-stream-geoip-module" tabindex="-1"><a class="header-anchor" href="#ngx-stream-geoip-module" aria-hidden="true">#</a> ngx_stream_geoip_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#geoip_country">geoip_country</a></li><li><a href="#geoip_city">geoip_city</a></li><li><a href="#geoip_org">geoip_org</a></li></ul></li></ul>',2),g=e("code",null,"ngx_stream_geoip_module",-1),_=t(" \u6A21\u5757\uFF081.11.3\uFF09\u4F7F\u7528\u9884\u7F16\u8BD1\u7684 "),h={href:"http://www.maxmind.com/",target:"_blank",rel:"noopener noreferrer"},u=t("MaxMind"),m=t(" \u6570\u636E\u5E93\u521B\u5EFA\u4F9D\u8D56\u4E8E\u5BA2\u6237\u7AEF IP \u5730\u5740\u7684\u53D8\u91CF\u3002"),b=e("p",null,"\u4F7F\u7528\u652F\u6301 IPv6 \u7684\u6570\u636E\u5E93\u65F6\uFF0C\u67E5\u627E IPv4 \u5730\u5740\u5C06\u8F6C\u4E3A\u67E5\u627E IPv4 \u6620\u5C04\u7684 IPv6 \u5730\u5740\u3002",-1),y=e("p",null,[t("\u9ED8\u8BA4\u6784\u5EFA\u4E0D\u5305\u542B\u6B64\u6A21\u5757\uFF0C\u53EF\u5728\u6784\u5EFA\u65F6\u4F7F\u7528 "),e("code",null,"--with-stream_geoip_module"),t(" \u914D\u7F6E\u53C2\u6570\u542F\u7528\u3002")],-1),x=t("\u8BE5\u6A21\u5757\u9700\u8981 "),k={href:"http://www.maxmind.com/app/c",target:"_blank",rel:"noopener noreferrer"},f=t("MaxMind GeoIP"),v=t(" \u5E93\u3002"),w=o(`<p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">geoip_country</span>         GeoIP.dat</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">geoip_city</span>            GeoLiteCity.dat</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">map</span> <span class="token variable">$geoip_city_continent_code</span> <span class="token variable">$nearest_server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">default</span>        example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">EU</span>          eu.example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">NA</span>          na.example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">AS</span>          as.example.com</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="geoip-country" tabindex="-1"><a class="header-anchor" href="#geoip-country" aria-hidden="true">#</a> geoip_country</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>geoip_country</strong> <code>file</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream</td></tr></tbody></table><p>\u6307\u5B9A\u7528\u4E8E\u6839\u636E\u5BA2\u6237\u7AEF IP \u5730\u5740\u786E\u5B9A\u56FD\u5BB6\u7684\u6570\u636E\u5E93\u3002\u4F7F\u7528\u6B64\u6570\u636E\u5E93\u65F6\uFF0C\u4EE5\u4E0B\u53D8\u91CF\u53EF\u7528\uFF1A</p><ul><li><p><code>$geoip_country_code</code></p><p>\u4E24\u4E2A\u5B57\u6BCD\u8868\u793A\u7684\u56FD\u5BB6\u4EE3\u7801\uFF0C\u6BD4\u5982 <code>RU</code>\u3001<code>US</code></p></li><li><p><code>$geoip_country_code3</code></p><p>\u4E09\u4E2A\u5B57\u6BCD\u8868\u793A\u7684\u56FD\u5BB6\u4EE3\u7801\uFF0C\u6BD4\u5982 <code>RUS</code>\u3001<code>USA</code></p></li><li><p><code>$geoip_country_name</code></p><p>\u56FD\u5BB6\u540D\u79F0\uFF0C\u6BD4\u5982 <code>Russian Federation</code>\u3001<code>United States</code></p></li></ul><h3 id="geoip-city" tabindex="-1"><a class="header-anchor" href="#geoip-city" aria-hidden="true">#</a> geoip_city</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>geoip_city</strong> <code>file</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream</td></tr></tbody></table><p>\u6307\u5B9A\u7528\u4E8E\u6839\u636E\u5BA2\u6237\u7AEF IP \u5730\u5740\u786E\u5B9A\u56FD\u5BB6\u3001\u5730\u533A\u548C\u57CE\u5E02\u7684\u6570\u636E\u5E93\u3002\u4F7F\u7528\u6B64\u6570\u636E\u5E93\u65F6\uFF0C\u4EE5\u4E0B\u53D8\u91CF\u53EF\u7528\uFF1A</p>`,12),$=o("<li><p><code>$geoip_area_code</code></p><p>\u7535\u8BDD\u533A\u53F7\uFF08\u4EC5\u9650\u7F8E\u56FD\uFF09</p><blockquote><p>\u56E0\u4E3A\u4F7F\u7528\u5230\u8FC7\u65F6\u7684\u6570\u636E\u5E93\u5B57\u6BB5\uFF0C\u6B64\u53D8\u91CF\u53EF\u80FD\u5305\u542B\u8FC7\u65F6\u7684\u4FE1\u606F\u3002</p></blockquote></li><li><p><code>$geoip_city_continent_code</code></p><p>\u4E24\u4E2A\u5B57\u6BCD\u8868\u793A\u7684\u5927\u9646\u4EE3\u7801\uFF0C\u6BD4\u5982 <code>RU</code>\u3001<code>US</code></p></li><li><p><code>$geoip_city_country_code</code></p><p>\u4E24\u4E2A\u5B57\u6BCD\u8868\u793A\u7684\u56FD\u5BB6\u4EE3\u7801\uFF0C\u6BD4\u5982 <code>RU</code>\u3001<code>US</code></p></li><li><p><code>$geoip_city_country_code3</code></p><p>\u4E09\u4E2A\u5B57\u6BCD\u8868\u793A\u7684\u56FD\u5BB6\u4EE3\u7801\uFF0C\u6BD4\u5982 <code>RUS</code>\u3001<code>USA</code></p></li><li><p><code>$geoip_city_country_name</code></p><p>\u56FD\u5BB6\u540D\u79F0\uFF0C\u6BD4\u5982 <code>Russian Federation</code>\u3001<code>United States</code></p></li>",5),U=e("p",null,[e("code",null,"$geoip_dma_code")],-1),I=t("\u7F8E\u56FD DMA \u533A\u57DF\u4EE3\u7801\uFF08\u4E5F\u79F0\u4E3A"),P=e("strong",null,"\u90FD\u5E02\u4EE3\u7801",-1),S=t("\uFF09\uFF0C\u6839\u636E Google AdWords API \u4E2D\u7684"),M={href:"https://developers.google.com/adwords/api/docs/appendix/cities-DMAregions",target:"_blank",rel:"noopener noreferrer"},A=t("\u5730\u7406\u4F4D\u7F6E"),R=t("\u5B9A\u4F4D\u3002"),C=o("<li><p><code>$geoip_latitude</code></p><p>\u7EF4\u5EA6</p></li><li><p><code>$geoip_longitude</code></p><p>\u7ECF\u5EA6</p></li><li><p><code>$geoip_region</code></p><p>\u53CC\u7B26\u53F7\u56FD\u5BB6\u533A\u57DF\u4EE3\u7801\uFF08\u5730\u533A\u3001\u9886\u571F\u3001\u5DDE\u3001\u7701\u3001\u8054\u90A6\u571F\u5730\u7B49\uFF09\uFF0C\u4F8B\u5982 <code>48</code>\u3001<code>DC</code>\u3002</p></li><li><p><code>$geoip_region_name</code></p><p>\u56FD\u5BB6\u5730\u533A\u540D\u79F0\uFF08\u5730\u533A\u3001\u9886\u571F\u3001\u5DDE\u3001\u7701\u3001\u8054\u90A6\u571F\u5730\u7B49\uFF09\uFF0C\u4F8B\u5982\uFF1A<code>Moscow City</code>\u3001<code>District of Columbia</code>\u3002</p></li><li><p><code>$geoip_city</code></p><p>\u57CE\u5E02\u540D\u79F0\uFF0C\u4F8B\u5982\uFF1A<code>Moscow\u201D</code>\u3001<code>Washington</code>\u3002</p></li><li><p><code>$geoip_postal_code</code></p><p>\u90AE\u653F\u7F16\u7801</p></li>",6),N=o('<h3 id="geoip-org" tabindex="-1"><a class="header-anchor" href="#geoip-org" aria-hidden="true">#</a> geoip_org</h3><table><thead><tr><th style="text-align:right;">-</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><strong>\u8BED\u6CD5</strong></td><td><strong>geoip_org</strong> <code>file</code>;</td></tr><tr><td style="text-align:right;"><strong>\u9ED8\u8BA4</strong></td><td>\u2014\u2014</td></tr><tr><td style="text-align:right;"><strong>\u4E0A\u4E0B\u6587</strong></td><td>stream</td></tr></tbody></table><p>\u6307\u5B9A\u7528\u4E8E\u6839\u636E\u5BA2\u6237\u7AEF IP \u5730\u5740\u786E\u5B9A\u7EC4\u7EC7\u7684\u6570\u636E\u5E93\u3002\u4F7F\u7528\u6B64\u6570\u636E\u5E93\u65F6\uFF0C\u4EE5\u4E0B\u53D8\u91CF\u53EF\u7528\uFF1A</p><ul><li><p><code>$geoip_org</code></p><p>\u7EC4\u7EC7\u540D\u79F0\uFF0C\u4F8B\u5982\uFF1A<code>The University of Melbourne</code>\u3002</p></li></ul><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>',5),D={href:"http://nginx.org/en/docs/stream/ngx_stream_geoip_module.html",target:"_blank",rel:"noopener noreferrer"},F=t("http://nginx.org/en/docs/stream/ngx_stream_geoip_module.html");function G(V,q){const n=a("OutboundLink");return c(),i(d,null,[l,e("p",null,[g,_,e("a",h,[u,s(n)]),m]),b,y,e("blockquote",null,[e("p",null,[x,e("a",k,[f,s(n)]),v])]),w,e("ul",null,[$,e("li",null,[U,e("p",null,[I,P,S,e("a",M,[A,s(n)]),R])]),C]),N,e("p",null,[e("a",D,[F,s(n)])])],64)}var j=r(p,[["render",G]]);export{j as default};