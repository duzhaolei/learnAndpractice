#### Linux基础命令
###### Linux命令对于命令大小写是有区分的
1. ls、dir 查看当前目录下所有的文件及文件夹
2. ls -l 查看当前文件下文件或文件夹的长格式目录
```
权限 子文件数量 所属用户 文件(文件夹大小固定)大小 x月 x xx:xx 文件夹或文件
```
![](https://github.com/duzhaolei/learnAndpractice/blob/master/wm.png?raw=true)
![](https://github.com/duzhaolei/learnAndpractice/blob/master/linux%E7%9B%AE%E5%BD%95%E5%90%8D%E8%AF%A6%E8%A7%A3.png?raw=true)
3. ls -a显示当前文件夹下的隐藏文件
4. 切换目录  cd+空格+要切换的文件目录 
cd+'..' 回退到上一级目录
5. 创建目录 mkdir+目录名 目录名可为纯目录名也可以为路径加要创建的目录名如：'/usr/etc/newFile'
6. 复制文件 cp+要复制的文件名或文件路径+复制后的文件名或要复制到的目标路径及复制后的文件名
7. 复制目录 cp+-R+要复制的目录+复制后的目录名
8. pwd 获取当前目录的路径
9. 删除命令 rm+要删除的文件 rm -r+要删除的目录名 rm -rf 加文件路径-->删除文件或文件目录  r递归f强制
10. touch 文件名   新建文件 
11. rmdir 目录名 删除空目录
12. mv 要移动的文件的路径 目标文件夹的路径 （移动文件）