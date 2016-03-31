    // 数字验证
    //     e: 校验内容
    //     不成功,返回 true,
    //     成功,返回 false
    function regNumber(e) {
        var reg =  /^[0-9]*$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 只能输入N位的数字
    //     e: 校验内容
    //     成功,返回 true,
    //     不成功,返回 false
    function regN(e,i) {
        if( e.length == i ) { return false; } else { return true; }
    };
    // 至少输入N位的数字
    //     e: 校验内容
    //     成功,返回 true,
    //     不成功,返回 false
    function regSN(e,i) {
        if( e.length >= i ) { return false; } else { return true; }
    };
    // InternetURL验证
    //     e: 校验内容
    //     不成功,返回 true,
    //     成功,返回 false
    function regHttp(e) {
        var reg = /^(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 身份证验证
    //     e: 校验内容(15~18)
    //     不成功,返回 true,
    //     成功,返回 false
    function regIDcard(e) {
        var reg =  /^\d{15}|\d{18}$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 邮箱验证
    //     e: 校验内容
    //     不成功,返回 true,
    //     成功,返回 false
    function regEmail(e) {
        var reg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 手机验证
    //     e: 校验内容
    //     不成功,返回 true,
    //     成功,返回 false
    function regPhone(e) {
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 用户名验证
    //  英文,数字 (4~40位)
    //     e: 校验内容
    //     不成功,返回 true,
    //     成功,返回 false
    function regName(e) {
        var reg = /^([a-zA-Z0-9]|[_]){4,20}$/;
        if( !reg.test(e) ) { return true; } else { return false; }
    };
    // 表单验证后,即刻弹出警告框
    // e:表单对象
    // color:警告框显示颜色
    //     可选颜色:   info ---蓝
    //                 success --- 绿
    //                 warning --- 橙
    //                 danger --- 红
    // title: 警告框 强调类型
    // info: 警告 内容
    function alertbox(e,color,title,info) {
        $(".alert").remove();
        var temp = "<div class='alert alert-"+color+" alert-dismissible fade in' role='alert'><a class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></a><strong>"+title+"</strong>"+info+"</div>";
        //$(e).parents(".form-group").append( String(temp) );
        var par = $(e).parents(".form-group");
        if ( par.hasClass("input-group") ) {
            par.parent().append( String(temp) );
        }else {
            par.append( String(temp) );
        }        
    };
    $(function () {
        $("input").focus(function() {
            $(this).parents(".form-group").find(".alert").remove();
        });
    })