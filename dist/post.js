var blobarry = [];
  
    
$("#inputImage").change(function(){
	var str="";
	for(var i=0;i<this.files.length;i++){
		str += "<img class='image'  src=" + window.URL.createObjectURL(this.files[i]) + ">"
		var file = this.files[i];
		blobarry.push(file);
		console.log(blobarry);
		//formData.append('file', file);
	}
	$(".AddBox").append(str);
	 imgclick();
})
//删除图片
function imgclick(){
    $('.image').unbind('click').bind('click',function(){
        if(confirm("确定删除？"))
    {
        blobarry.splice($('.image').index(this),1);
        $(this).remove();
        console.log(blobarry);
     }
    else
    {
      //alert("你按了取消，那就是返回false");
    }
})
}

$(".input-sure").click(function(){
	var formData = new FormData(); 
	for(var i=0;i<blobarry.length;i++){
        formData.append('file', blobarry[i],'image.png');
        console.log(blobarry[i]);
    }  
	$.ajax({
        url: 'http://192.168.1.132/SwiftTTZ/api/User/UpdateForImage',
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', "54FA9B7AEA021B3A7DCBF9758062C524EA3F6E67DABE8DB16F8254023B3C68BA41BD44E602287B9EE340045E42273BBDB2B13FFC70D304EB5C2B7C857EE3F2B2")
        },
        success: function() {
            alert("success")
                //sessionStorage.removeItem("topimg");
                //location.href="User-mg.html";
        },
        error: function() {
            console.log('Upload error');
        }
    });
})