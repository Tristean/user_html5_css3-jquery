$(function() {
    var $all = $("#all");
    var user_name = $all.find("input[name='user_name']");
    var user_password = $all.find("input[name='user_password']");
    var sure_sure_password = $all.find("input[name='sure_sure_password']");
    var user_email = $all.find("input[name='user_email']");
    var user_date = $all.find("input[name='user_date']");
    $all.find(".save").on("click", function() {
        console.log(user_name)
        if (user_name.val() == '' || user_name.val() == null) {
            alert("请输入用户名！")
            return false;
        } else if (user_name.val().length < 6 || user_name.val().length > 20) {
            alert("用户名长度必须在6到20字符之间！")
            return false;
        } else if (user_password.val() == "" || user_password.val() == null) {
            alert("请输入密码！")
            return false;
        } else if (user_password.val().length < 6 || user_password.val().length > 20) {
            alert("密码长度必须在6到20字符之间！")
            return false;
        } else if (sure_sure_password.val() == '' || sure_sure_password.val() == null) {
            alert("请输入确认密码！")
            return false;
        } else if (user_password.val() != sure_sure_password.val()) {
            alert("两次密码输入不一致！")
            return false;
        } else if (user_email.val() == '' || user_email.val() == null) {
            alert("请输入电子邮箱")
            return false;
        }
    })
})
// <!-- unction imgPreview(fileDom){
//     //判断是否支持FileReader
//     if (window.FileReader) {
//         var reader = new FileReader();
//     } else {
//         alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
//     }

//     //获取文件
//     var file = fileDom.files[0];
//     var imageType = /^image\//;
//     //是否是图片
//     if (!imageType.test(file.type)) {
//         alert("请选择图片！");
//         return;
//     }
//     //读取完成
//     reader.onload = function(e) {
//         //获取图片dom
//         var img = document.getElementById("preview");
//         //图片路径设置为读取的图片
//         img.src = e.target.result;
//     };
//     reader.readAsDataURL(file);
// } -->