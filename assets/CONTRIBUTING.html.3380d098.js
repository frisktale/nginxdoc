import{r as a,c as o,a as s,b as c,F as i,d as t,e as n,o as l}from"./app.245ece3f.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const p={},u=t(`<h1 id="\u8D21\u732E\u5BFC\u5F15" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E\u5BFC\u5F15" aria-hidden="true">#</a> \u8D21\u732E\u5BFC\u5F15</h1><p>\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u5982\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u63D0\u51FA issue</p><ul><li>\u5728 GitHub \u4E0A\u70B9\u51FB <code>fork</code> \u5C06\u672C\u4ED3\u5E93 fork \u5230\u81EA\u5DF1\u7684\u4ED3\u5E93\uFF0C\u5982 <code>yourname/nginx-docs</code>\uFF0C\u7136\u540E <code>clone</code> \u5230\u672C\u5730\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:yourname/nginx-docs.git
$ <span class="token builtin class-name">cd</span> nginx-docs
<span class="token comment"># \u5C06\u9879\u76EE\u4E0E\u4E0A\u6E38\u5173\u8054</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token builtin class-name">source</span> git@github.com:DocsHome/nginx-docs.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u589E\u52A0\u5185\u5BB9\u6216\u8005\u4FEE\u590D\u9519\u8BEF\u540E\u63D0\u4EA4\uFF0C\u5E76\u63A8\u9001\u5230\u81EA\u5DF1\u7684\u4ED3\u5E93\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -am <span class="token string">&quot;Fix issue #1: change helo to hello&quot;</span>
$ <span class="token function">git</span> push origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>\u5728 GitHub \u4E0A\u63D0\u4EA4 <code>pull request</code>\u3002</p></li><li><p>\u8BF7\u5B9A\u671F\u66F4\u65B0\u81EA\u5DF1\u4ED3\u5E93\u5185\u5BB9\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch <span class="token builtin class-name">source</span>
$ <span class="token function">git</span> rebase source/master
$ <span class="token function">git</span> push -f origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="\u6392\u7248\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u6392\u7248\u89C4\u8303" aria-hidden="true">#</a> \u6392\u7248\u89C4\u8303</h1>`,9),d=n("\u672C\u9879\u76EE\u6392\u7248\u9075\u5FAA "),b={href:"https://github.com/mzlogin/chinese-copywriting-guidelines",target:"_blank",rel:"noopener noreferrer"},m=n("\u4E2D\u6587\u6392\u7248\u6307\u5357"),g=n(" \u89C4\u8303\u3002");function h(f,_){const e=a("OutboundLink");return l(),o(i,null,[u,s("p",null,[d,s("a",b,[m,c(e)]),g])],64)}var x=r(p,[["render",h]]);export{x as default};