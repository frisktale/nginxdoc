import{r,c as i,a as n,b as s,w as a,F as p,d as l,e,o as c}from"./app.af3e3276.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";const u={},g=l(`<h1 id="ngx-mail-core-module" tabindex="-1"><a class="header-anchor" href="#ngx-mail-core-module" aria-hidden="true">#</a> ngx_mail_core_module</h1><ul><li><a href="#example_configuration">\u793A\u4F8B\u914D\u7F6E</a></li><li><a href="#directives">\u6307\u4EE4</a><ul><li><a href="#listen">listen</a></li><li><a href="#mail">mail</a></li><li><a href="#protocol">protocol</a></li><li><a href="#resolver">resolver</a></li><li><a href="#resolver_timeout">resolver_timeout</a></li><li><a href="#server">server</a></li><li><a href="#server_name">server_name</a></li><li><a href="#timeout">timeout</a></li></ul></li></ul><p>\u9ED8\u8BA4\u4E0D\u6784\u5EFA\u6B64\u6A21\u5757\uFF0C\u53EF\u4F7F\u7528 <code>--with-mail</code> \u914D\u7F6E\u53C2\u6570\u542F\u7528\u3002</p><p><a id="example_configuration"></a></p><h2 id="\u793A\u4F8B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u914D\u7F6E" aria-hidden="true">#</a> \u793A\u4F8B\u914D\u7F6E</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log info</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">mail</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span>       mail.example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">auth_http</span>         localhost:9000/cgi-bin/nginxauth.cgi</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">imap_capabilities</span> IMAP4rev1 UIDPLUS IDLE LITERAL+ QUOTA</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">pop3_auth</span>         plain apop cram-md5</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">pop3_capabilities</span> LAST TOP USER PIPELINING UIDL</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">smtp_auth</span>         login plain cram-md5</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">smtp_capabilities</span> <span class="token string">&quot;SIZE 10485760&quot;</span> ENHANCEDSTATUSCODES <span class="token number">8BITMIME</span> DSN</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">xclient</span>           <span class="token boolean">off</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">25</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">protocol</span> smtp</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">110</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">protocol</span> pop3</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass_error_message</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">143</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">protocol</span> imap</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">587</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">protocol</span> smtp</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><a id="directives"></a></p><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen" aria-hidden="true">#</a> listen</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>listen</strong> <code>address:port [ssl] [backlog=number] [rcvbuf=size] [sndbuf=size] [bind] [ipv6only=on|off] [so_keepalive=on|off|[keepidle]:[keepintvl]:[keepcnt]]</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">\u2014\u2014</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">server</td></tr></tbody></table><p>\u4E3A\u5C06\u63A5\u53D7\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u7684\u5957\u63A5\u5B57\u8BBE\u7F6E\u5730\u5740\uFF08<code>address</code>\uFF09\u548C\u7AEF\u53E3\uFF08<code>port</code>\uFF09\u3002\u53EF\u4EE5\u4EC5\u6307\u5B9A\u7AEF\u53E3\u3002\u5730\u5740\u4E5F\u53EF\u4EE5\u662F\u4E3B\u673A\u540D\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">listen</span> 127.0.0.1:110</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">listen</span> *:110</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">listen</span> <span class="token number">110</span></span><span class="token punctuation">;</span>     <span class="token comment"># same as *:110</span>
<span class="token directive"><span class="token keyword">listen</span> localhost:110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>IPv6 \u5730\u5740\u5728\u65B9\u62EC\u53F7\u4E2D\u6307\u5B9A\uFF080.7.58\uFF09\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">listen</span> [::1]:110</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">listen</span> [::]:110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>UNIX \u57DF\u5957\u63A5\u5B57\u4F7F\u7528 <code>unix:</code> \u524D\u7F00\u6307\u5B9A\uFF081.3.5\uFF09\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">listen</span> unix:/var/run/nginx.sock</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0D\u540C\u7684\u670D\u52A1\u5668\u5FC5\u987B\u4FA6\u542C\u4E0D\u540C\u7684 <code>address:port</code> \u5BF9\uFF0C\u4E0D\u80FD\u91CD\u590D\u3002</p><p><code>ssl</code> \u53C2\u6570\u6307\u5B9A\u8BE5\u7AEF\u53E3\u4E0A\u63A5\u53D7\u7684\u6240\u6709\u8FDE\u63A5\u5747\u5E94\u4EE5 SSL \u6A21\u5F0F\u5DE5\u4F5C\u3002</p><p><code>listen</code> \u6307\u4EE4\u53EF\u4EE5\u6307\u5B9A\u51E0\u4E2A\u989D\u5916\u7684\u53C2\u6570\u7ED9\u5957\u63A5\u5B57\u76F8\u5173\u7684\u7CFB\u7EDF\u8C03\u7528\u3002</p><ul><li><p><code>backlog=number</code></p><p>\u5728 <code>listen()</code> \u8C03\u7528\u4E2D\u8BBE\u7F6E <code>backlog</code> \u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u9650\u5236\u6302\u8D77\u7684\u8FDE\u63A5\u961F\u5217\u7684\u6700\u5927\u957F\u5EA6\uFF081.9.2\uFF09\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728 FreeBSD\u3001DragonFly BSD \u548C mac OS\u4E0A\uFF0C<code>backlog</code> \u8BBE\u7F6E\u4E3A -1\uFF0C\u800C\u5728\u5176\u4ED6\u5E73\u53F0\u4E0A\u5219\u8BBE\u7F6E\u4E3A 511\u3002</p></li><li><p><code>rcvbuf=size</code></p><p>\u8BBE\u7F6E\u4FA6\u542C\u5957\u63A5\u5B57\u7684\u63A5\u6536\u7F13\u51B2\u533A\u5927\u5C0F\uFF08<code>SO_RCVBUF</code> \u9009\u9879\uFF09\uFF081.11.13\uFF09\u3002</p></li><li><p><code>sndbuf=size</code></p><p>\u8BBE\u7F6E\u4FA6\u542C\u5957\u63A5\u5B57\u7684\u53D1\u9001\u7F13\u51B2\u533A\u5927\u5C0F\uFF08<code>SO_SNDBUF</code> \u9009\u9879\uFF09\uFF081.11.13\uFF09\u3002</p></li><li><p><code>bind</code></p><p>\u6B64\u53C2\u6570\u6307\u793A\u5BF9\u7ED9\u5B9A\u7684 <code>address:port</code> \u5BF9\u8FDB\u884C\u5355\u72EC\u7684 <code>bind()</code> \u8C03\u7528\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u6709\u76F8\u540C\u7AEF\u53E3\u4F46\u5730\u5740\u4E0D\u540C\u7684 <code>listen</code> \u6307\u4EE4\uFF0C\u5E76\u4E14\u5176\u4E2D\u4E00\u4E2A <code>listen</code> \u6307\u4EE4\u5728\u7ED9\u5B9A\u7AEF\u53E3\uFF08<code>*:port</code>\uFF09\u7684\u6240\u6709\u5730\u5740\u4E0A\u76D1\u542C\uFF0Cnginx \u53EA\u4F1A\u5C06\u7ED1\u5B9A\uFF08<code>bind()</code>\uFF09\u5230 <code>*:port</code>\u3002\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C06\u8FDB\u884C <code>getsockname()</code> \u7CFB\u7EDF\u8C03\u7528\uFF0C\u4EE5\u786E\u5B9A\u63A5\u53D7\u8FDE\u63A5\u7684\u5730\u5740\u3002\u5982\u679C\u4F7F\u7528 <code>ipv6only</code> \u6216 <code>so_keepalive</code> \u53C2\u6570\uFF0C\u5219\u5BF9\u4E8E\u7ED9\u5B9A\u7684 <code>address:port</code> \u5BF9\uFF0C\u5C06\u59CB\u7EC8\u8FDB\u884C\u5355\u72EC\u7684 <code>bind()</code> \u8C03\u7528\u3002</p></li><li><p><code>ipv6only=on|off</code></p><p>\u6B64\u53C2\u6570\u786E\u5B9A\uFF08\u901A\u8FC7 <code>IPV6_V6ONLY</code> \u5957\u63A5\u5B57\u9009\u9879\uFF09\u76D1\u542C\u901A\u914D\u7B26\u5730\u5740 <code>[::]</code> \u7684 IPv6 \u5957\u63A5\u5B57\u662F\u5426\u4EC5\u63A5\u53D7 IPv6 \u8FDE\u63A5\uFF0C\u8FD8\u662F\u63A5\u53D7 IPv6 \u548C IPv4 \u8FDE\u63A5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6B64\u53C2\u6570\u662F\u6253\u5F00\u7684\u3002\u542F\u52A8\u65F6\u53EA\u80FD\u8BBE\u7F6E\u4E00\u6B21\u3002</p></li><li><p><code>so_keepalive=on|off|[keepidle]:[keepintvl]:[keepcnt]</code></p><p>\u6B64\u53C2\u6570\u4E3A\u76D1\u542C\u5957\u63A5\u5B57\u914D\u7F6E\u300CTCP keepalive\u300D\u884C\u4E3A\u3002\u5982\u679C\u7701\u7565\u6B64\u53C2\u6570\uFF0C\u5219\u5957\u63A5\u5B57\u7684\u64CD\u4F5C\u7CFB\u7EDF\u8BBE\u7F6E\u5C06\u751F\u6548\u3002\u5982\u679C\u5C06\u5176\u8BBE\u7F6E\u4E3A\u503C <code>on</code>\uFF0C\u5219\u4F1A\u4E3A\u5957\u63A5\u5B57\u6253\u5F00 <code>SO_KEEPALIVE</code> \u9009\u9879\u3002\u5982\u679C\u5C06\u5176\u8BBE\u7F6E\u4E3A\u503C <code>off</code>\uFF0C\u5219\u5C06\u5173\u95ED\u5957\u63A5\u5B57 <code>SO_KEEPALIVE</code> \u9009\u9879\u3002\u67D0\u4E9B\u64CD\u4F5C\u7CFB\u7EDF\u652F\u6301\u4F7F\u7528 <code>TCP_KEEPIDLE</code>\u3001<code>TCP_KEEPINTVL</code> \u548C <code>TCP_KEEPCNT</code> \u5957\u63A5\u5B57\u9009\u9879\u5728\u6BCF\u4E2A\u5957\u63A5\u5B57\u7684\u57FA\u7840\u4E0A\u8BBE\u7F6E TCP Keepalive \u53C2\u6570\u3002\u5728\u6B64\u7C7B\u7CFB\u7EDF\uFF08\u5F53\u524D\u4E3A Linux 2.4+\u3001NetBSD 5+ \u548C FreeBSD 9.0-STABLE\uFF09\u4E0A\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>keepidle</code>\u3001<code>keepintvl</code> \u548C <code>keepcnt</code> \u53C2\u6570\u8FDB\u884C\u914D\u7F6E\u3002\u53EF\u4EE5\u7701\u7565\u4E00\u4E2A\u6216\u4E24\u4E2A\u53C2\u6570\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u76F8\u5E94\u5957\u63A5\u5B57\u9009\u9879\u7684\u7CFB\u7EDF\u9ED8\u8BA4\u8BBE\u7F6E\u5C06\u751F\u6548\u3002\u4F8B\u5982\uFF0C</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>so_keepalive=30m::10
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F1A\u5C06\u95F2\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF08<code>TCP_KEEPIDLE</code>\uFF09\u8BBE\u7F6E\u4E3A 30 \u5206\u949F\uFF0C\u5C06\u63A2\u6D4B\u95F4\u9694\uFF08<code>TCP_KEEPINTVL</code>\uFF09\u4FDD\u7559\u4E3A\u7CFB\u7EDF\u9ED8\u8BA4\u503C\uFF0C\u5E76\u5C06\u63A2\u6D4B\u8BA1\u6570\uFF08<code>TCP_KEEPCNT</code>\uFF09\u8BBE\u7F6E\u4E3A 10 \u4E2A\u63A2\u6D4B\u3002</p></li></ul><h3 id="mail" tabindex="-1"><a class="header-anchor" href="#mail" aria-hidden="true">#</a> mail</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>mail</strong> <code>{ ... }</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">\u2014\u2014</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">main</td></tr></tbody></table><p>\u5728\u6307\u5B9A\u7684\u90AE\u4EF6\u670D\u52A1\u5668\u6307\u4EE4\u4E2D\u63D0\u4F9B\u914D\u7F6E\u6587\u4EF6\u4E0A\u4E0B\u6587\u3002</p><h3 id="protocol" tabindex="-1"><a class="header-anchor" href="#protocol" aria-hidden="true">#</a> protocol</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>protocol</strong> <code>imap</code> | <code>pop3</code> | <code>smtp</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">\u2014\u2014</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">server</td></tr></tbody></table>`,25),m=e("\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u7684\u534F\u8BAE\u3002\u652F\u6301\u7684\u534F\u8BAE\u6709 "),h=e("IMAP"),b=e("\u3001"),k=e("POP3"),_=e(" \u548C "),x=e("SMTP"),v=e("\u3002"),f=n("p",null,[e("\u5982\u679C\u672A\u8BBE\u7F6E\u8BE5\u6307\u4EE4\uFF0C\u5219\u53EF\u4EE5\u57FA\u4E8E "),n("a",{href:"#listen"},"listen"),e(" \u6307\u4EE4\u4E2D\u6307\u5B9A\u7684\u4E3A\u4EBA\u719F\u77E5\u7684\u9ED8\u8BA4\u7AEF\u53E3\u6765\u81EA\u52A8\u68C0\u6D4B\u534F\u8BAE\uFF1A")],-1),y=n("ul",null,[n("li",null,[n("code",null,"imap"),e("\uFF1A143\u3001993")]),n("li",null,[n("code",null,"pop3"),e("\uFF1A110\u3001995")]),n("li",null,[n("code",null,"smtp"),e("\uFF1A25\u3001587\u3001465")])],-1),E=e("\u53EF\u4EE5\u4F7F\u7528"),w=e("\u914D\u7F6E"),P=e("\u53C2\u6570 "),I=n("code",null,"--without-mail_imap_module",-1),S=e("\u3001"),T=n("code",null,"--without-mail_pop3_module",-1),A=e(" \u548C "),L=n("code",null,"--without-mail_smtp_module",-1),D=e(" \u7981\u7528\u4E0D\u5FC5\u8981\u7684\u534F\u8BAE\u3002"),N=l('<h3 id="resolver" tabindex="-1"><a class="header-anchor" href="#resolver" aria-hidden="true">#</a> resolver</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>resolver</strong> <code>address ... [valid=time] [ipv6=on|off] [status_zone=zone]</code>;<br><strong>resolver</strong> <code>off</code></td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">resolver off;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">mail\u3001server</td></tr></tbody></table>',2),C=e("\u914D\u7F6E\u7528\u4E8E\u67E5\u627E\u5BA2\u6237\u7AEF\u4E3B\u673A\u540D\u4EE5\u5C06\u5176\u4F20\u9012\u7ED9"),B=e("\u8EAB\u4EFD\u9A8C\u8BC1\u670D\u52A1\u5668"),O=e("\u7684\u540D\u79F0\u670D\u52A1\u5668\uFF0C\u4EE5\u53CA\u4EE3\u7406 SMTP \u65F6\u7684 "),F=e("XCLIENT"),V=e(" \u547D\u4EE4\u3002 \u4F8B\u5982\uFF1A"),q=l(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">resolver</span> 127.0.0.1 [::1]:5353</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u4F7F\u7528\u53EF\u9009\u7AEF\u53E3\uFF081.3.1\u30011.2.2\uFF09\u5C06\u5730\u5740\u6307\u5B9A\u4E3A\u57DF\u540D\u6216 IP \u5730\u5740\u3002\u5982\u679C\u672A\u6307\u5B9A\u7AEF\u53E3\uFF0C\u5219\u4F7F\u7528\u7AEF\u53E3 53\u3002\u4EE5\u8F6E\u8BE2\u65B9\u5F0F\u67E5\u8BE2\u540D\u79F0\u670D\u52A1\u5668\u3002</p><blockquote><p>\u5728 1.1.7 \u7248\u672C\u4E4B\u524D\uFF0C\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u540D\u79F0\u670D\u52A1\u5668\u3002\u4ECE 1.3.1 \u548C 1.2.2 \u7248\u672C\u5F00\u59CB\uFF0C\u652F\u6301\u4F7F\u7528 IPv6 \u5730\u5740\u6307\u5B9A\u540D\u79F0\u670D\u52A1\u5668\u3002</p></blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cnginx \u5C06\u5728\u89E3\u6790\u65F6\u540C\u65F6\u67E5\u627E IPv4 \u548C IPv6 \u5730\u5740\u3002\u5982\u679C\u4E0D\u9700\u8981\u67E5\u627E IPv6 \u5730\u5740\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A <code>ipv6=off</code> \u53C2\u6570\u3002</p><blockquote><p>\u4ECE 1.5.8 \u7248\u672C\u5F00\u59CB\uFF0C\u652F\u6301\u5C06\u540D\u79F0\u89E3\u6790\u4E3A IPv6 \u5730\u5740\u3002</p></blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cnginx \u4F7F\u7528\u54CD\u5E94\u7684 TTL \u503C\u7F13\u5B58\u5E94\u7B54\u3002\u53EF\u9009\u7684 <code>valid</code> \u53C2\u6570\u53EF\u8986\u76D6\u5B83\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">resolver</span> 127.0.0.1 [::1]:5353 valid=30s</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u57281.1.9 \u7248\u672C\u4E4B\u524D\uFF0C\u65E0\u6CD5\u8C03\u6574\u7F13\u5B58\u65F6\u95F4\uFF0Cnginx \u59CB\u7EC8\u5C06\u5E94\u7B54\u7F13\u5B58 5 \u5206\u949F\u3002</p></blockquote><blockquote><p>\u4E3A\u9632\u6B62 DNS \u6B3A\u9A97\uFF0C\u5EFA\u8BAE\u5728\u9002\u5F53\u5B89\u5168\u7684\u53D7\u4FE1\u4EFB\u672C\u5730\u7F51\u7EDC\u4E2D\u914D\u7F6E DNS \u670D\u52A1\u5668\u3002</p></blockquote>`,9),M=e("\u53EF\u9009\u7684 "),K=n("code",null,"status_zone",-1),U=e(" \u53C2\u6570\uFF081.17.1\uFF09\u542F\u7528\u5BF9\u6307\u5B9A\u533A\u57DF\u4E2D\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u7684 DNS \u670D\u52A1\u5668\u7EDF\u8BA1\u4FE1\u606F\u7684[\u6536\u96C6]\u529F\u80FD(../http/ngx_http_api_module.md#resolvers_)\u3002\u8BE5\u53C2\u6570\u4E3A\u6211\u4EEC\u7684"),z={href:"http://nginx.com/products/?_ga=2.151996858.282650095.1578660485-1105498734.1571247330",target:"_blank",rel:"noopener noreferrer"},R=e("\u5546\u4E1A\u8BA2\u9605"),H=e("\u90E8\u5206\u3002"),X=l(`<p>\u7279\u6B8A\u503C <code>off</code> \u7981\u7528\u89E3\u6790\u3002</p><h3 id="resolver-timeout" tabindex="-1"><a class="header-anchor" href="#resolver-timeout" aria-hidden="true">#</a> resolver_timeout</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>resolver_timeout</strong> <code>time</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">resolver_timeout 30s;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">mail\u3001server</td></tr></tbody></table><p>\u8BBE\u7F6E DNS \u64CD\u4F5C\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">resolver_timeout</span> <span class="token number">5s</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>server</strong> <code>{ ... }</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">\u2014\u2014</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">mail</td></tr></tbody></table><p>\u8BBE\u7F6E\u670D\u52A1\u5668\u7684\u914D\u7F6E\u3002</p><h3 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name" aria-hidden="true">#</a> server_name</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>server_name</strong> <code>name</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">server_name hostname;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">mail\u3001server</td></tr></tbody></table><p>\u8BBE\u7F6E\u670D\u52A1\u5668\u540D\u79F0\uFF0C\u5728\u4EE5\u4E0B\u573A\u666F\u4E2D\u4F7F\u7528\u7684\uFF1A</p>`,11),j=n("li",null,"\u6700\u5F00\u59CB\u7684 POP3/SMTP \u670D\u52A1\u5668\u95EE\u5019\u8BED\u4E2D",-1),G=n("li",null,"SASL CRAM-MD5 \u8EAB\u4EFD\u9A8C\u8BC1\u4E2D\u7684\u76D0\u503C\u4E2D",-1),Q=e("\u5982\u679C\u542F\u7528\u4E86 "),Y=e("XCLIENT"),Z=e(" \u547D\u4EE4\u7684\u4F20\u9012\uFF0C\u5219\u5728\u8FDE\u63A5\u5230 SMTP \u540E\u7AEF\u65F6\uFF0C\u5728 "),J=n("code",null,"EHLO",-1),W=e(" \u547D\u4EE4\u4E2D"),$=l('<p>\u5982\u679C\u672A\u6307\u5B9A\u6307\u4EE4\uFF0C\u5219\u4F7F\u7528\u8BA1\u7B97\u673A\u7684\u4E3B\u673A\u540D\u3002</p><h3 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h3><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>\u8BED\u6CD5</strong></td><td style="text-align:left;"><strong>timeout</strong> <code>time</code>;</td></tr><tr><td style="text-align:left;"><strong>\u9ED8\u8BA4</strong></td><td style="text-align:left;">timeout 60s;</td></tr><tr><td style="text-align:left;"><strong>\u4E0A\u4E0B\u6587</strong></td><td style="text-align:left;">mail\u3001server</td></tr></tbody></table><p>\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u5728\u4EE3\u7406\u5230\u540E\u7AEF\u5F00\u59CB\u4E4B\u524D\u4F7F\u7528\u3002</p><h2 id="\u539F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u539F\u6587\u6863" aria-hidden="true">#</a> \u539F\u6587\u6863</h2>',5),ee={href:"http://nginx.org/en/docs/mail/ngx_mail_core_module.html",target:"_blank",rel:"noopener noreferrer"},ne=e("http://nginx.org/en/docs/mail/ngx_mail_core_module.html");function se(te,ae){const t=r("RouterLink"),o=r("OutboundLink");return c(),i(p,null,[g,n("p",null,[m,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_imap_module.html"},{default:a(()=>[h]),_:1}),b,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_pop3_module.html"},{default:a(()=>[k]),_:1}),_,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_smtp_module.html"},{default:a(()=>[x]),_:1}),v]),f,y,n("p",null,[E,s(t,{to:"/How-To/%E4%BB%8E%E6%BA%90%E7%A0%81%E6%9E%84%E5%BB%BAnginx.html"},{default:a(()=>[w]),_:1}),P,I,S,T,A,L,D]),N,n("p",null,[C,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_auth_http_module.html"},{default:a(()=>[B]),_:1}),O,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_proxy_module.html#xclient"},{default:a(()=>[F]),_:1}),V]),q,n("p",null,[M,K,U,n("a",z,[R,s(o)]),H]),X,n("ul",null,[j,G,n("li",null,[Q,s(t,{to:"/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83/mail/ngx_mail_proxy_module.html#xclient"},{default:a(()=>[Y]),_:1}),Z,J,W])]),$,n("ul",null,[n("li",null,[n("a",ee,[ne,s(o)])])])],64)}var re=d(u,[["render",se]]);export{re as default};
