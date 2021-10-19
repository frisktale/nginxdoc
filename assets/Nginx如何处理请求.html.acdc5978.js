import{r as t,c as p,a as n,b as a,F as c,d as o,e as s,o as l}from"./app.af3e3276.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=o(`<h1 id="nginx-\u5982\u4F55\u5904\u7406\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#nginx-\u5982\u4F55\u5904\u7406\u8BF7\u6C42" aria-hidden="true">#</a> nginx \u5982\u4F55\u5904\u7406\u8BF7\u6C42</h1><ul><li><a href="#name_based_virtual_servers">\u57FA\u4E8E\u540D\u79F0\u7684\u865A\u62DF\u670D\u52A1\u5668</a></li><li><a href="#how_to_prevent_undefined_server_names">\u5982\u4F55\u4F7F\u7528\u672A\u5B9A\u4E49\u7684 server \u540D\u79F0\u6765\u963B\u6B62\u5904\u7406\u8BF7\u6C42</a></li><li><a href="#mixed_name_ip_based_servers">\u57FA\u4E8E\u540D\u79F0\u548C IP \u6DF7\u5408\u7684\u865A\u62DF\u670D\u52A1\u5668</a></li><li><a href="#simple_php_site_configuration">\u4E00\u4E2A\u7B80\u5355\u7684 PHP \u7AD9\u70B9\u914D\u7F6E</a></li></ul><p><a id="name_based_virtual_servers"></a></p><h2 id="\u57FA\u4E8E\u540D\u79F0\u7684\u865A\u62DF\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u540D\u79F0\u7684\u865A\u62DF\u670D\u52A1\u5668" aria-hidden="true">#</a> \u57FA\u4E8E\u540D\u79F0\u7684\u865A\u62DF\u670D\u52A1\u5668</h2><p>nginx \u9996\u5148\u51B3\u5B9A\u54EA\u4E2A <code>server</code> \u5E94\u8BE5\u5904\u7406\u8BF7\u6C42\uFF0C\u8BA9\u6211\u4EEC\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u914D\u7F6E\u5F00\u59CB\uFF0C\u4E09\u4E2A\u865A\u62DF\u670D\u52A1\u5668\u90FD\u76D1\u542C\u4E86 <code>*:80</code> \u7AEF\u53E3\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.org www.example.org</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.net www.example.net</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com www.example.com</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,6),u=s("\u5728\u6B64\u914D\u7F6E\u4E2D\uFF0Cnginx \u4EC5\u68C0\u9A8C\u8BF7\u6C42\u7684 header \u57DF\u4E2D\u7684 "),_=n("code",null,"Host",-1),k=s("\uFF0C\u4EE5\u786E\u5B9A\u8BF7\u6C42\u5E94\u8BE5\u88AB\u8DEF\u7531\u5230\u54EA\u4E00\u4E2A "),b=n("code",null,"server",-1),m=s("\u3002\u5982\u679C\u5176\u503C\u4E0E\u4EFB\u4F55\u7684 "),h=n("code",null,"server",-1),v=s(" \u540D\u79F0\u4E0D\u5339\u914D\uFF0C\u6216\u8005\u8BE5\u8BF7\u6C42\u6839\u672C\u4E0D\u5305\u542B\u6B64 header \u57DF\uFF0Cnginx \u4F1A\u5C06\u8BF7\u6C42\u8DEF\u7531\u5230\u8BE5\u7AEF\u53E3\u7684\u9ED8\u8BA4 "),g=n("code",null,"server",-1),x=s(" \u4E2D\u3002\u5728\u4E0A\u9762\u7684\u914D\u7F6E\u4E2D\uFF0C\u9ED8\u8BA4 "),w=n("code",null,"server",-1),f=s(" \u662F\u7B2C\u4E00\u4E2A\uFF08\u8FD9\u662F nginx \u7684\u6807\u51C6\u9ED8\u8BA4\u884C\u4E3A\uFF09\u3002\u4F60\u4E5F\u53EF\u4EE5\u5728 "),y={href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#listen",target:"_blank",rel:"noopener noreferrer"},I=s("listen"),P=s(" \u6307\u4EE4\u4E2D\u4F7F\u7528 "),q=n("code",null,"default_server",-1),F=s(" \u53C2\u6570\uFF0C\u660E\u786E\u5730\u8BBE\u7F6E\u9ED8\u8BA4\u7684 "),$=n("code",null,"server",-1),j=s("\u3002"),C=o(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.net www.example.net</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>default_server</code> \u53C2\u6570\u81EA 0.8.21 \u7248\u672C\u8D77\u53EF\u7528\u3002\u5728\u65E9\u671F\u7248\u672C\u4E2D\uFF0C\u5E94\u8BE5\u4F7F\u7528 <code>default</code> \u53C2\u6570\u3002</p></blockquote><p>\u8BF7\u6CE8\u610F\uFF0C<code>default_server</code> \u662F <code>listen port</code> \u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F <code>server_name</code> \u7684\u3002\u4E4B\u540E\u4F1A\u6709\u66F4\u591A\u5173\u4E8E\u8FD9\u65B9\u9762\u7684\u5185\u5BB9\u3002</p><p><a id="how_to_prevent_undefined_server_names"></a></p><h2 id="\u5982\u4F55\u4F7F\u7528\u672A\u5B9A\u4E49\u7684-server-\u540D\u79F0\u6765\u963B\u6B62\u5904\u7406\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u672A\u5B9A\u4E49\u7684-server-\u540D\u79F0\u6765\u963B\u6B62\u5904\u7406\u8BF7\u6C42" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u672A\u5B9A\u4E49\u7684 server \u540D\u79F0\u6765\u963B\u6B62\u5904\u7406\u8BF7\u6C42</h2><p>\u5982\u679C\u4E0D\u5141\u8BB8\u6CA1\u6709 \u201CHost\u201D header \u5B57\u6BB5\u7684\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u4E22\u5F03\u8BF7\u6C42\u7684 server\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span>      <span class="token number">444</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u7684 <code>server</code> \u540D\u79F0\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5339\u914D\u4E0D\u5E26 <code>Host</code> \u7684 header \u57DF\u8BF7\u6C42\uFF0Cnginx \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u5173\u95ED\u8FDE\u63A5\u7684\u975E\u6807\u51C6\u4EE3\u7801 444\u3002</p><blockquote><p>\u81EA 0.8.48 \u7248\u672C\u5F00\u59CB\uFF0C\u8FD9\u662F <code>server</code> \u540D\u79F0\u7684\u9ED8\u8BA4\u8BBE\u7F6E\uFF0C\u56E0\u6B64\u53EF\u4EE5\u7701\u7565 <code>server name &quot;&quot;</code>\u3002\u5728\u65E9\u671F\u7248\u672C\u4E2D\uFF0C\u673A\u5668\u7684\u4E3B\u673A\u540D\u88AB\u4F5C\u4E3A <code>server</code> \u7684\u9ED8\u8BA4\u540D\u79F0\u3002</p></blockquote><p><a id="mixed_name_ip_based_servers"></a></p><h2 id="\u57FA\u4E8E\u540D\u79F0\u548C-ip-\u6DF7\u5408\u7684\u865A\u62DF\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u540D\u79F0\u548C-ip-\u6DF7\u5408\u7684\u865A\u62DF\u670D\u52A1\u5668" aria-hidden="true">#</a> \u57FA\u4E8E\u540D\u79F0\u548C IP \u6DF7\u5408\u7684\u865A\u62DF\u670D\u52A1\u5668</h2><p>\u8BA9\u6211\u4EEC\u770B\u770B\u66F4\u52A0\u590D\u6742\u7684\u914D\u7F6E\uFF0C\u5176\u4E2D\u4E00\u4E9B\u865A\u62DF\u670D\u52A1\u5668\u76D1\u542C\u5728\u4E0D\u540C\u7684 IP \u5730\u5740\u4E0A\u76D1\u542C\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.1:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.org www.example.org</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.1:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.net www.example.net</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.2:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com www.example.com</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,13),H=s("\u6B64\u914D\u7F6E\u4E2D\uFF0Cnginx \u9996\u5148\u6839\u636E "),N={href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#server",target:"_blank",rel:"noopener noreferrer"},E=s("server"),B=s(" \u5757\u7684 "),G=n("code",null,"listen",-1),L=s(" \u6307\u4EE4\u68C0\u9A8C\u8BF7\u6C42\u7684 IP \u548C\u7AEF\u53E3\u3002\u4E4B\u540E\uFF0C\u6839\u636E\u4E0E IP \u548C\u7AEF\u53E3\u76F8\u5339\u914D\u7684 "),R=n("code",null,"server",-1),S=s(" \u5757\u7684 "),V={href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#server_name",target:"_blank",rel:"noopener noreferrer"},M=s("server_name"),T=s(" \u9879\u5BF9\u8BF7\u6C42\u7684\u201CHost\u201D header \u57DF\u8FDB\u884C\u68C0\u9A8C\u3002\u5982\u679C\u627E\u4E0D\u5230\u670D\u52A1\u5668\u7684\u540D\u79F0\uFF08server_name\uFF09\uFF0C\u8BF7\u6C42\u5C06\u7531 "),A=n("code",null,"default_server",-1),O=s(" \u5904\u7406\u3002\u4F8B\u5982\uFF0C\u5728 "),U=n("code",null,"192.168.1.1:80",-1),z=s(" \u4E0A\u6536\u5230\u7684\u5BF9 "),D=n("code",null,"www.example.com",-1),J=s(" \u7684\u8BF7\u6C42\u5C06\u7531 "),K=n("code",null,"192.168.1.1:80",-1),Q=s(" \u7AEF\u53E3\u7684 "),W=n("code",null,"default_server",-1),X=s(" \uFF08\u5373\u7B2C\u4E00\u4E2A server\uFF09\u5904\u7406\uFF0C\u56E0\u4E3A\u6CA1\u6709 "),Y=n("code",null,"www.example.com",-1),Z=s(" \u5728\u6B64\u7AEF\u53E3\u4E0A\u5B9A\u4E49\u3002"),nn=o(`<p>\u5982\u4E0A\u6240\u8FF0\uFF0C<code>default_server</code> \u662F <code>listen port</code> \u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7684\u7AEF\u53E3\u5B9A\u4E49\u4E0D\u540C\u7684 <code>default_server</code>\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.1:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.org www.example.org</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.1:80 default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.net www.example.net</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      192.168.1.2:80 default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com www.example.com</span><span class="token punctuation">;</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><a id="simple_php_site_configuration"></a></p><h2 id="\u4E00\u4E2A\u7B80\u5355\u7684-php-\u7AD9\u70B9\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u7B80\u5355\u7684-php-\u7AD9\u70B9\u914D\u7F6E" aria-hidden="true">#</a> \u4E00\u4E2A\u7B80\u5355\u7684 PHP \u7AD9\u70B9\u914D\u7F6E</h2><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u770B\u770B nginx \u662F\u5982\u4F55\u9009\u62E9\u4E00\u4E2A <code>location</code> \u6765\u5904\u7406\u5178\u578B\u7684\u7B80\u5355 PHP \u7AD9\u70B9\u7684\u8BF7\u6C42\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.org www.example.org</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span>        /data/www</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">index</span>   index.html index.php</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ~* \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">30d</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">fastcgi_pass</span>  localhost:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span> SCRIPT_FILENAME
                      <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">include</span>       fastcgi_params</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>nginx \u9996\u5148\u5FFD\u7565\u6392\u5E8F\u641C\u7D22\u5177\u6709\u6700\u660E\u786E\u5B57\u7B26\u4E32\u7684\u524D\u7F00 <code>location</code>\u3002\u5728\u4E0A\u9762\u7684\u914D\u7F6E\u4E2D\uFF0C\u552F\u4E00\u6709\u7B26\u5408\u7684\u662F\u524D\u7F00 <code>location</code> \u4E3A <code>/</code>\uFF0C\u56E0\u4E3A\u5B83\u5339\u914D\u4EFB\u4F55\u8BF7\u6C42\uFF0C\u5B83\u5C06\u88AB\u7528\u4F5C\u6700\u540E\u7684\u624B\u6BB5\u3002\u4E4B\u540E\uFF0Cnginx \u6309\u7167\u914D\u7F6E\u6587\u4EF6\u4E2D\u5217\u51FA\u7684\u987A\u5E8F\u68C0\u67E5\u7531 <code>location</code> \u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u7B2C\u4E00\u4E2A\u5339\u914D\u8868\u8FBE\u5F0F\u505C\u6B62\u641C\u7D22\uFF0Cnginx \u5C06\u4F7F\u7528\u6B64 <code>location</code>\u3002\u5982\u679C\u6CA1\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u8BF7\u6C42\uFF0C\u90A3\u4E48 nginx \u5C06\u4F7F\u7528\u524D\u9762\u627E\u5230\u7684\u6700\u660E\u786E\u7684\u524D\u7F00 <code>location</code>\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u6240\u6709\u7C7B\u578B\u7684 <code>location</code> \u4EC5\u4EC5\u662F\u68C0\u9A8C\u8BF7\u6C42\u7684 URI \u90E8\u5206\uFF0C\u4E0D\u5E26\u53C2\u6570\u3002\u8FD9\u6837\u505A\u662F\u56E0\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u7684\u53C2\u6570\u53EF\u4EE5\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/index.php?user=john&amp;page=1
/index.php?page=1&amp;user=john
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u5916\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u5728\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u8BF7\u6C42\u4EFB\u4F55\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/index.php?page=1&amp;something+else&amp;user=john
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u73B0\u5728\u6765\u770B\u770B\u5728\u4E0A\u9762\u7684\u914D\u7F6E\u4E2D\u662F\u5982\u4F55\u8BF7\u6C42\u7684\uFF1A</p>`,12),sn=o("<li>\u8BF7\u6C42 <code>/logo.gif</code> \u9996\u5148\u4E0E \u524D\u7F00 <code>location</code> \u4E3A <code>/</code> \u76F8\u5339\u914D\uFF0C\u7136\u540E\u7531\u6B63\u5219\u8868\u8FBE\u5F0F <code>\\.(gif|jpg|png)$</code> \u5339\u914D\uFF0C\u56E0\u6B64\u7531\u540E\u4E00\u4E2A <code>location</code> \u5904\u7406\u3002\u4F7F\u7528\u6307\u4EE4 <code>root /data/www</code> \u5C06\u8BF7\u6C42\u6620\u5C04\u5230 <code>/data/www/logo.gif</code> \u6587\u4EF6\uFF0C\u5E76\u5C06\u6587\u4EF6\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</li>",1),en=s("\u4E00\u4E2A "),an=n("code",null,"/index.php",-1),on=s(" \u7684\u8BF7\u6C42\u4E5F\u662F\u9996\u5148\u4E0E\u524D\u7F00 "),tn=n("code",null,"location",-1),pn=s(" \u4E3A "),cn=n("code",null,"/",-1),ln=s(" \u76F8\u5339\u914D\uFF0C\u7136\u540E\u662F\u6B63\u5219\u8868\u8FBE\u5F0F "),rn=n("code",null,"\\.(php)$",-1),dn=s("\u3002\u56E0\u6B64\uFF0C\u5B83\u7531\u540E\u4E00\u4E2A "),un=n("code",null,"location",-1),_n=s(" \u5904\u7406\uFF0C\u8BF7\u6C42\u5C06\u88AB\u4F20\u9012\u7ED9\u5728 "),kn=n("code",null,"localhost:9000",-1),bn=s(" \u4E0A\u76D1\u542C\u7684 FastCGI \u670D\u52A1\u5668\u3002"),mn={href:"http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_param",target:"_blank",rel:"noopener noreferrer"},hn=s("fastcgi_param"),vn=s(" \u6307\u4EE4\u5C06 FastCGI \u53C2\u6570 "),gn=n("code",null,"SCRPT_FILENAME",-1),xn=s(" \u8BBE\u7F6E\u4E3A "),wn=n("code",null,"/data/www/index.php",-1),fn=s("\uFF0CFastCGI \u670D\u52A1\u5668\u6267\u884C\u8BE5\u6587\u4EF6\u3002\u53D8\u91CF "),yn=n("code",null,"$document_root",-1),In=s(" \u4E0E "),Pn={href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"},qn=s("root"),Fn=s(" \u6307\u4EE4\u7684\u503C\u662F\u4E00\u6837\u7684\uFF0C\u53D8\u91CF "),$n=n("code",null,"$fastcgi_script_name",-1),jn=s(" \u7684\u503C\u4E3A\u8BF7\u6C42URI\uFF0C\u5373 "),Cn=n("code",null,"/index.php",-1),Hn=s("\u3002"),Nn=n("li",null,[n("code",null,"/about.html"),s(" \u8BF7\u6C42\u4EC5\u4E0E\u524D\u7F00 "),n("code",null,"location"),s(" \u4E3A "),n("code",null,"/"),s(" \u76F8\u5339\u914D\uFF0C\u56E0\u6B64\u7531\u6B64 "),n("code",null,"location"),s(" \u5904\u7406\u3002\u4F7F\u7528\u6307\u4EE4 "),n("code",null,"root /data/www"),s(" \u5C06\u8BF7\u6C42\u6620\u5C04\u5230 "),n("code",null,"/data/www/about.html"),s(" \u6587\u4EF6\uFF0C\u5E76\u5C06\u6587\u4EF6\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002")],-1),En=s("\u5904\u7406\u8BF7\u6C42 "),Bn=n("code",null,"/",-1),Gn=s(" \u66F4\u590D\u6742\u3002\u5B83\u4E0E\u524D\u7F00 "),Ln=n("code",null,"location",-1),Rn=s(" \u4E3A "),Sn=n("code",null,"/",-1),Vn=s(" \u76F8\u5339\u914D\u3002\u56E0\u6B64\u7531\u8BE5 "),Mn=n("code",null,"location",-1),Tn=s(" \u5904\u7406\u3002\u7136\u540E\uFF0C"),An={href:"http://nginx.org/en/docs/http/ngx_http_index_module.html#index",target:"_blank",rel:"noopener noreferrer"},On=s("index"),Un=s(" \u6307\u4EE4\u6839\u636E\u5176\u53C2\u6570\u548C "),zn=n("code",null,"root /data/www",-1),Dn=s(" \u6307\u4EE4\u68C0\u9A8C\u7D22\u5F15\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u6587\u4EF6 "),Jn=n("code",null,"/data/www/index.html",-1),Kn=s(" \u4E0D\u5B58\u5728\uFF0C\u5E76\u4E14\u6587\u4EF6 "),Qn=n("code",null,"/data/www/index.php",-1),Wn=s(" \u5B58\u5728\uFF0C\u5219\u8BE5\u6307\u4EE4\u6267\u884C\u5185\u90E8\u91CD\u5B9A\u5411\u5230 "),Xn=n("code",null,"/index.php",-1),Yn=s("\uFF0C\u5982\u679C\u8BF7\u6C42\u662F\u7531\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\uFF0Cnginx \u5C06\u518D\u6B21\u641C\u7D22 "),Zn=n("code",null,"location",-1),ns=s("\u3002\u5982\u4E4B\u524D\u6240\u8FF0\uFF0C\u91CD\u5B9A\u5411\u8BF7\u6C42\u6700\u7EC8\u7531 FastCGI \u670D\u52A1\u5668\u5904\u7406\u3002"),ss=n("p",null,"\u7531 Igor Sysoev \u64B0\u5199 \u7531 Brian Mercer \u7F16\u8F91",-1),es=n("h2",{id:"\u539F\u6587",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u539F\u6587","aria-hidden":"true"},"#"),s(" \u539F\u6587")],-1),as={href:"http://nginx.org/en/docs/http/request_processing.html",target:"_blank",rel:"noopener noreferrer"},os=s("http://nginx.org/en/docs/http/request_processing.html");function ts(ps,cs){const e=t("OutboundLink");return l(),p(c,null,[d,n("p",null,[u,_,k,b,m,h,v,g,x,w,f,n("a",y,[I,a(e)]),P,q,F,$,j]),C,n("p",null,[H,n("a",N,[E,a(e)]),B,G,L,R,S,n("a",V,[M,a(e)]),T,A,O,U,z,D,J,K,Q,W,X,Y,Z]),nn,n("ul",null,[sn,n("li",null,[en,an,on,tn,pn,cn,ln,rn,dn,un,_n,kn,bn,n("a",mn,[hn,a(e)]),vn,gn,xn,wn,fn,yn,In,n("a",Pn,[qn,a(e)]),Fn,$n,jn,Cn,Hn]),Nn,n("li",null,[En,Bn,Gn,Ln,Rn,Sn,Vn,Mn,Tn,n("a",An,[On,a(e)]),Un,zn,Dn,Jn,Kn,Qn,Wn,Xn,Yn,Zn,ns])]),ss,es,n("ul",null,[n("li",null,[n("a",as,[os,a(e)])])])],64)}var is=r(i,[["render",ts]]);export{is as default};
