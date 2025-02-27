window.__EC_DOC_option_gl_globe = {
  "show": {
    "desc": "<p>是否显示地球组件。</p>\n"
  },
  "globeRadius": {
    "desc": "<p>地球的半径。单位相对于三维空间，跟 <a href=\"#globe.viewControl.distance\">viewControl.distance</a> 相关。</p>\n"
  },
  "globeOuterRadius": {
    "desc": "<p>地球的外半径。<code class=\"codespan\">globeRadius</code> 到 <code class=\"codespan\">globeOuterRadius</code> 之间这片区域会被用于展示三维柱状图，散点图等。</p>\n"
  },
  "environment": {
    "desc": "<p>环境贴图。支持纯色、渐变色、全景贴图的 url。默认为 <code class=\"codespan\">&#39;auto&#39;</code>，在配置有 <a href=\"#globe.light.ambientCubemap.texture\">light.ambientCubemap.texture</a> 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 配置为全景贴图\nenvironment: &#39;asset/starfield.jpg&#39;\n// 配置为纯黑色的背景\nenvironment: &#39;#000&#39;\n// 配置为垂直渐变的背景\nenvironment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n  offset: 0, color: &#39;#00aaff&#39; // 天空颜色\n}, {\n  offset: 0.7, color: &#39;#998866&#39; // 地面颜色\n}, {\n  offset: 1, color: &#39;#998866&#39; // 地面颜色\n}], false)\n\n</code></pre>\n"
  },
  "baseTexture": {
    "desc": "<p>地球的纹理。支持图片路径的字符串，图片或者 Canvas 的对象。</p>\n<p>也支持直接使用 echarts 的实例作为纹理，此时在地球上的鼠标动作会跟纹理上使用的 echarts 实例有联动。</p>\n<p>示例：</p>\n<pre><code class=\"lang-ts\">// 使用地球的纹理图片\nbaseTexture: &#39;asset/earth.jpg&#39;\n\n\n// 使用 echarts 绘制世界地图的实例作为纹理\nvar canvas = document.createElement(&#39;canvas&#39;);\nvar mapChart = echarts.init(canvas, null, {\n    width: 4096, height: 2048\n});\nmapChart.setOption({\n    series : [\n        {\n            type: &#39;map&#39;,\n            map: &#39;world&#39;,\n            // 绘制完整尺寸的 echarts 实例\n            top: 0, left: 0,\n            right: 0, bottom: 0,\n            boundingCoords: [[-180, 90], [180, -90]]\n        }\n    ]\n});\n...\nbaseTexture: mapChart\n\n</code></pre>\n"
  },
  "heightTexture": {
    "desc": "<p>地球的高度纹理。高度纹理可以用于<a href=\"https://zh.wikipedia.org/wiki/%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BE\" target=\"_blank\">凹凸贴图</a>表现地球表面的明暗细节。下面两张图分别是使用<code class=\"codespan\">heightTexture</code>和未使用<code class=\"codespan\">heightTexuture</code>的效果区别。</p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/heightmap-enable.png\"></p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/heightmap-disable.png\"></p>\n"
  },
  "displacementTexture": {
    "desc": "<p>地球顶点的置换纹理，默认同 <a href=\"#globe.heightTexture\">heightTexture</a>。</p>\n<p>相比于凹凸贴图，顶点的置换是根据纹理直接对顶点做位移。在 <a href=\"#globe.displaymentScale\">displaymentScale</a> 大于 0 时有效。</p>\n"
  },
  "displacementScale": {
    "desc": "<p>地球顶点位移的大小。默认为 0， 也就是没位移，下面两图分别是设置不同的<code class=\"codespan\">displacementScale</code>的效果</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/displacement-disable.png\" width=\"100%\" title=\"Scale: 0\"></img>\n    <img  src=\"documents/asset/gl/img/displacement-enable.png\" width=\"100%\" title=\"Scale: 0.1\"></img>\n</div>\n"
  },
  "displacementQuality": {
    "desc": "<p>地球顶点位移的质量。支持设置成 <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code> 。更高的质量能够表现更多的地表高度细节。下面截图分别是不同<code class=\"codespan\">displacementQuality</code>的效果</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/displacement-low.png\" width=\"100%\" title=\"Low\"></img>\n    <img  src=\"documents/asset/gl/img/displacement-ultra.png\" width=\"100%\" title=\"Ultra\"></img>\n</div>\n\n\n\n"
  },
  "shading": {
    "desc": "<p>地球中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\n只显示颜色，不受光照等其它因素的影响。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\n通过经典的 <a href=\"https://en.wikipedia.org/wiki/Lambertian_reflectance\" target=\"_blank\">lambert</a> 着色表现光照带来的明暗。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\n真实感渲染，配合 <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> 和 <a href=\"#globe.postEffect\">postEffect</a> 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">基于物理的渲染（PBR）</a> 来表现真实感材质。</p>\n</li>\n</ul>\n<p>下面是不同着色效果的区别：</p>\n<p><img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-color.png\">\n<img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-lambert.png\">\n<img width=\"250\" height=\"auto\" src=\"documents/asset/gl/img/globe-shading-realistic.png\"></p>\n"
  },
  "realisticMaterial": {
    "desc": "<p>真实感材质相关的配置项，在 <a href=\"#globe.shading\">shading</a> 为<code class=\"codespan\">&#39;realistic&#39;</code>时有效。</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p><code class=\"codespan\">roughness</code>属性用于表示材质的粗糙度，<code class=\"codespan\">0</code>为完全光滑，<code class=\"codespan\">1</code>完全粗糙，中间的值则是介于这两者之间。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">roughness</code>分别是<code class=\"codespan\">0.2</code>（光滑）与<code class=\"codespan\">0.8</code>（粗糙）的效果。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>当你想要表达更复杂的材质时。你可以直接将 <code class=\"codespan\">roughness</code> 设置为如下用每个像素存储粗糙度的贴图。</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>贴图中颜色越白的地方值越大，就越粗糙。你可以从 <a href=\"http://freepbr.com/\" target=\"_blank\">http://freepbr.com/</a> 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p><code class=\"codespan\">metalness</code>属性用于表示材质是金属还是非金属，<code class=\"codespan\">0</code>为非金属，<code class=\"codespan\">1</code>为金属，中间的值则是介于这两者之间。通常设成<code class=\"codespan\">0</code>和<code class=\"codespan\">1</code>就能满足大部分场景了。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">metalness</code>分别设成<code class=\"codespan\">1</code>与<code class=\"codespan\">0</code>的效果区别。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>跟 <a href=\"#globe.realisticMaterial.roughness\">roughness</a> 一样 你可以直接将 <code class=\"codespan\">metalness</code> 设置为金属度贴图。</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为完全光滑，<code class=\"codespan\">1</code>的时候为完全粗糙。</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为非金属，<code class=\"codespan\">1</code>的时候为金属。</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>材质细节的法线贴图。</p>\n<p>使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>lambert 材质相关的配置项，在 <a href=\"#globe.shading\">shading</a> 为<code class=\"codespan\">&#39;lambert&#39;</code>时有效。</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>color 材质相关的配置项，在 <a href=\"#globe.shading\">shading</a> 为<code class=\"codespan\">&#39;color&#39;</code>时有效。</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "light": {
    "desc": "<p>光照相关的设置。在 <a href=\"#globe.shading\">shading</a> 为 <code class=\"codespan\">&#39;color&#39;</code> 的时候无效。</p>\n<p>光照的设置会影响到组件以及组件所在坐标系上的所有图表。</p>\n<p>合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。</p>\n"
  },
  "light.main": {
    "desc": "<p>场景主光源的设置，在 <a href=\"#globe\">globe</a> 组件中就是太阳光。</p>\n"
  },
  "light.main.color": {
    "desc": "<p>主光源的颜色。</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>主光源的强度。</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>主光源是否投射阴影。默认为关闭。</p>\n<p>开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。</p>\n<p>下图是开启阴影以及关闭阴影的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"></img>\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"></img>\n</div>\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>阴影的质量。可选<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>下图是低质量和高质量阴影的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"></img>\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"></img>\n</div>\n"
  },
  "light.main.alpha": {
    "desc": "<p>主光源绕 x 轴，即上下旋转的角度。配合 <a href=\"#globe.light.main.beta\">beta</a> 控制光源的方向。</p>\n<p>如下示意图：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p><a href=\"#globe\">globe</a> 组件中可以通过 <a href=\"#globe.light.main.time\">time</a> 控制日光的时间。</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>主光源绕 y 轴，即左右旋转的角度。</p>\n"
  },
  "light.main.time": {
    "desc": "<p>日照的时间，默认使用当前的系统时间。</p>\n"
  },
  "light.ambient": {
    "desc": "<p>全局的环境光设置。</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>环境光的颜色。</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>环境光的强度。</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>ambientCubemap 会使用纹理作为环境光的光源，会为物体提供漫反射和高光反射。可以通过 <a href=\"#globe.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> 和 <a href=\"#globe.light.ambientCubemap.specularIntensity\">specularIntensity</a> 分别设置漫反射强度和高光反射强度。</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>环境光贴图的 url，支持使用<code class=\"codespan\">.hdr</code>格式的 HDR 图片。可以从 <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> 等网站获取 <code class=\"codespan\">.hdr</code> 的资源。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // 解析 hdr 时使用的曝光值\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>漫反射的强度。</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>高光反射的强度。</p>\n"
  },
  "postEffect": {
    "desc": "<p>后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。</p>\n<p>下面分别是关闭和开启 <code class=\"codespan\">postEffect</code> 的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n\n<p>注意在开启 postEffect 的时候默认会开启 <a href=\"#globe.temporalSuperSampling\">temporalSuperSampling</a> 在画面静止后持续对画面增强，包括抗锯齿、景深、SSAO、阴影等。</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>是否开启后处理特效。默认关闭。</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现<code class=\"codespan\">0 - 255</code>范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。如下图：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>是否开启光晕特效。</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>光晕的强度，默认为 0.1</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>景深效果。景深效果是模拟摄像机的光学成像效果，在对焦的区域相对清晰，离对焦的区域越远则会逐渐模糊。</p>\n<p>景深效果可以让观察者集中注意力到对焦的区域，而且让画面的镜头感更强，大景深还能塑造出微距的模型效果。</p>\n<p>下面分别是关闭和开启景深的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>是否开启景深。</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>初始的焦距，用户可以点击区域自动聚焦。</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>完全聚焦的区域范围，在此范围内的物体时完全清晰的，不会有模糊</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>镜头的<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94\" target=\"_blank\">F值</a>，值越小景深越浅。</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>焦外的模糊半径</p>\n<p>不同模糊半径的区别：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"></img>\n</div>\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>屏幕空间的环境光遮蔽效果。环境光遮蔽效果可以让拐角处、洞、缝隙等大部分光无法到达的区域变暗，是传统的阴影贴图的补充，可以让整个场景更加自然，有层次。</p>\n<p>下面是无 SSAO 和有 SSAO 的效果对比：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"></img>\n</div>\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>同 <a href=\"#globe.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>是否开启环境光遮蔽。默认不开启。</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>环境光遮蔽的质量。支持<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code>。</p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>环境光遮蔽的采样半径。半径越大效果越自然，但是需要设置较高的<code class=\"codespan\">&#39;quality&#39;</code>。</p>\n<p>下面是半径值较小与较大之间的区别：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"></img>\n</div>\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>环境光遮蔽的强度。值越大颜色越深。</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>颜色纠正和调整。类似 Photoshop 中的 Color Adjustments。</p>\n<p>下图同个场景调整为冷色系和暖色系的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"></img>\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"></img>\n</div>\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>是否开启颜色纠正。</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>颜色查找表，推荐使用。</p>\n<p>颜色查找表是一张像下面这样的纹理图片。</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>这张是基础的查找表图片，你可以直接拿来使用，为了方便将场景色调调整你想要的效果，你可以将场景截图后在 Photoshop 等图像处理软件中调整颜色到想要的效果，然后将相同的调整应用到上面这张查找表的图片上。</p>\n<p>比如调成冷色调后，查找表的纹理图片就会成为下面这样：</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>然后那这张纹理图片就作为该配置项的值，就可以得到相同的在 Photoshop 里调整好的效果了。</p>\n<p>当然如果你只是想得到一张截图，完全可以不这样操作，但是如果你想在可以实时交互的作品中能方便的调整到理想的色调，这个就非常有用了。</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>画面的曝光。</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>画面的亮度。</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>画面的对比度。</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>画面的饱和度。</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>在开启 <a href=\"#globe.postEffect\">postEffect</a> 后，WebGL 默认的 MSAA (Multi Sampling Anti Aliasing) 会无法使用。这时候通过 FXAA (Fast Approximate Anti-Aliasing) 可以廉价方便的解决抗锯齿的问题，FXAA 会对一些场景的边缘部分进行模糊从而解决锯齿的问题，这在一些场景上效果还不错，但是在 echarts-gl 中，需要保证很多文字和线条边缘的锐利清晰，因此 FXAA 并不是那么适用。这时候我们可以通过设置更高的<code class=\"codespan\">devicePixelRatio</code>来使用超采样，如下所示：</p>\n<pre><code class=\"lang-ts\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>但是设置更高的<code class=\"codespan\">devicePixelRatio</code> 对电脑性能有很高的要求，所以更多时候我们建议使用 echarts-gl 中的 <a href=\"#globe.temporalSuperSampling\">temporalSuperSampling</a>，在画面静止后会持续分帧对一个像素多次抖动采样，从而达到超采样抗锯齿的效果。</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>是否开启 FXAA。默认为不开启。</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>分帧超采样。在开启 <a href=\"#globe.postEffect\">postEffect</a> 后，WebGL 默认的 MSAA 会无法使用，所以我们需要自己解决锯齿的问题。</p>\n<p>分帧超采样是用来解决锯齿问题的方法，它在画面静止后会持续分帧对一个像素多次抖动采样，从而达到抗锯齿的效果。而且在这个分帧采样的过程中，echarts-gl 也会对 <a href=\"#globe.postEffect\">postEffect</a> 中一些需要采样保证效果的特效，例如 <a href=\"#globe.postEffect.SSAO\">SSAO</a>, <a href=\"#globe.postEffect.depthOfField\">景深</a>，以及阴影进行渐进增强。</p>\n<p>下面是未开启和开启<code class=\"codespan\">temporalSuperSampling</code>的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"></img>\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"></img>\n</div>\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>是否开启分帧超采样。默认在开启 <a href=\"#globe.postEffect\">postEffect</a> 后也会同步开启。</p>\n"
  },
  "viewControl": {
    "desc": "<p><code class=\"codespan\">viewControl</code>用于鼠标的旋转，缩放等视角控制。</p>\n"
  },
  "viewControl.projection": {
    "desc": "<p>投影方式，默认为透视投影<code class=\"codespan\">&#39;perspective&#39;</code>，也支持设置为正交投影<code class=\"codespan\">&#39;orthographic&#39;</code>。</p>\n"
  },
  "viewControl.autoRotate": {
    "desc": "<p>是否开启视角绕物体的自动旋转查看。</p>\n"
  },
  "viewControl.autoRotateDirection": {
    "desc": "<p>物体自转的方向。默认是 <code class=\"codespan\">&#39;cw&#39;</code> 也就是从上往下看是顺时针方向，也可以取 <code class=\"codespan\">&#39;ccw&#39;</code>，既从上往下看为逆时针方向。</p>\n"
  },
  "viewControl.autoRotateSpeed": {
    "desc": "<p>物体自转的速度。单位为<code class=\"codespan\">角度 / 秒</code>，默认为<code class=\"codespan\">10</code> ，也就是<code class=\"codespan\">36</code>秒转一圈。</p>\n"
  },
  "viewControl.autoRotateAfterStill": {
    "desc": "<p>在鼠标静止操作后恢复自动旋转的时间间隔。在开启 <a href=\"#globe.viewControl.autoRotate\">autoRotate</a> 后有效。</p>\n"
  },
  "viewControl.damping": {
    "desc": "<p>鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。</p>\n"
  },
  "viewControl.rotateSensitivity": {
    "desc": "<p>旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。</p>\n<p>默认为<code class=\"codespan\">1</code>。</p>\n<p>设置为<code class=\"codespan\">0</code>后无法旋转。</p>\n<pre><code class=\"lang-ts\">// 无法旋转\nrotateSensitivity: 0\n// 只能横向旋转\nrotateSensitivity: [1, 0]\n// 只能纵向旋转\nrotateSensitivity: [0, 1]\n</code></pre>\n"
  },
  "viewControl.zoomSensitivity": {
    "desc": "<p>缩放操作的灵敏度，值越大越灵敏。默认为<code class=\"codespan\">1</code>。</p>\n<p>设置为<code class=\"codespan\">0</code>后无法缩放。</p>\n"
  },
  "viewControl.panSensitivity": {
    "desc": "<p>平移操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的平移灵敏度</p>\n<p>默认为<code class=\"codespan\">1</code>。</p>\n<p>设置为<code class=\"codespan\">0</code>后无法平移。</p>\n"
  },
  "viewControl.panMouseButton": {
    "desc": "<p>平移操作使用的鼠标按键，支持：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> 鼠标左键（默认）</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> 鼠标中键</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> 鼠标右键</p>\n</li>\n</ul>\n<p>注意：如果设置为鼠标右键则会阻止默认的右键菜单。</p>\n"
  },
  "viewControl.rotateMouseButton": {
    "desc": "<p>旋转操作使用的鼠标按键，支持：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> 鼠标左键</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> 鼠标中键（默认）</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> 鼠标右键</p>\n</li>\n</ul>\n<p>注意：如果设置为鼠标右键则会阻止默认的右键菜单。</p>\n"
  },
  "viewControl.distance": {
    "desc": "<p>默认视角距离主体的距离，对于 <a href=\"#globe\">globe</a> 来说是距离地球表面的距离，对于 <a href=\"#grid3D\">grid3D</a> 和 <a href=\"#geo3D\">geo3D</a> 等其它组件来说是距离中心原点的距离。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;perspective&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.minDistance": {
    "desc": "<p>视角通过鼠标控制能拉近到主体的最小距离。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;perspective&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.maxDistance": {
    "desc": "<p>视角通过鼠标控制能拉远到主体的最大距离。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;perspective&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.orthographicSize": {
    "desc": "<p>正交投影的大小。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;orthographic&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.maxOrthographicSize": {
    "desc": "<p>正交投影缩放的最大值。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;orthographic&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.minOrthographicSize": {
    "desc": "<p>正交投影缩放的最小值。在 <a href=\"#globe.viewControl.projection\">projection</a> 为<code class=\"codespan\">&#39;orthographic&#39;</code>的时候有效。</p>\n"
  },
  "viewControl.alpha": {
    "desc": "<p>视角绕 x 轴，即上下旋转的角度。配合 <a href=\"#globe.light.main.beta\">beta</a> 可以控制视角的方向。</p>\n<p>如下示意图：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/view-alpha-beta.png\"></p>\n"
  },
  "viewControl.beta": {
    "desc": "<p>视角绕 y 轴，即左右旋转的角度。</p>\n"
  },
  "viewControl.center": {
    "desc": "<p>视角中心点，旋转也会围绕这个中心点旋转，默认为<code class=\"codespan\">[0,0,0]</code>。</p>\n"
  },
  "viewControl.minAlpha": {
    "desc": "<p>上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。</p>\n"
  },
  "viewControl.maxAlpha": {
    "desc": "<p>上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。</p>\n"
  },
  "viewControl.minBeta": {
    "desc": "<p>左右旋转的最小 beta 值。即视角能旋转到达最左的角度。</p>\n"
  },
  "viewControl.maxBeta": {
    "desc": "<p>左右旋转的最大 beta 值。即视角能旋转到达最右的角度。</p>\n"
  },
  "viewControl.animation": {
    "desc": "<p>是否开启动画。</p>\n"
  },
  "viewControl.animationDurationUpdate": {
    "desc": "<p>过渡动画的时长。</p>\n"
  },
  "viewControl.animationEasingUpdate": {
    "desc": "<p>过渡动画的缓动效果。</p>\n"
  },
  "viewControl.targetCoord": {
    "desc": "<p>定位目标的经纬度坐标。设置后会忽略 <a href=\"#globe.viewControl.alpha\">alpha</a> 和 <a href=\"#globe.viewControl.beta\">beta</a>。</p>\n<pre><code class=\"lang-ts\">viewControl: {\n    // 定位到北京\n    targetCoord: [116.46, 39.92]\n}\n</code></pre>\n"
  },
  "layers": {
    "desc": "<p>地球表面层的配置，你可以使用该配置项加入云层，或者对 <a href=\"#globe.baseTexture\">baseTexture</a> 进行补充绘制出国家的轮廓等等。</p>\n"
  },
  "layers.show": {
    "desc": "<p>是否显示该层。</p>\n"
  },
  "layers.type": {
    "desc": "<p>层的类型，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;overlay&#39;</code></li>\n</ul>\n<p>在地表上的覆盖层，可以用来显示云层等。</p>\n<ul>\n<li><code class=\"codespan\">&#39;blend&#39;</code></li>\n</ul>\n<p>跟 <a href=\"#globe.baseTexture\">baseTexture</a> 混合。</p>\n"
  },
  "layers.name": {
    "desc": "<p>层的名字，在用 setOption 设置层属性的时候可以用 name 来标识需要更新的层。</p>\n<pre><code class=\"lang-ts\">chart.setOption({\n    globe: {\n        layer: [{\n            // 更新 name 为 &#39;cloud&#39; 的层的纹理\n            name: &#39;cloud&#39;,\n            texture: &#39;cloud.png&#39;\n        }]\n    }\n});\n</code></pre>\n"
  },
  "layers.blendTo": {
    "desc": "<p>在 <a href=\"#globe.layers.type\">type</a> 为 <code class=\"codespan\">&#39;blend&#39;</code> 时有效。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">albedo</code> 混合到 albedo，受光照的影响。</p>\n</li>\n<li><p><code class=\"codespan\">emission</code> 混合到自发光，不受光照影响。</p>\n</li>\n</ul>\n"
  },
  "layers.intensity": {
    "desc": "<p>混合的强度。</p>\n"
  },
  "layers.shading": {
    "desc": "<p>覆盖层的着色效果，同 <a href=\"#globe.shading\">globe.shading</a>， 支持 <code class=\"codespan\">&#39;color&#39;</code>, <code class=\"codespan\">&#39;lambert&#39;</code>, <code class=\"codespan\">&#39;realistic&#39;</code></p>\n<p>在 <a href=\"globe.layers.type\" target=\"_blank\">type</a> 为 <code class=\"codespan\">&#39;overlay&#39;</code> 时有效。</p>\n"
  },
  "layers.distance": {
    "desc": "<p>覆盖层离地球表面的距离。</p>\n<p>在 <a href=\"#globe.layers.type\">type</a> 为 <code class=\"codespan\">&#39;overlay&#39;</code> 时有效。</p>\n"
  },
  "layers.texture": {
    "desc": "<p>层的纹理，支持图片路径的字符串、图片对象或者 Canvas 的对象。</p>\n<p>也支持直接使用 echarts 的实例作为纹理，此时在地球上的鼠标动作会跟纹理上使用的 echarts 实例有联动。</p>\n"
  },
  "zlevel": {
    "desc": "<p>组件所在的层。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n<p><strong>注:</strong> echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 <code class=\"codespan\">zlevel</code> 不能同时用于 WebGL 和 Canvas 的绘制。</p>\n"
  },
  "left": {
    "desc": "<p>组件的视图离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
  },
  "top": {
    "desc": "<p>组件的视图离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n"
  },
  "right": {
    "desc": "<p>组件的视图离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n"
  },
  "bottom": {
    "desc": "<p>组件的视图离容器下侧的距离。</p>\n<p><code class=\"codespan\">bottom</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n"
  },
  "width": {
    "desc": "<p>组件的视图宽度。</p>\n"
  },
  "height": {
    "desc": "<p>组件的视图高度。</p>\n"
  }
}