多图上传</br>
注意事项:</br>
1.由于目前部分浏览器更甚是移动端浏览器不够支持 New Blob ，导致需要转成base64后再转回[object blob]进行提交。</br>
2.删除的时候注意先后顺序，先删blob，在remove图片。</br>
3.如果在移动端出现图片旋转情况，可参考https://github.com/think2011/localResizeIMG/wiki/2.-参数文档</br>
</br>
12月1日后记:</br>
很尴尬,上述方法其实过于累赘，笔者走了条弯路。如果是可以识别files文件的后台完全可以用files方式传输。该方法写在post.js中。index.html的canvs方法继续保留;便于大家发现问题。。。
