window.__EC_DOC_option_series_gauge = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "name": {
    "desc": "<p>系列名称，用于<a href=\"#tooltip\">tooltip</a>的显示，<a href=\"#legend\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "zlevel": {
    "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "center": {
    "desc": "\n\n<p>的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。</p>\n<p>支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。</p>\n<p><strong>使用示例：</strong></p>\n<pre><code>// 设置成绝对的像素值\ncenter: [400, 300]\n// 设置成相对的百分比\ncenter: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>",
    "uiControl": {
      "type": "percentvector",
      "dims": "x,y"
    }
  },
  "radius": {
    "desc": "\n\n<p>仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "75%"
    }
  },
  "legendHoverLink": {
    "desc": "\n\n<p>是否启用<a href=\"#legend\">图例</a> hover 时的联动高亮。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "startAngle": {
    "desc": "\n\n<p>仪表盘起始角度。<a href=\"#series-gauge.center\">圆心</a> 正右手侧为<code class=\"codespan\">0</code>度，正上方为<code class=\"codespan\">90</code>度，正左手侧为<code class=\"codespan\">180</code>度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-360",
      "max": "360",
      "default": "225",
      "step": "1"
    }
  },
  "endAngle": {
    "desc": "\n\n<p>仪表盘结束角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-360",
      "max": "360",
      "default": "-45",
      "step": "1"
    }
  },
  "clockwise": {
    "desc": "\n\n<p>仪表盘刻度是否是顺时针增长。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "data": {
    "desc": "<p>系列中的数据内容数组。数组项可以为单个数值，如：</p>\n<pre><code class=\"lang-js\">[12, 34, 56, 10, 23]\n</code></pre>\n<p>如果需要在数据中加入其它维度给 <a href=\"#visualMap\">visualMap</a> 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组，如：</p>\n<pre><code class=\"lang-js\">[[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]\n</code></pre>\n<p>这时候可以将每项数组中的第二个值指定给 <a href=\"#visualMap\">visualMap</a> 组件。</p>\n<p>更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：</p>\n<pre><code class=\"lang-js\">[{\n    // 数据项的名称\n    name: &#39;数据1&#39;,\n    // 数据项值8\n    value: 10\n}, {\n    name: &#39;数据2&#39;,\n    value: 20\n}]\n</code></pre>\n<p>需要对个别内容指定进行个性化定义时：</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;数据1&#39;,\n    value: 10\n}, {\n    // 数据项名称\n    name: &#39;数据2&#39;,\n    value : 56,\n    //自定义特殊 tooltip，仅对该数据项有效\n    tooltip:{},\n    //自定义特殊itemStyle，仅对该item有效\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "data.title": {
    "desc": "<p>仪表盘标题。</p>\n"
  },
  "data.title.show": {
    "desc": "\n\n<p>是否显示标题。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "data.title.offsetCenter": {
    "desc": "\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,20%",
      "dims": "x,y"
    }
  },
  "data.title.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#464646'"
    }
  },
  "data.title.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.title.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.title.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.title.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "16",
      "min": "1",
      "step": "1"
    }
  },
  "data.title.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.title.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.title.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.title.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.title.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.title.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.title.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "data.title.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "data.title.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.title.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.title.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "data.title.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "data.title.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "data.title.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "data.title.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.title.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.title.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.title.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.title.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.title.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.title.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.title.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.title.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.title.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.title.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.title.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.title.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.title.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.title.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.title.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.title.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.title.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.title.valueAnimation": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>是否开启标签的数字动画。</p>\n"
  },
  "data.detail": {
    "desc": "<p>仪表盘详情，用于显示数据。</p>\n"
  },
  "data.detail.show": {
    "desc": "\n\n<p>是否显示详情。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "data.detail.color": {
    "desc": "\n\n<p>文本颜色，默认取数值所在的<a href=\"#series-gauge.axisLine.lineStyle.color\">区间的颜色</a></p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.detail.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.detail.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.detail.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "30",
      "min": "1",
      "step": "1"
    }
  },
  "data.detail.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.detail.backgroundColor": {
    "desc": "\n\n<p>详情背景色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.borderColor": {
    "desc": "\n\n<p>详情边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "data.detail.borderWidth": {
    "desc": "\n\n<p>详情边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.detail.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.detail.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.width": {
    "desc": "\n\n<p>详情宽度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "100",
      "min": "0",
      "step": "1"
    }
  },
  "data.detail.height": {
    "desc": "\n\n<p>详情高度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "40",
      "min": "0",
      "step": "1"
    }
  },
  "data.detail.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.detail.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "data.detail.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "data.detail.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "data.detail.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "data.detail.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.detail.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.detail.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.detail.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.detail.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.detail.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.detail.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.detail.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.detail.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.detail.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.detail.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.detail.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.detail.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.detail.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.detail.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.detail.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.detail.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.detail.valueAnimation": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>是否开启标签的数字动画。</p>\n"
  },
  "data.detail.offsetCenter": {
    "desc": "\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,-40%",
      "dims": "x,y"
    }
  },
  "data.detail.formatter": {
    "desc": "<p>格式化函数或者字符串</p>\n<pre><code class=\"lang-js\">formatter: function (value) {\n    return value.toFixed(0);\n}\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "\n\n<p>数据值。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "1"
    }
  },
  "min": {
    "desc": "\n\n<p>最小的数据值，映射到 <a href=\"#series-gauge.minAngle\">minAngle</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "1"
    }
  },
  "max": {
    "desc": "\n\n<p>最大的数据值，映射到 <a href=\"#series-gauge.maxAngle\">maxAngle</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "step": "1"
    }
  },
  "splitNumber": {
    "desc": "\n\n<p>仪表盘刻度的分割段数。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "default": "10",
      "step": "1"
    }
  },
  "axisLine": {
    "desc": "<p>仪表盘轴线相关配置。</p>\n"
  },
  "axisLine.show": {
    "desc": "\n\n<p>是否显示仪表盘轴线。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisLine.roundCap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>是否在两端显示成圆形。</p>\n"
  },
  "axisLine.lineStyle": {
    "desc": "<p>仪表盘轴线样式。</p>\n"
  },
  "axisLine.lineStyle.color": {
    "desc": "<p>仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示。</p>\n<p>默认取值：</p>\n<pre><code class=\"lang-js\">[[1, &#39;#E6EBF8&#39;]]\n</code></pre>\n"
  },
  "axisLine.lineStyle.width": {
    "desc": "<p>轴线宽度。</p>\n"
  },
  "axisLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "progress": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n<p>展示当前进度。</p>\n"
  },
  "progress.show": {
    "desc": "\n\n<p>是否显示进度条。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "progress.overlap": {
    "desc": "\n\n<p>多组数据时进度条是否重叠。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "progress.width": {
    "desc": "\n\n<p>进度条宽度。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "progress.roundCap": {
    "desc": "<p>是否在两端显示成圆形。</p>\n"
  },
  "progress.clip": {
    "desc": "<p>是否裁掉超出部分。</p>\n"
  },
  "progress.itemStyle": {
    "desc": "<p>进度条样式。</p>\n"
  },
  "progress.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "progress.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "progress.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "progress.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "progress.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "progress.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "progress.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "progress.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "progress.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "splitLine": {
    "desc": "<p>分隔线样式。</p>\n"
  },
  "splitLine.show": {
    "desc": "\n\n<p>是否显示分隔线。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "splitLine.length": {
    "desc": "\n\n<p>分隔线线长。支持相对半径的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "10",
      "min": "0",
      "step": "0.5"
    }
  },
  "splitLine.distance": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>分隔线与轴线的距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10",
      "min": "0",
      "step": "0.5"
    }
  },
  "splitLine.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "splitLine.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "splitLine.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "splitLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "splitLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "splitLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "splitLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "splitLine.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisTick": {
    "desc": "<p>刻度样式。</p>\n"
  },
  "axisTick.show": {
    "desc": "\n\n<p>是否显示刻度。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisTick.splitNumber": {
    "desc": "\n\n<p>分隔线之间分割的刻度数。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "default": "5",
      "step": "1"
    }
  },
  "axisTick.length": {
    "desc": "\n\n<p>刻度线长。支持相对半径的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "6",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.distance": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>刻度线与轴线的距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisTick.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisTick.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisTick.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisLabel": {
    "desc": "<p>刻度标签。</p>\n"
  },
  "axisLabel.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisLabel.distance": {
    "desc": "\n\n<p>标签与刻度线的距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "15",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.formatter": {
    "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。\n示例:</p>\n<pre><code class=\"lang-js\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n\n// 使用函数模板，函数参数分别为刻度数值\nformatter: function (value) {\n    return value + &#39;km/h&#39;;\n}\n</code></pre>\n"
  },
  "axisLabel.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#464646'"
    }
  },
  "axisLabel.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisLabel.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisLabel.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisLabel.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisLabel.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisLabel.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "axisLabel.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisLabel.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "axisLabel.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "axisLabel.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisLabel.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "axisLabel.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "axisLabel.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "axisLabel.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "axisLabel.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "axisLabel.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisLabel.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisLabel.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisLabel.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisLabel.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "axisLabel.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "axisLabel.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisLabel.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "axisLabel.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisLabel.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "axisLabel.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "axisLabel.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisLabel.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "pointer": {
    "desc": "<p>仪表盘指针。</p>\n"
  },
  "pointer.show": {
    "desc": "\n\n<p>是否显示指针。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "pointer.icon": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "pointer.offsetCenter": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,0",
      "dims": "x,y"
    }
  },
  "pointer.length": {
    "desc": "\n\n<p>指针长度，可以是绝对数值，也可以是相对于<a href=\"#series-gauge.radius\">半径</a>的半分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "60%",
      "min": "0",
      "step": "0.5"
    }
  },
  "pointer.width": {
    "desc": "\n\n<p>指针宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "6",
      "min": "0",
      "step": "0.5"
    }
  },
  "pointer.keepAspect": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>如果图标是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "pointer.itemStyle": {
    "desc": "<p>指针样式。</p>\n"
  },
  "pointer.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "pointer.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "pointer.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "pointer.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "pointer.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "pointer.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "pointer.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "pointer.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "pointer.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "anchor": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0</code> 开始支持</p>\n</blockquote>\n<p>表盘中指针的固定点。</p>\n"
  },
  "anchor.show": {
    "desc": "\n\n<p>是否显示固定点。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "anchor.showAbove": {
    "desc": "\n\n<p>固定点是否显示在指针上面。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "anchor.size": {
    "desc": "\n\n<p>固定点大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "6",
      "min": "0",
      "step": "0.5"
    }
  },
  "anchor.icon": {
    "desc": "<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "anchor.offsetCenter": {
    "desc": "\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,0",
      "dims": "x,y"
    }
  },
  "anchor.keepAspect": {
    "desc": "\n\n<p>如果图标是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "anchor.itemStyle": {
    "desc": "<p>指针固定点样式。</p>\n"
  },
  "anchor.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "anchor.itemStyle.borderColor": {
    "desc": "\n\n<p>固定点边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#5470c6"
    }
  },
  "anchor.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "anchor.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "anchor.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "anchor.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "anchor.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "anchor.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "anchor.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "itemStyle": {
    "desc": "<p>仪表盘指针样式。</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>指针颜色，默认取数值所在的<a href=\"#series-gauge.axisLine.lineStyle.color\">区间的颜色</a></p>\n"
  },
  "itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis": {
    "desc": "<p>高亮的仪表盘指针样式</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "title": {
    "desc": "<p>仪表盘标题。</p>\n"
  },
  "title.show": {
    "desc": "\n\n<p>是否显示标题。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "title.offsetCenter": {
    "desc": "\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,20%",
      "dims": "x,y"
    }
  },
  "title.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#464646'"
    }
  },
  "title.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "title.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "title.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "title.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "16",
      "min": "1",
      "step": "1"
    }
  },
  "title.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "title.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "title.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "title.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "title.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "title.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "title.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "title.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "title.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "title.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "title.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "title.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "title.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "title.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "title.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "title.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "title.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "title.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "title.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "title.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "title.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "title.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "title.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "title.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "title.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "title.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "title.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "title.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "title.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "title.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "title.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "title.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "title.valueAnimation": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>是否开启标签的数字动画。</p>\n"
  },
  "detail": {
    "desc": "<p>仪表盘详情，用于显示数据。</p>\n"
  },
  "detail.show": {
    "desc": "\n\n<p>是否显示详情。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "detail.color": {
    "desc": "\n\n<p>文本颜色，默认取数值所在的<a href=\"#series-gauge.axisLine.lineStyle.color\">区间的颜色</a></p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "detail.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "detail.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "detail.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "30",
      "min": "1",
      "step": "1"
    }
  },
  "detail.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "detail.backgroundColor": {
    "desc": "\n\n<p>详情背景色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.borderColor": {
    "desc": "\n\n<p>详情边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "detail.borderWidth": {
    "desc": "\n\n<p>详情边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "detail.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "detail.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.width": {
    "desc": "\n\n<p>详情宽度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "100",
      "min": "0",
      "step": "1"
    }
  },
  "detail.height": {
    "desc": "\n\n<p>详情高度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "40",
      "min": "0",
      "step": "1"
    }
  },
  "detail.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "detail.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "detail.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "detail.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "detail.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "detail.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "detail.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "detail.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "detail.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "detail.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "detail.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "detail.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "detail.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "detail.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "detail.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "detail.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "detail.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "detail.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "detail.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "detail.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "detail.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "detail.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "detail.valueAnimation": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>是否开启标签的数字动画。</p>\n"
  },
  "detail.offsetCenter": {
    "desc": "\n\n<p>相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。</p>\n",
    "uiControl": {
      "type": "percentvector",
      "default": "0,-40%",
      "dims": "x,y"
    }
  },
  "detail.formatter": {
    "desc": "<p>格式化函数或者字符串</p>\n<pre><code class=\"lang-js\">formatter: function (value) {\n    return value.toFixed(0);\n}\n</code></pre>\n"
  },
  "markPoint": {
    "desc": "<p>图表标注。</p>\n"
  },
  "markPoint.symbol": {
    "desc": "\n\n<p>标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>如果需要每个数据的图形不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; string\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-gauge.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markPoint.symbolSize": {
    "desc": "\n\n<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n<p>如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-gauge.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markPoint.symbolRotate": {
    "desc": "\n\n<p>标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n<p>如果需要每个数据的旋转角度不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-gauge.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n<blockquote>\n<p>从 4.8.0 开始支持回调函数。</p>\n</blockquote>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markPoint.symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markPoint.symbolOffset": {
    "desc": "\n\n<p>标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markPoint.silent": {
    "desc": "\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markPoint.label": {
    "desc": "<p>标注的文本。</p>\n"
  },
  "markPoint.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "markPoint.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markPoint.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markPoint.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markPoint.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markPoint.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markPoint.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle": {
    "desc": "<p>标注的样式。</p>\n"
  },
  "markPoint.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.emphasis": {
    "desc": "<p>标注的高亮样式。</p>\n"
  },
  "markPoint.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markPoint.emphasis.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markPoint.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.emphasis.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markPoint.emphasis.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markPoint.emphasis.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markPoint.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markPoint.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>标注的淡出样式。淡出的规则跟随所在系列。</p>\n"
  },
  "markPoint.blur.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markPoint.blur.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.blur.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.blur.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.blur.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markPoint.blur.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.blur.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.blur.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.blur.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.blur.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.blur.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.blur.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.blur.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.blur.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.blur.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.blur.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.blur.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.blur.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.blur.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.blur.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.blur.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markPoint.blur.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markPoint.blur.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markPoint.blur.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markPoint.blur.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.blur.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.blur.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.blur.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.blur.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.blur.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.blur.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.blur.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.blur.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.blur.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.blur.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.blur.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.blur.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.blur.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.blur.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.blur.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.blur.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.blur.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.blur.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.blur.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.blur.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.data": {
    "desc": "<p>标注的数据数组。每个数组项是一个对象，有下面几种方式指定标注的位置。</p>\n<ol>\n<li>通过 <a href=\"#series-gauge.markPoint.data.x\">x</a>, <a href=\"#series-gauge.markPoint.data.y\">y</a> 属性指定相对容器的屏幕坐标，单位像素，支持百分比。</li>\n</ol>\n<p>当多个属性同时存在时，优先级按上述的顺序。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">data: [\n\n    {\n        name: &#39;某个屏幕坐标&#39;,\n        x: 100,\n        y: 100\n    }\n]\n</code></pre>\n"
  },
  "markPoint.data.name": {
    "desc": "<p>标注名称。</p>\n"
  },
  "markPoint.data.x": {
    "desc": "\n\n<p>相对容器的屏幕 x 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markPoint.data.y": {
    "desc": "\n\n<p>相对容器的屏幕 y 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markPoint.data.value": {
    "desc": "<p>标注值，可以不设。</p>\n"
  },
  "markPoint.data.symbol": {
    "desc": "\n\n<p>标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markPoint.data.symbolSize": {
    "desc": "\n\n<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markPoint.data.symbolRotate": {
    "desc": "\n\n<p>标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markPoint.data.symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markPoint.data.symbolOffset": {
    "desc": "\n\n<p>标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markPoint.data.itemStyle": {
    "desc": "<p>该标注的样式。</p>\n"
  },
  "markPoint.data.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.data.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.data.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.data.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markPoint.data.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.data.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.data.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.data.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.data.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.data.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markPoint.data.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markPoint.data.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markPoint.data.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markPoint.data.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.data.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.data.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markPoint.data.emphasis.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.data.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.data.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.data.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.data.emphasis.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markPoint.data.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markPoint.data.emphasis.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markPoint.data.emphasis.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markPoint.data.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markPoint.data.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.data.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.data.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.data.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "markPoint.animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "markPoint.animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markPoint.animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markPoint.animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "markPoint.animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markPoint.animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markPoint.animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "markLine": {
    "desc": "<p>图表标线。</p>\n"
  },
  "markLine.silent": {
    "desc": "\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markLine.symbol": {
    "desc": "<p>标线两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定，具体格式见 <a href=\"#series-gauge.markLine.data.0.symbol\">data.symbol</a>。</p>\n"
  },
  "markLine.symbolSize": {
    "desc": "<p>标线两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。</p>\n<p><strong>注意：</strong> 这里无法像一般的 <code class=\"codespan\">symbolSize</code> 那样通过数组分别指定高宽。</p>\n"
  },
  "markLine.precision": {
    "desc": "<p>标线数值的精度，在显示平均值线的时候有用。</p>\n"
  },
  "markLine.label": {
    "desc": "<p>标线的文本。</p>\n"
  },
  "markLine.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.lineStyle": {
    "desc": "<p>标线的样式</p>\n"
  },
  "markLine.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.emphasis": {
    "desc": "<p>标线的高亮样式。</p>\n"
  },
  "markLine.emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.emphasis.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.emphasis.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.emphasis.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.emphasis.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.emphasis.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.emphasis.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.emphasis.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.emphasis.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.emphasis.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.emphasis.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>标线的淡出样式。淡出的规则跟随所在系列。</p>\n"
  },
  "markLine.blur.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.blur.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.blur.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.blur.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.blur.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.blur.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.blur.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.blur.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.blur.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.blur.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.blur.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.blur.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data": {
    "desc": "<p>标线的数据数组。每个数组项可以是一个两个值的数组，分别表示线的起点和终点，每一项是一个对象，有下面几种方式指定起点或终点的位置。</p>\n<ol>\n<li>通过 <a href=\"#series-gauge.markLine.data.0.x\">x</a>, <a href=\"#series-gauge.markLine.data.0.y\">y</a> 属性指定相对容器的屏幕坐标，单位像素，支持百分比。</li>\n</ol>\n<p>当多个属性同时存在时，优先级按上述的顺序。</p>\n<pre><code>data: [\n\n[\n        {\n            name: &#39;两个屏幕坐标之间的标线&#39;,\n            x: 100,\n            y: 100\n        },\n        {\n            x: 500,\n            y: 200\n        }\n    ]\n]\n</code></pre>"
  },
  "markLine.data.0": {
    "desc": "<p>起点的数据。</p>\n"
  },
  "markLine.data.0.name": {
    "desc": "<p>标注名称，将会作为文字显示。</p>\n"
  },
  "markLine.data.0.x": {
    "desc": "\n\n<p>相对容器的屏幕 x 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.0.y": {
    "desc": "\n\n<p>相对容器的屏幕 y 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.0.value": {
    "desc": "<p>标注值，可以不设。</p>\n"
  },
  "markLine.data.0.symbol": {
    "desc": "\n\n<p>起点标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markLine.data.0.symbolSize": {
    "desc": "\n\n<p>起点标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markLine.data.0.symbolRotate": {
    "desc": "\n\n<p>起点标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markLine.data.0.symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markLine.data.0.symbolOffset": {
    "desc": "\n\n<p>起点标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markLine.data.0.lineStyle": {
    "desc": "<p>该数据项线的样式，起点和终点项的 <code class=\"codespan\">lineStyle</code>会合并到一起。</p>\n"
  },
  "markLine.data.0.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.0.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.0.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.0.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.0.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.0.label": {
    "desc": "<p>该数据项标签的样式，起点和终点项的 <code class=\"codespan\">label</code>会合并到一起。</p>\n"
  },
  "markLine.data.0.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.0.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.0.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.0.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.0.emphasis.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.0.emphasis.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.0.emphasis.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.0.emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.0.emphasis.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.0.emphasis.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.0.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.0.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n"
  },
  "markLine.data.0.blur.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.0.blur.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.blur.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.0.blur.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.blur.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.0.blur.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.blur.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.blur.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.0.blur.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.0.blur.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.0.blur.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.0.blur.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.0.blur.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.1": {
    "desc": "<p>终点的数据。</p>\n"
  },
  "markLine.data.1.name": {
    "desc": "<p>标注名称，将会作为文字显示。</p>\n"
  },
  "markLine.data.1.x": {
    "desc": "\n\n<p>相对容器的屏幕 x 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.1.y": {
    "desc": "\n\n<p>相对容器的屏幕 y 坐标，单位像素。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.1.value": {
    "desc": "<p>标注值，可以不设。</p>\n"
  },
  "markLine.data.1.symbol": {
    "desc": "\n\n<p>终点标记的图形。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markLine.data.1.symbolSize": {
    "desc": "\n\n<p>终点标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markLine.data.1.symbolRotate": {
    "desc": "\n\n<p>终点标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markLine.data.1.symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markLine.data.1.symbolOffset": {
    "desc": "\n\n<p>终点标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markLine.data.1.lineStyle": {
    "desc": "<p>该数据项线的样式，起点和终点项的 <code class=\"codespan\">lineStyle</code>会合并到一起。</p>\n"
  },
  "markLine.data.1.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.1.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.1.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.1.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.1.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.1.label": {
    "desc": "<p>该数据项标签的样式，起点和终点项的 <code class=\"codespan\">label</code>会合并到一起。</p>\n"
  },
  "markLine.data.1.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.1.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.1.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.1.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.1.emphasis.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.1.emphasis.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.1.emphasis.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.1.emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.1.emphasis.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.1.emphasis.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.1.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.1.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n"
  },
  "markLine.data.1.blur.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.1.blur.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.blur.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.1.blur.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.blur.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.1.blur.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.blur.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.blur.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.1.blur.lineStyle.curveness": {
    "desc": "\n\n<p>边的曲度，支持从 0 到 1 的值，值越大曲度越大。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.1.blur.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "markLine.data.1.blur.label.position": {
    "desc": "<p>标签位置，可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> 线的起始点。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> 线的中点。</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> 线的结束点。</li>\n</ul>\n<p>4.7.0 版本起，支持更多标签位置：<code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>。</p>\n<p>其中，<code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> 等同于 <code class=\"codespan\">&#39;middle&#39;</code>。具体位置参见下图。</p>\n<p>文字与线的间距可以通过 <a href=\"#series-.markLine.label.distance\">label.distance</a> 调整。</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n"
  },
  "markLine.data.1.blur.label.distance": {
    "desc": "<p>标签与线之间的间距。如果是数组，第一项为横向间距，第二项为纵向间距。如果是数字，则表示横向纵向使用相同的间距。</p>\n"
  },
  "markLine.data.1.blur.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "markLine.animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "markLine.animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markLine.animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markLine.animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "markLine.animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markLine.animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markLine.animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "markArea": {
    "desc": "<p>图表标域，常用于标记图表中某个范围的数据，例如标出某段时间投放了广告。</p>\n"
  },
  "markArea.silent": {
    "desc": "\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markArea.label": {
    "desc": "<p>标域文本配置。</p>\n"
  },
  "markArea.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.itemStyle": {
    "desc": "<p>该标域的样式。</p>\n"
  },
  "markArea.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.emphasis": {
    "desc": "<p>高亮的标域样式</p>\n"
  },
  "markArea.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.emphasis.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.emphasis.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.emphasis.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.emphasis.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>淡出的标域样式。淡出的规则跟随所在系列。</p>\n"
  },
  "markArea.blur.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.blur.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.blur.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.blur.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.blur.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.blur.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.blur.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.blur.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.blur.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.blur.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.blur.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.blur.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.blur.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.blur.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.blur.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.blur.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.blur.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.blur.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.blur.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.blur.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.blur.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.blur.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.blur.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.blur.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.blur.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.blur.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.blur.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.blur.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.blur.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.blur.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.blur.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.blur.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.blur.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.blur.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.blur.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.blur.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.blur.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.blur.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.blur.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.blur.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.blur.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.blur.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.blur.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.blur.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data": {
    "desc": "<p>标域的数据数组。每个数组项是一个两个项的数组，分别表示标域左上角和右下角的位置，每个项支持通过下面几种方式指定自己的位置</p>\n<ol>\n<li>通过 <a href=\"#series-gauge.markArea.data.0.x\">x</a>, <a href=\"#series-gauge.markArea.data.0.y\">y</a> 属性指定相对容器的屏幕坐标，单位像素，支持百分比。</li>\n</ol>\n<p>当多个属性同时存在时，优先级按上述的顺序。</p>\n<pre><code>data: [\n\n[\n        {\n            name: &#39;两个屏幕坐标之间的标域&#39;,\n            x: 100,\n            y: 100\n        }, {\n            x: &#39;90%&#39;,\n            y: &#39;10%&#39;\n        }\n    ]\n]\n</code></pre>"
  },
  "markArea.data.0": {
    "desc": "<p>标域左上角的数据</p>\n"
  },
  "markArea.data.0.name": {
    "desc": "<p>标注名称，将会作为文字显示。</p>\n"
  },
  "markArea.data.0.x": {
    "desc": "\n\n<p>相对容器的屏幕 x 坐标，单位像素，支持百分比形式，例如 <code class=\"codespan\">&#39;20%&#39;</code>。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.0.y": {
    "desc": "\n\n<p>相对容器的屏幕 y 坐标，单位像素，支持百分比形式，例如 <code class=\"codespan\">&#39;20%&#39;</code>。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.0.value": {
    "desc": "<p>标域值，可以不设。</p>\n"
  },
  "markArea.data.0.itemStyle": {
    "desc": "<p>该数据项区域的样式，起点和终点项的<code class=\"codespan\">itemStyle</code>会合并到一起。</p>\n"
  },
  "markArea.data.0.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.0.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.0.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.0.label": {
    "desc": "<p>该数据项标签的样式，起点和终点项的<code class=\"codespan\">label</code>会合并到一起。</p>\n"
  },
  "markArea.data.0.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.0.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.0.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.0.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.0.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.0.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.0.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.0.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.0.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.0.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.0.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.0.emphasis.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.0.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.0.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.0.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.emphasis.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.0.emphasis.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.0.emphasis.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.0.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n"
  },
  "markArea.data.0.blur.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.0.blur.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.0.blur.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.0.blur.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.0.blur.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.0.blur.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.0.blur.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.0.blur.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.blur.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.blur.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.blur.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.blur.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.blur.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.blur.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.blur.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.blur.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.blur.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.blur.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.blur.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.blur.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.blur.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.0.blur.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.blur.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.0.blur.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.0.blur.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.0.blur.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.0.blur.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.blur.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.0.blur.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.blur.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1": {
    "desc": "<p>标域右下角的数据</p>\n"
  },
  "markArea.data.1.name": {
    "desc": "<p>标注名称，将会作为文字显示。</p>\n"
  },
  "markArea.data.1.x": {
    "desc": "\n\n<p>相对容器的屏幕 x 坐标，单位像素，支持百分比形式，例如 <code class=\"codespan\">&#39;20%&#39;</code>。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.1.y": {
    "desc": "\n\n<p>相对容器的屏幕 y 坐标，单位像素，支持百分比形式，例如 <code class=\"codespan\">&#39;20%&#39;</code>。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.1.value": {
    "desc": "<p>标域值，可以不设。</p>\n"
  },
  "markArea.data.1.itemStyle": {
    "desc": "<p>该数据项区域的样式，起点和终点项的<code class=\"codespan\">itemStyle</code>会合并到一起。</p>\n"
  },
  "markArea.data.1.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.1.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.1.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.1.label": {
    "desc": "<p>该数据项标签的样式，起点和终点项的<code class=\"codespan\">label</code>会合并到一起。</p>\n"
  },
  "markArea.data.1.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.1.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.1.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.1.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.1.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.1.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.1.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.1.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.1.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.1.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.1.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.1.emphasis.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.1.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.1.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.1.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.emphasis.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.1.emphasis.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.1.emphasis.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.1.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n"
  },
  "markArea.data.1.blur.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.1.blur.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.1.blur.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.1.blur.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.1.blur.label.position": {
    "desc": "\n\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.1.blur.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.1.blur.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.1.blur.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.blur.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.blur.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.blur.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.blur.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.blur.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.blur.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.blur.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.blur.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.blur.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.blur.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.blur.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.blur.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.blur.label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "markArea.data.1.blur.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.blur.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "markArea.data.1.blur.label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "markArea.data.1.blur.label.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "markArea.data.1.blur.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "markArea.data.1.blur.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.blur.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "markArea.data.1.blur.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;inherit&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.blur.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false",
      "clean": "true"
    }
  },
  "markArea.animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "markArea.animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markArea.animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markArea.animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "markArea.animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markArea.animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markArea.animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "silent": {
    "desc": "\n\n<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://echarts.apache.org/next/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "tooltip": {
    "desc": "<p>本系列特定的 tooltip 设定。</p>\n"
  },
  "tooltip.position": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "tooltip.formatter": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n    // 饼图的百分比\n    percent: number,\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "tooltip.backgroundColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
  },
  "tooltip.borderColor": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "tooltip.borderWidth": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "tooltip.padding": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "tooltip.textStyle": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的文本样式。</p>\n"
  },
  "tooltip.textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "tooltip.textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "tooltip.textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "tooltip.textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "tooltip.textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "tooltip.textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "tooltip.textStyle.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "tooltip.textStyle.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "tooltip.textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "tooltip.textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "tooltip.textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "tooltip.textStyle.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "tooltip.textStyle.lineOverflow": {
    "desc": "<p>文本超出高度部分是否截断，配置<code class=\"codespan\">height</code>时有效。</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 在文本行数超出高度部分截断。</li>\n</ul>\n"
  },
  "tooltip.extraCssText": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}