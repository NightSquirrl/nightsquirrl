import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as t}from"./app-jzX7c5DY.js";const e={},p=t(`<blockquote><p>😉网站</p><p>Spring官网:https://spring.io</p></blockquote><figure><img src="https://img.picgo.net/2023/11/17/Image-From-day04-SpringBootWeb3f4d3174641f5cbc.png" alt="Image From day04-SpringBootWeb入门" tabindex="0" loading="lazy"><figcaption>Image From day04-SpringBootWeb入门</figcaption></figure><p>Spring发展到今天已经形成了一种开发生态圈，Spring提供了若干个子项目，每个项目用于完成特定的功能。而我们在项目开发时，一般会偏向于选择这一套spring家族的技术，来解决对应领域的问题，那我们称这一套技术为<strong>spring</strong>全家桶。而Spring家族旗下这么多的技术，最基础、最核心的是 SpringFramework。其他的spring家族的技术，都是基于SpringFramework的，SpringFramework中提供很多实用功能，如：依赖注入、事务管理、web开发支持、数据访问、消息服务等等。</p><figure><img src="https://img.picgo.net/2023/11/17/image-202311172127584643b1b3e40a83d1a98.png" alt="image-20231117212758464" tabindex="0" loading="lazy"><figcaption>image-20231117212758464</figcaption></figure><p>而如果我们在项目中，直接基于SpringFramework进行开发，存在两个问题：配置繁琐、入门难度大。</p><figure><img src="https://img.picgo.net/2023/11/17/image-20231117212820022c674935f190c643e.png" alt="image-20231117212820022" tabindex="0" loading="lazy"><figcaption>image-20231117212820022</figcaption></figure><p>所以基于此呢，spring官方推荐我们从另外一个项目开始学习，那就是目前最火爆的SpringBoot。通过springboot就可以快速的帮我们构建应用程序，所以springboot呢，最大的特点有两个 ：</p><ul><li><p>简化配置</p></li><li><p>快速开发</p></li></ul><p><strong>Spring Boot</strong> <strong>可以帮助我们非常快速的构建应用程序、简化开发、提高效率 。</strong></p><h2 id="_1-springbootweb快速入门" tabindex="-1"><a class="header-anchor" href="#_1-springbootweb快速入门"><span>1. <strong>SpringBootWeb</strong>快速入门</span></a></h2><p>创建SpringBoot工程项目</p><p>基于Spring官方骨架，创建SpringBoot工程。</p><figure><img src="https://img.picgo.net/2023/11/17/image-20231117212959823d3b58f69f155ac42.png" alt="image-20231117212959823" tabindex="0" loading="lazy"><figcaption>image-20231117212959823</figcaption></figure><figure><img src="https://img.picgo.net/2023/11/17/image-202311172130211518028b4d4be3bbaad.png" alt="image-20231117213021151" tabindex="0" loading="lazy"><figcaption>image-20231117213021151</figcaption></figure><ol><li>在com.itheima这个包下创建一个子包controller</li></ol><figure><img src="https://img.picgo.net/2023/11/17/image-202311172131223753d62e05775aea042.png" alt="image-20231117213122375" tabindex="0" loading="lazy"><figcaption>image-20231117213122375</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span> 
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World ~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello World ~&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行测试</p></blockquote><figure><img src="https://img.picgo.net/2023/11/17/image-20231117213230149fef10713f9eaa96f.png" alt="image-20231117213230149" tabindex="0" loading="lazy"><figcaption>image-20231117213230149</figcaption></figure><p>打开浏览器，输入<code> http://localhost:8080/hello</code></p><h2 id="_2-http-协议" tabindex="-1"><a class="header-anchor" href="#_2-http-协议"><span>2. HTTP 协议</span></a></h2><h3 id="_2-1-概述" tabindex="-1"><a class="header-anchor" href="#_2-1-概述"><span>2.1 概述</span></a></h3><h4 id="_2-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-1-介绍"><span>2.1.1 介绍</span></a></h4><figure><img src="https://img.picgo.net/2023/11/17/image-202311172134241031e4e0d3d28e5a222.png" alt="image-20231117213424103" tabindex="0" loading="lazy"><figcaption>image-20231117213424103</figcaption></figure><p>HTTP：Hyper Text Transfer Protocol(超文本传输协议)，规定了浏览器与服务器之间数据传输</p><p>的规则。</p><ul><li><p>http是互联网上应用最为广泛的一种网络协议</p></li><li><p>http协议要求：浏览器在向服务器发送请求数据时，或是服务器在向浏览器发送响应数据时，都必须按照固定的格式进行数据传输</p></li></ul><p>如果想知道http协议的数据传输格式有哪些，可以打开浏览器，点击 F12 打开开发者工具，点击Network 来查看</p><p>浏览器向服务器进行请求时：</p><ul><li>服务器按照固定的格式进行解析</li></ul><figure><img src="https://img.picgo.net/2023/11/17/image-2023111721562554808bc9a29523e86e0.png" alt="image-20231117215625548" tabindex="0" loading="lazy"><figcaption>image-20231117215625548</figcaption></figure><p>服务器向浏览器进行响应时：</p><ul><li>浏览器按照固定的格式进行解析</li></ul><figure><img src="https://img.picgo.net/2023/11/17/image-20231117215650516974ece2246a67f52.png" alt="image-20231117215650516" tabindex="0" loading="lazy"><figcaption>image-20231117215650516</figcaption></figure><h4 id="_2-1-2-特点" tabindex="-1"><a class="header-anchor" href="#_2-1-2-特点"><span>2.1.2 特点</span></a></h4><ul><li><p><strong>基于</strong>TCP<strong>协议</strong>: 面向连接，安全</p></li><li><blockquote><p>TCP是一种面向连接的(建立连接之前是需要经过三次握手)、可靠的、基于字节流的传输层</p><p>通信协议，在数据传输方面更安全</p></blockquote></li><li><p><strong>基于请求响应模型</strong>: 一次请求对应一次响应（先请求后响应）</p></li></ul><blockquote><p>请求和响应是一一对应关系，没有请求，就没有响应</p></blockquote><ul><li><strong>HTTP</strong>协议是无状态协议**😗* 对于数据没有记忆能力。每次请求-响应都是独立的</li></ul><blockquote><p>无状态指的是客户端发送HTTP请求给服务端之后，服务端根据请求响应数据，响应完后，不会记录任何信息。</p><ul><li><p>缺点: 多次请求间不能共享数据</p></li><li><p>优点: 速度快</p></li></ul><p>请求之间无法共享数据会引发的问题：</p><ul><li><p>如：京东购物。加入购物车和去购物车结算是两次请求</p></li><li><p>由于HTTP协议的无状态特性，加入购物车请求响应结束后，并未记录加入购物车是何商品</p></li><li><p>发起去购物车结算的请求后，因为无法获取哪些商品加入了购物车，会导致此次请求无法正确展示数据</p></li></ul><p>具体使用的时候，我们发现京东是可以正常展示数据的，原因是Java早已考虑到这个问题，并提出了使用会话技术(Cookie、Session)来解决这个问题。具体如何来做，我们后面课程中会讲到。</p></blockquote><h3 id="_2-2-http-请求协议" tabindex="-1"><a class="header-anchor" href="#_2-2-http-请求协议"><span>2.2 **HTTP-**请求协议</span></a></h3><p>浏览器和服务器是按照HTTP协议进行数据通信的。</p><p>HTTP协议又分为：请求协议和响应协议</p><ul><li>请求协议：浏览器将数据以请求格式发送到服务器 <ul><li>包括：<strong>请求行</strong>、<strong>请求头</strong> 、请求体</li></ul></li><li>响应协议：服务器将数据以响应格式返回给浏览 <ul><li>包括：<strong>响应行</strong> 、<strong>响应头</strong> 、<strong>响应体</strong></li></ul></li></ul><p>在HTTP1.1版本中，浏览器访问服务器的几种方式：</p><figure><img src="https://img.picgo.net/2023/11/17/image-20231117220120197f68d499493fe6885.png" alt="image-20231117220120197" tabindex="0" loading="lazy"><figcaption>image-20231117220120197</figcaption></figure><p>在我们实际应用中常用的也就是 ：<strong>GET</strong> POST</p><h4 id="get方式的请求协议" tabindex="-1"><a class="header-anchor" href="#get方式的请求协议"><span><strong>GET</strong>方式的请求协议：</span></a></h4><figure><img src="https://img.picgo.net/2023/11/17/image-20231117220400200836d346bde7fafdc.png" alt="image-20231117220400200" tabindex="0" loading="lazy"><figcaption>image-20231117220400200</figcaption></figure><ul><li><p>请求行 ：HTTP请求中的第一行数据。由： 请求方式 、 资源路径 、 协议/版本 组成（之间使用空格分隔）</p><ul><li>请求方式：GET</li><li>资源路径：/brand/findAll?name=OPPO&amp;status=1 <ul><li>请求路径：/brand/findAll</li><li>请求参数：name=OPPO&amp;status=1 <ul><li>请求参数是以key=value形式出现</li><li>多个请求参数之间使用 &amp; 连接</li></ul></li><li>请求路径和请求参数之间使用 ? 连接</li></ul></li><li>协议/版本：HTTP/1.1</li></ul></li><li><p>请求头 ：第二行开始，上图黄色部分内容就是请求头。格式为key: value形式</p><ul><li>http是个无状态的协议，所以在请求头设置浏览器的一些自身信息和想要响应的形式。这样服务器在收到信息后，就可以知道是谁，想干什么了</li></ul><p>常见的HTTP请求头有</p></li></ul><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>Host: 表示请求的主机名
User-Agent: 浏览器版本。 例如：Chrome浏览器的标识类似Mozilla/5.0
...Chrome/79 ，IE浏览器的标识类似Mozilla/5.0 (Windows NT ...)like
Gecko
Accept：表示浏览器能接收的资源类型，如text/*，image/*或者*/*表示所有；
Accept-Language：表示浏览器偏好的语言，服务器可以据此返回不同语言的网
页；
Accept-Encoding：表示浏览器可以支持的压缩类型，例如gzip, deflate等。
Content-Type：请求主体的数据类型
Content-Length：数据主体的大小（单位：字节）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>举例说明：服务端可以根据请求头中的内容来获取客户端的相关信息，有了这些信息服务端就可以处理不同的业务需求。</p><p>比如:</p><ul><li><p>不同浏览器解析HTML和CSS标签的结果会有不一致，所以就会导致相同的代码在不同的浏览器会出现不同的效果</p></li><li><p>服务端根据客户端请求头中的数据获取到客户端的浏览器类型，就可以根据不同的浏览器设置不同的代码来达到一致的效果（这就是我们常说的浏览器兼容问题）</p></li></ul></blockquote><ul><li>请求体 ：存储请求参数 <ul><li>GET请求的请求参数在请求行中，故不需要设置请求体</li></ul></li></ul><h4 id="post方式的请求协议" tabindex="-1"><a class="header-anchor" href="#post方式的请求协议"><span><strong>POST</strong>方式的请求协议：</span></a></h4><figure><img src="https://img.picgo.net/2023/11/17/image-2023111722105629766ba2f32d8b14afe.png" alt="image-20231117221056297" tabindex="0" loading="lazy"><figcaption>image-20231117221056297</figcaption></figure><ul><li><p>请求行(以上图中红色部分)：包含请求方式、资源路径、协议/版本</p><ul><li>请求方式：POST</li><li>资源路径：/brand</li><li>协议/版本：HTTP/1.1</li></ul></li><li><p>请求头(以上图中黄色部分)</p></li><li><p>请求体(以上图中绿色部分) ：存储请求参数</p><ul><li>请求体和请求头之间是有一个空行隔开（作用：用于标记请求头结束）</li></ul></li></ul><h4 id="get请求和post请求的区别" tabindex="-1"><a class="header-anchor" href="#get请求和post请求的区别"><span>GET请求和POST请求的区别：</span></a></h4><figure><img src="https://img.picgo.net/2023/11/17/image-20231117221156320f725453c8dde2cea.png" alt="image-20231117221156320" tabindex="0" loading="lazy"><figcaption>image-20231117221156320</figcaption></figure><h3 id="_2-3-http-响应协议" tabindex="-1"><a class="header-anchor" href="#_2-3-http-响应协议"><span>2.3 **HTTP-**响应协议</span></a></h3><h4 id="_2-3-1-格式介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-1-格式介绍"><span><strong>2.3.1</strong> <strong>格式介绍</strong></span></a></h4><p>与HTTP的请求一样，HTTP响应的数据也分为3部分：<strong>响应行</strong>、<strong>响应头</strong> 、<strong>响应体</strong></p><figure><img src="https://img.picgo.net/2023/11/17/image-20231117221403107669d3376698d65df.png" alt="image-20231117221403107" tabindex="0" loading="lazy"><figcaption>image-20231117221403107</figcaption></figure><ul><li><p>响应行(以上图中红色部分)：响应数据的第一行。响应行由 协议及版本 、 响应状态码 、 状态码描述 组成</p><ul><li><p>协议/版本：HTTP/1.1</p></li><li><p>响应状态码：200</p></li><li><p>状态码描述：OK</p></li></ul></li><li><p>响应头(以上图中黄色部分)：响应数据的第二行开始。格式为key：value形式</p></li><li><p>http是个无状态的协议，所以可以在请求头和响应头中设置一些信息和想要执行的动作，这样，对方在收到信息后，就可以知道你是谁，你想干什么</p></li></ul><p>常见的HTTP响应头有:</p><blockquote><p>Content-Type：表示该响应内容的类型，例如text/html，image/jpeg ；</p><p>Content-Length：表示该响应内容的长度（字节数）；</p><p>Content-Encoding：表示该响应压缩算法，例如gzip ；</p><p>Cache-Control：指示客户端应如何缓存，例如max-age=300表示可以最多缓存</p><p>300秒 ;</p><p>Set-Cookie: 告诉浏览器为当前页面所在的域设置cookie ;</p></blockquote><ul><li>响应体(以上图中绿色部分)： 响应数据的最后一部分。存储响应的数据 <ul><li>响应体和响应头之间有一个空行隔开（作用：用于标记响应头结束）</li></ul></li></ul><h4 id="_2-3-2-响应状态码" tabindex="-1"><a class="header-anchor" href="#_2-3-2-响应状态码"><span><strong>2.3.2</strong> <strong>响应状态码</strong></span></a></h4><figure><img src="https://img.picgo.net/2023/11/17/image-202311172215325245cdefa15be83561d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>关于响应状态码，我们先主要认识三个状态码，其余的等后期用到了再去掌握：</p><ul><li><p>200 ok 客户端请求成功</p></li><li><p>404 Not Found 请求资源不存在</p></li><li><p>500 Internal Server Error 服务端发生不可预期的错误</p></li></ul>`,69),o=[p];function s(l,g){return n(),a("div",null,o)}const d=i(e,[["render",s],["__file","2-SpringBootBasis.html.vue"]]),m=JSON.parse('{"path":"/rear-end/JavaWeb/2-SpringBootBasis.html","title":"😤 2.SpringBoot基础","lang":"zh-CN","frontmatter":{"title":"😤 2.SpringBoot基础","tag":["SpringBoot","JavaWeb"],"recommend":2,"description":"😉网站 Spring官网:https://spring.io Image From day04-SpringBootWeb入门Image From day04-SpringBootWeb入门 Spring发展到今天已经形成了一种开发生态圈，Spring提供了若干个子项目，每个项目用于完成特定的功能。而我们在项目开发时，一般会偏向于选择这一套sprin...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/rear-end/JavaWeb/2-SpringBootBasis.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"😤 2.SpringBoot基础"}],["meta",{"property":"og:description","content":"😉网站 Spring官网:https://spring.io Image From day04-SpringBootWeb入门Image From day04-SpringBootWeb入门 Spring发展到今天已经形成了一种开发生态圈，Spring提供了若干个子项目，每个项目用于完成特定的功能。而我们在项目开发时，一般会偏向于选择这一套sprin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.picgo.net/2023/11/17/Image-From-day04-SpringBootWeb3f4d3174641f5cbc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"JavaWeb"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"😤 2.SpringBoot基础\\",\\"image\\":[\\"https://img.picgo.net/2023/11/17/Image-From-day04-SpringBootWeb3f4d3174641f5cbc.png\\",\\"https://img.picgo.net/2023/11/17/image-202311172127584643b1b3e40a83d1a98.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117212820022c674935f190c643e.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117212959823d3b58f69f155ac42.png\\",\\"https://img.picgo.net/2023/11/17/image-202311172130211518028b4d4be3bbaad.png\\",\\"https://img.picgo.net/2023/11/17/image-202311172131223753d62e05775aea042.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117213230149fef10713f9eaa96f.png\\",\\"https://img.picgo.net/2023/11/17/image-202311172134241031e4e0d3d28e5a222.png\\",\\"https://img.picgo.net/2023/11/17/image-2023111721562554808bc9a29523e86e0.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117215650516974ece2246a67f52.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117220120197f68d499493fe6885.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117220400200836d346bde7fafdc.png\\",\\"https://img.picgo.net/2023/11/17/image-2023111722105629766ba2f32d8b14afe.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117221156320f725453c8dde2cea.png\\",\\"https://img.picgo.net/2023/11/17/image-20231117221403107669d3376698d65df.png\\",\\"https://img.picgo.net/2023/11/17/image-202311172215325245cdefa15be83561d.png\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"1. SpringBootWeb快速入门","slug":"_1-springbootweb快速入门","link":"#_1-springbootweb快速入门","children":[]},{"level":2,"title":"2. HTTP 协议","slug":"_2-http-协议","link":"#_2-http-协议","children":[{"level":3,"title":"2.1 概述","slug":"_2-1-概述","link":"#_2-1-概述","children":[]},{"level":3,"title":"2.2 **HTTP-**请求协议","slug":"_2-2-http-请求协议","link":"#_2-2-http-请求协议","children":[]},{"level":3,"title":"2.3 **HTTP-**响应协议","slug":"_2-3-http-响应协议","link":"#_2-3-http-响应协议","children":[]}]}],"git":{"createdTime":1700316244000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":7.58,"words":2275},"filePathRelative":"rear-end/JavaWeb/2-SpringBootBasis.md","localizedDate":"2023年11月18日","excerpt":"<blockquote>\\n<p>😉网站</p>\\n<p>Spring官网:https://spring.io</p>\\n</blockquote>\\n<figure><img src=\\"https://img.picgo.net/2023/11/17/Image-From-day04-SpringBootWeb3f4d3174641f5cbc.png\\" alt=\\"Image From day04-SpringBootWeb入门\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Image From day04-SpringBootWeb入门</figcaption></figure>","autoDesc":true}');export{d as comp,m as data};
