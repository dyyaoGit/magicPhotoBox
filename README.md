# magicPhotoBox
This is a style plugin, you can use it to use many style went your photo number change;It will change style in change;

# 动态改变盒子
最近在做一个租房平台的需求。需求大致是，房东上传不同的图片，显示效果要根据图片的数量改变；因此，写了这个插件。


## 用法


```javascipt

<body>
    <div id="J_photoBox"></div>
</body>
<script src="./static/js/photoBox.min.js"></script>
<script>
    var arr = ['./static/imgs/4_06.jpg', './static/imgs/4_06.jpg', './static/imgs/4_06.jpg']
    var arr2 = ['./static/imgs/4_06.jpg', './static/imgs/4_06.jpg', './static/imgs/4_06.jpg', './static/imgs/4_06.jpg']
    new photoBox(arr2, 'J_photoBox')
</script>
```

实现的效果参考static文件夹内的demand;
使用时，可根据不同的图片数量传入图片数组；以及id;目前该插件会自动为容器添加1050px的宽度和20px的padding；
样式文件不需要引入。样式将会自动插入。
