#### 单元测试
1. 目的:单元测试可以让开发者明确知道代码结果;
2. 原则:单一职责,接口抽象,层次分离;
3. 断言库:保证最小单元是否正常运行检测方法;
4. 测试风格:测试驱动开发(Test-Driven Development,TDD)、(Behavior Driven Development,BDD)行为驱动开发均是敏捷开发方法论。TDD关注所有的功能是否是否被实现(每一个功能都必须有对应的测试用例)，suite配合test利用assert('tobi' == user.name);BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例，
###### 单元测试框架
1. better-assert(TDD断言库Github 254star 21fork)
2. should.js(BDD断言库Github 2725star 208fork)
3. expect.js(BDD断言库Github 1945star 199fork)
4. chai.js(TDD、BDD双模Github 5853star 535fork)
5. Jasmine.js(BDD Github 13996star 2064fork)
###### 自动化单元测试
- karma 自动化runner集成PhantomJS无刷新
- npm install -g karma 
- npm install karma-cli --save-dev
- npm install karma-chrome-laucher --save-dev
- npm install karma-phantomjs-launcher --save-dev
- npm install karma-mocha --save -dev
- npm install karma-chai.js
###### 报告和单测覆盖率检查
- npm install karma-coverage --save-dev
###### 压力测试
对网络接口做压力测试需要检查的几个常用指标有:吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力；

PV网站当日访问人数UV当日独立访问人数。PV每天几十万甚至上百万就需要考虑压力测试。换算公式QPS=PV/t--例:1000000/10*60*60=27.7(1000000万请求集中在10个小时，服务器每秒处理27.7个请求)

常用的压力测试工具是ab、siege、http——load；
###### 安全漏洞检查
- XSS：攻击全称跨站脚本攻击，是为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS，XSS是一种在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。
- SQL：SQL注入攻击（英语：SQL injection），简称SQL攻击或注入攻击，是发生于应用程序与数据库层的安全漏洞。 简而言之，是在输入的字符串之中注入SQL指令，在设计不良的程序当中忽略了字符检查，那么这些注入进去的恶意指令就会被数据库服务器误认为是正常的SQL指令而运行，因此遭到破坏或是入侵。
- CSRF：跨站请求攻击，简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行。这利用了web中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。
###### 用户真实性检查
- selenium-webdriver
- protractor selenium-standalone
- http://webdriver.io/ WEBDRIVERI/O
- 冒烟测试SmokeTest自由测试的一种，找到一个BUG开发修复，然后专门针对这个BUG，优点节省时间防止build失败。缺点是覆盖率极低。
- 回归测试，修改一处对整体功能全部测试，一般配合自动化测试；

###### JavaScript Lint&Hint
1. 目的：检测JavaScript代码标准
2. 原因：JavaScript代码诡异，保证团队代码规范
3. lint：http://www.jslint.com/
4. hint：http://www.kshint.com/
5. 搭配自动化任务管理工具完善自动化测试grunt-jshint、grunt-jslint。