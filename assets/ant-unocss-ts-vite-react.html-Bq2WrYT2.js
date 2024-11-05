import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-jzX7c5DY.js";const e={},p=t(`<div align="center"><img width="200px" height="200px" src="https://www.z4a.net/images/2023/09/12/logo.png"><h1><a href="https://github.com/NightSquirrl/ant-unocss-ts-vite-react" target="_blank">ant-unocss-ts-vite-react</a></h1><p>-代码相关说明-</p></div><br><br><h1 id="主要使用到的技术" tabindex="-1"><a class="header-anchor" href="#主要使用到的技术"><span>主要使用到的技术</span></a></h1><p><code>vite axios unocss eslint antd ts react-router</code></p><h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>vite</span></a></h2><h3 id="添加路径别名" tabindex="-1"><a class="header-anchor" href="#添加路径别名"><span>添加路径别名 @</span></a></h3><p><code>vite.config.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> checker <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-checker&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UnoCSS <span class="token keyword">from</span> <span class="token string">&quot;unocss/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">checker</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">UnoCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步修改<code>tsconfig.json</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h2><h3 id="请求的封装" tabindex="-1"><a class="header-anchor" href="#请求的封装"><span>请求的封装</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASE_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 添加请求拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在发送请求之前做些什么</span>
      <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">&#39;未知请求错误&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// 对请求错误做些什么</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 添加响应拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应数据进行格式化</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> response
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> status <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status
      <span class="token keyword">let</span> <span class="token punctuation">{</span> msg<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>data <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          msg <span class="token operator">=</span> message
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">&#39;参数错误&#39;</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">&#39;服务端错误&#39;</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">&#39;路由未找到&#39;</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">default</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">&#39;未知响应错误&#39;</span>
                  <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
      <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应错误做点什么</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unocss-原子-css" tabindex="-1"><a class="header-anchor" href="#unocss-原子-css"><span>unocss 原子 css</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-useless-escape */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> presetAttributify<span class="token punctuation">,</span> presetIcons<span class="token punctuation">,</span> presetTypography<span class="token punctuation">,</span> presetUno <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unocss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> presetAutoprefixer <span class="token keyword">from</span> <span class="token string">&quot;unocss-preset-autoprefixer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> transformerDirectives <span class="token keyword">from</span> <span class="token string">&quot;@unocss/transformer-directives&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> transformerVariantGroup <span class="token keyword">from</span> <span class="token string">&quot;@unocss/transformer-variant-group&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^h-([\\.\\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^w-([\\.\\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^w-100vw$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100vw&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^b-r-([\\.\\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transformers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">transformerDirectives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">transformerVariantGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">presetAttributify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">autoInstall</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetTypography</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetAutoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;defaults&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;not IE 11&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>默认的语法与 tailwindcss 相同</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;h-700 p-4&quot;</span><span class="token operator">&gt;</span>
       index
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-dom"><span>react-router-dom</span></a></h2><h3 id="创建路由表" tabindex="-1"><a class="header-anchor" href="#创建路由表"><span>创建路由表</span></a></h3><p><code>src/router/index.tsx</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate<span class="token punctuation">,</span> RouteObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;../pages/Home&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 路由映射表</span>
<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 路由重定向</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">&quot;/home&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span><span class="token function">useRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-toastify" tabindex="-1"><a class="header-anchor" href="#react-toastify"><span>react-toastify</span></a></h2><blockquote><p>添加全局的消息事件,默认右上角弹窗</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ToastContainer<span class="token punctuation">,</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-toastify&quot;</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>toast <span class="token operator">=</span> toast<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","ant-unocss-ts-vite-react.html.vue"]]),d=JSON.parse('{"path":"/web/react/code-init/ant-unocss-ts-vite-react.html","title":"😤 react 脚手架封装","lang":"zh-CN","frontmatter":{"description":"vite axios unocss eslint antd ts react-router react-toastify","title":"😤 react 脚手架封装","tag":["React","初始代码库","antd","axios","前端"],"head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/react/code-init/ant-unocss-ts-vite-react.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"😤 react 脚手架封装"}],["meta",{"property":"og:description","content":"vite axios unocss eslint antd ts react-router react-toastify"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T14:18:39.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:tag","content":"初始代码库"}],["meta",{"property":"article:tag","content":"antd"}],["meta",{"property":"article:tag","content":"axios"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:modified_time","content":"2024-02-16T14:18:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"😤 react 脚手架封装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-16T14:18:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"vite","slug":"vite","link":"#vite","children":[{"level":3,"title":"添加路径别名 @","slug":"添加路径别名","link":"#添加路径别名","children":[]}]},{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[{"level":3,"title":"请求的封装","slug":"请求的封装","link":"#请求的封装","children":[]}]},{"level":2,"title":"unocss 原子 css","slug":"unocss-原子-css","link":"#unocss-原子-css","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"react-router-dom","slug":"react-router-dom","link":"#react-router-dom","children":[{"level":3,"title":"创建路由表","slug":"创建路由表","link":"#创建路由表","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]}]},{"level":2,"title":"react-toastify","slug":"react-toastify","link":"#react-toastify","children":[]}],"git":{"createdTime":1699094106000,"updatedTime":1708093119000,"contributors":[{"name":"yuxiaozhuang","email":"w1083670160@163.com","commits":1},{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":1.87,"words":561},"filePathRelative":"web/react/code-init/ant-unocss-ts-vite-react.md","localizedDate":"2023年11月4日","excerpt":"<div align=\\"center\\">\\n    <img width=\\"200px\\" height=\\"200px\\" src=\\"https://www.z4a.net/images/2023/09/12/logo.png\\">\\n    <h1>\\n\\t\\t<a href=\\"https://github.com/NightSquirrl/ant-unocss-ts-vite-react\\" target=\\"_blank\\">ant-unocss-ts-vite-react</a>\\n\\t</h1>\\n    <p>-代码相关说明-</p>\\n</div>\\n<br>\\n<br>\\n<h1>主要使用到的技术</h1>\\n<p><code>vite axios unocss eslint antd ts react-router</code></p>"}');export{k as comp,d as data};
