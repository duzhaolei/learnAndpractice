##### 移动端兼容
移动端兼容单位一般使用em，rem，vmin，vw，等单位来兼容适配移动；vmin指的是==相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin,相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin。== vmin在IE9中仅支持使用vm代替vmin，同时vmin仅在IE9+,Firefox19.0+,Chrome26.0+，Safari6+，Opera15+，ios Safari6.0+，android Browser4.4+，Android Chrome26.0+等版本的浏览器上支持



##### 圣杯布局
圣杯布局是在双飞翼布局出现之前的一种布局方式，这种布局方式结合了浮动，定位等方式来进行页面布局，代码如下：

```

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        min-width: 700px;
    }
    .container{
        padding: 0 220px 0 200px;
        overflow: hidden;
    }
    .middle,.left,.right{
        float: left;
        position: relative;
        min-height: 200px;
    }
    .middle{
        width: 100%;
        background-color: linen;
    }
    .left{
        width: 200px;
        left: -200px;
        background-color: yellow;
        margin-left: -100%;
    }
    .right{
        margin-left: -220px;
        width: 220px;
        right: -220px;
        background-color: lawngreen;
    }
</style>

<body>
    <div class="container">
        <div class="middle">middle</div>
        <div class="left">left</div>
        <div class="right">right</div>
    </div>
</body>

```

##### 双飞翼布局

双飞翼布局是在圣杯布局上的一种优化，改善；如果把三栏布局比作一只大鸟，可以把main看成是鸟的身体，sub和extra则是鸟的翅膀。这个布局的实现思路是，先把最重要的身体部分放好，然后再将翅膀移动到适当的地方.代码如下：


```

<style>
    body,html{
        margin: 0;
        padding: 0;
    }
    .contain{
        overflow: hidden;
    }
    .main,.left,.right{
        min-height: 300px;
        float: left;
    }
    .main{
        width: 100%;
    }
    .left{
        width: 300px;
        background-color: darkorange;
        margin-left: -100%;
    }
    .right{
        width: 320px;
        background-color: red;
        margin-left: -320px;
    }
    .main-inner{
        min-height: 300px;
        margin: 0 320px 0 300px;
        background-color: gainsboro;
        word-break: break-all;
    }
</style>
<body>
    <div class="contain">
        <div class="main">
            <div class="main-inner">
    
            </div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>

```

不管双飞翼布局还是，圣杯布局核心的思想都是将最重要的放在最开始的位置，方便渲染；双飞翼布局与圣杯布局不同的是双飞翼布局没有使用定位，而是利用浮动和margin属性达到了目的；双飞翼布局，通过利用float、负边距、登高、盒子模型、清除浮动和position联合使用来达到布局效果；

##### 硬件加速
- 什么是硬件加速呢，就是将浏览器的渲染过程交给GPU处理，而不是使用自带的比较慢的渲染器，这样可以是animation与transition更加顺畅；
- 目前Chrome，Firefox，Safari，IE9+以及最新的Opera等浏览器都支持硬件加速，只需要使用特定的Css语句就可以开启硬件加速：
```
transform:translate3d(0,0,0)
<!--对需要3d加速的父元素添加这个css属性就可开启3d加速了-->
<!--3d加速也不要乱用，如果全部使用3d加速可能会增加浏览器的负担造成页面卡顿-->

```

##### IconFont
矢量字体、SVG等现在使用较多，但是使用这些字体要引入大量的相关字体；最佳的还是使用css绘制出的字体，更加方便快捷，而且基本不许要引入什么外部文件；在(http://cssicon.space/#/)这个css官方的css图标库中有一些我们常用的css绘制的字体，如有需求不同，可以作为参考自己绘制一些字体。IE6如果不支持html5和css3可以通过引入一些js来进行兼容；

#### BFC IFC GFC FFC
首先理解下Box,Formatting Context的概念；
###### Box：CSS布局的基本单位
Box是CSS布局的对象和基本单位，直观点来说，就是一个页面是有很多Box组成的。元素的类型和display属性，决定了这个box的类型，不同类型的BOx，会参与不同的Formatting Contxt(一个决定了如何渲染文档的容器)，因此BOX内的元素会以不同的方式渲染。我们来看看有哪些盒子：

- block-level box:display属性为block，list-item,table的元素，会生成block-levle box。并且参与block fomatting context;
- inline-level box:display属性为inline，inline-block，inline-table的元素，会生成inline-level box。并且参与inline formatting context；

###### BFC
全称Block Formatting context(块级格式化上下文)，它属于上述定位方案的普通流。具有BFC特性的元素可以看做是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，同时BFC具有普通容器所没有的一些特性。简单的来说，可以把BFC理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。以下元素会生成BFC：

- 根元素
- float属性不为none
- position为absolute或fixed
- display 为inline-block，table-cell，table-caption，flex，inline-flex
- overflow不为visible

==注：BFC布局的核心是形成隔离，没有其他任何因素对盒子内部造成影响==

###### IFC 
全称inline formatting context;特性和BFC类似，不过是在行内的封闭箱子不会影响前后的布局。
###### GFC 
全称 Grid Formatting Context(网格布局)；display属性是grid，inline-grid，subgrid；

- grid：生成块级网格
- inline-grid：生成行内网格
- subgrid：如网格容器本身是网格项(嵌套网格容器)，该属性用来继承欺父网格容器的行、列大小。[其他详细信息点击参考该网站](https://blog.csdn.net/Abenazhan/article/details/80346647)