import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n,a as e}from"./app-jzX7c5DY.js";const p={},o=n("h1",{id:"生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生命周期"},[n("span",null,"生命周期")])],-1),i=n("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},sandbox:"allow-scripts allow-popups allow-forms allow-modals allow-same-origin",width:"800",height:"450",src:"https://pixso.cn/app/ifr?url=https://pixso.cn/app/board/bnFWVuhoAUXEjcEF2odNsg",allowfullscreen:""},null,-1),c=e(`<h2 id="entryability-文件" tabindex="-1"><a class="header-anchor" href="#entryability-文件"><span>EntryAbility 文件</span></a></h2><blockquote><p>hilog.info 日志</p><p>&#39;%{public}s&#39; public 表示日志是否公开</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> UIAbility <span class="token keyword">from</span> <span class="token string">&#39;@ohos.app.ability.UIAbility&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> hilog <span class="token keyword">from</span> <span class="token string">&#39;@ohos.hilog&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> window <span class="token keyword">from</span> <span class="token string">&#39;@ohos.window&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EntryAbility</span> <span class="token keyword">extends</span> <span class="token class-name">UIAbility</span> <span class="token punctuation">{</span>
  <span class="token function">onCreate</span><span class="token punctuation">(</span>want<span class="token punctuation">,</span> launchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onCreate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onDestroy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onWindowStageCreate</span><span class="token punctuation">(</span>windowStage<span class="token operator">:</span> window<span class="token punctuation">.</span>WindowStage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Main window is created, set main page for this ability</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onWindowStageCreate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 打开首屏的页面</span>
    windowStage<span class="token punctuation">.</span><span class="token function">loadContent</span><span class="token punctuation">(</span><span class="token string">&#39;pages/Index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hilog<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Failed to load the content. Cause: %{public}s&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Succeeded in loading the content. Data: %{public}s&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 销毁</span>
  <span class="token function">onWindowStageDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Main window is destroyed, release UI related resources</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onWindowStageDestroy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处于前台</span>
  <span class="token function">onForeground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Ability has brought to foreground</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onForeground&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 处于后台 -- 即切换到任务中心</span>
  <span class="token function">onBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Ability has back to background</span>
    hilog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token number">0x0000</span><span class="token punctuation">,</span> <span class="token string">&#39;testTag&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%{public}s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ability onBackground&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uiability-模式" tabindex="-1"><a class="header-anchor" href="#uiability-模式"><span>UIAbility 模式</span></a></h2><blockquote><p>修改模式</p><p>在每个 entry 的模块中</p><p>module.json5</p><p>​ launchType</p></blockquote><h3 id="singleton-模式" tabindex="-1"><a class="header-anchor" href="#singleton-模式"><span>Singleton 模式</span></a></h3><p>只会存在一个后台的实例</p><h3 id="standard-模式" tabindex="-1"><a class="header-anchor" href="#standard-模式"><span>Standard 模式</span></a></h3><p>每次打开,创建一个新的实例,保留旧</p><h3 id="multiton模式" tabindex="-1"><a class="header-anchor" href="#multiton模式"><span>multiton模式</span></a></h3><p>每次打开,创建一个新的实例,删除旧</p><h3 id="specified-模式" tabindex="-1"><a class="header-anchor" href="#specified-模式"><span>specified 模式</span></a></h3><p>为每个实例设置 key 标识 类似同时编辑多个不同的文档</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 1</span>
<span class="token comment">// 获取上下文</span>
context <span class="token operator">=</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token keyword">as</span> common<span class="token punctuation">.</span>UIAbilityContext<span class="token punctuation">;</span>
<span class="token comment">// 指定要跳转的UIAbility 信息</span>
<span class="token keyword">let</span> want <span class="token operator">=</span> <span class="token punctuation">{</span>
  deviceId<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">// 想要跳转的设备 id 为空表示本应用 (表示可以跨设备跳转)</span>
  bundleName<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">// 想要跳转的应用包名</span>
  abilityName<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  moduleName<span class="token operator">:</span><span class="token string">&quot;entry&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 非必填</span>
  parameter<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// 自定义方法,生成目标 UIAbility 实例的 key</span>
    instanceKey<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getInstanceKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 尝试拉起目标 UIAbility 实例</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">startAbility</span><span class="token punctuation">(</span>want<span class="token punctuation">)</span>

<span class="token comment">// 2</span>
<span class="token comment">//在Abi1 ityStage的生命周期回调中为目标UIAbility.实例生成ey</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyAbilityStage</span> <span class="token keyword">extends</span> <span class="token class-name">AbilityStage</span><span class="token punctuation">{</span>
<span class="token function">onAcceptWant</span><span class="token punctuation">(</span>want<span class="token operator">:</span>Want<span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token comment">//判断当前要拉取的是否是DocumentAbility</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>want<span class="token punctuation">.</span>abilityName <span class="token operator">===</span><span class="token string">&#39;DocumentAbility&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//根据参数中的nstanceKey参数拼接生成一个key值并返回</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">DocAbility_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>want<span class="token punctuation">.</span>parameters<span class="token punctuation">.</span>instanceKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 3</span>
<span class="token comment">//3.在module,J5on5置文件中，通过srcEnti门y参数指定Abl的y5tage路径</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span>
	<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;entry&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;entry&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;srcEntry&quot;</span><span class="token operator">:</span><span class="token string">&quot;./ets/myabilitystage/MyAbilityStage.ts&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[o,i,c];function u(r,d){return a(),t("div",null,l)}const b=s(p,[["render",u],["__file","7-lifeCycle.html.vue"]]),v=JSON.parse(`{"path":"/web/harmony/7-lifeCycle.html","title":"🦋 7-生命周期","lang":"zh-CN","frontmatter":{"title":"🦋 7-生命周期","tag":["harmony"],"star":true,"description":"生命周期 EntryAbility 文件 hilog.info 日志 '%{public}s' public 表示日志是否公开 UIAbility 模式 修改模式 在每个 entry 的模块中 module.json5 ​ launchType Singleton 模式 只会存在一个后台的实例 Standard 模式 每次打开,创建一个新的实例,保留旧...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/harmony/7-lifeCycle.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🦋 7-生命周期"}],["meta",{"property":"og:description","content":"生命周期 EntryAbility 文件 hilog.info 日志 '%{public}s' public 表示日志是否公开 UIAbility 模式 修改模式 在每个 entry 的模块中 module.json5 ​ launchType Singleton 模式 只会存在一个后台的实例 Standard 模式 每次打开,创建一个新的实例,保留旧..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T16:41:41.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"harmony"}],["meta",{"property":"article:modified_time","content":"2024-05-11T16:41:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🦋 7-生命周期\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T16:41:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"EntryAbility 文件","slug":"entryability-文件","link":"#entryability-文件","children":[]},{"level":2,"title":"UIAbility 模式","slug":"uiability-模式","link":"#uiability-模式","children":[{"level":3,"title":"Singleton 模式","slug":"singleton-模式","link":"#singleton-模式","children":[]},{"level":3,"title":"Standard 模式","slug":"standard-模式","link":"#standard-模式","children":[]},{"level":3,"title":"multiton模式","slug":"multiton模式","link":"#multiton模式","children":[]},{"level":3,"title":"specified 模式","slug":"specified-模式","link":"#specified-模式","children":[]}]}],"git":{"createdTime":1709475838000,"updatedTime":1715445701000,"contributors":[{"name":"nightsoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"web/harmony/7-lifeCycle.md","localizedDate":"2024年3月3日","excerpt":"\\n<iframe style=\\"border: 1px solid rgba(0, 0, 0, 0.1);\\" sandbox=\\"allow-scripts allow-popups allow-forms allow-modals allow-same-origin\\" width=\\"800\\" height=\\"450\\" src=\\"https://pixso.cn/app/ifr?url=https://pixso.cn/app/board/bnFWVuhoAUXEjcEF2odNsg\\" allowfullscreen=\\"\\"></iframe>\\n<h2>EntryAbility 文件</h2>\\n<blockquote>\\n<p>hilog.info 日志</p>\\n<p>'%{public}s'  public 表示日志是否公开</p>\\n</blockquote>","autoDesc":true}`);export{b as comp,v as data};
