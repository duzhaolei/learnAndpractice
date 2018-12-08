通过使用css的transform属性，来构建一个3d世界

```
transform-style:preserve-3d;
<!--这是开启3d的必须属性，将该属性加载父元素上即可
开启3d支持-->

<!--开启3d支持后子元素可以在X,Y,Z三个轴上任意旋转，
元素在旋转时需注意，不论元素怎么旋转元素的坐标轴的
正方向是不会发生改变的，我们可以使用我们的左手来实
现一个简单的3D坐标系，我们左手中指向下，食指向右，
拇指指向我们，这样一个简单的3D坐标系就形成了，在这
里面，我们食指的指向是X轴的正方向，拇指是Z轴的正方
向，中指是Y轴的正方向；-->

```
****在使用3D坐标系时我们需要谨记：坐标系的正方向是会随着元素的旋转而改变的；****

transform里面的rotateY()这个指的是绕Y轴旋转的角度单位是deg，以此类推有rotateX()，rotateZ();translateZ(100px)指的是当前元素沿Z轴移动的距离，同样也有translateY()，translateY();
transform-origin可以调整元素的旋转基点，在开启3d后transform-origin的值分别是X，Y，Z不开启3D则只需填写X，Y值；
在我们书写3D时我们可能无法看到相应的效果，在这个时候就需要我们设置perspective属性来开启透视距离也可以说是景深来让我们看到相应的一些简单效果，在设置perspective属性时距离一定要比元素大，否则元素效果看不到全部；我们也可以通过调整perspective-origin来设置视角的位置，值为X，Y；

---

手机自身已经处于3D的空间当中，所以手机有一个坐标系，来让我们更好的实现一些3D效果，手机正面朝向我们的方向是Z轴也叫做gamma，侧面的横向方向是X轴也可以称为beta，手机正面的纵向方向是Y轴也可以称为alpha；通过以下几个属性我们可以获取设备的一些信息：
1. deviceorientation:该属性可以是我们获得设备的物理方向信息，表示为一系列本地左边西的旋角；

```
window.addEventListener("deviceorientation",
    function(event){
        //处理event.alpha、event.beta、event.gamma
        }
    ,true)
    // 手机上这些值得闪动频率很高，所以在使用时要进行值的稀释;
    // 同时这些值得使用是有一定限制的：
    // Z轴为轴，alph的作用域为(0，360)。
    // X轴为轴，beta的作用域为(-180，180)。
    // Y轴为轴，gamma的作用域为(-90，90)
```
2. devicemotion：获取设备的加速信息；
```
window.addEventListener("devicemotion",
        function(event){
            // 处理event.acceleration
            // x(y,z):设备在X(y,z)方向上的移动加速度值
            // event.accelerationIncludingGravity
            //考虑了重力加速度后设备在X(y,z)方向上的移动加速度值;
            // event.rotationRate
            // alpha,beta,gamma:z设备绕x,y,z轴旋转的角度
        }
    ,true)
```
3. compassneedscalibration：用来通知web站点使用罗盘信息校准上面的事件；
```
window.addEventListener("compaddneedscalibration",
        function(event){
            alert('您的罗盘需要校准')；
            event.preventDefault();
        }
    ,true)
```