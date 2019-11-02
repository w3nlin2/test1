/**
 * Created by ASUS on 2018/8/30.
 */
function drag1(obj){ //relative��λ top��0��left��0��
    obj.style.position="relative";
    obj.style.left=0+"px";
    obj.style.top=0+"px";
    obj.onmousedown=function(e){
        var This=this;
        var e=e||window.event;
        var currentX=e.clientX;
        var currentY=e.clientY;
        var difX=currentX-this.offsetLeft;
        var difY=currentY-this.offsetTop;
        if(this.setCapture){  //Ϊ�˼���IE6�϶���������ֵļ�������
            this.setCapture()
        }
        document.onmousemove=function(e){
            var e=e||window.event;
            var currentX2=e.clientX;
            var currentY2=e.clientY;
            This.style.left=currentX2-difX+"px";
            This.style.top=currentY2-difY+"px";
        };
        document.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
            if(This.releaseCapture){ //Ϊ�˼���IE6�϶���������ֵļ������⣬������.setCapture�ɶԳ���
                This.releaseCapture()
            }
        }
        return false;
    }
}
function drag2(obj){ //relative��λ top��0��left��0��
	var detailsBac=document.getElementsByClassName("detailsBac")[0];
	var details=document.getElementsByClassName("details")[0];
    obj.onmousedown=function(e){
        var This=this;
        var e=e||window.event;
        var currentX=e.clientX;
        var currentY=e.clientY;
        var difX=currentX-this.offsetLeft;
        var difY=currentY-this.offsetTop;
        if(this.setCapture){  //Ϊ�˼���IE6�϶���������ֵļ�������
            this.setCapture()
        }
        document.onmousemove=function(e){
            var e=e||window.event;
            var currentX2=e.clientX;
            var currentY2=e.clientY;
            This.style.left=currentX2-difX+"px";
            This.style.top=currentY2-difY+"px";
			
			//��ײ���
			console.log(details.offsetHeight);
			if(details.offsetLeft<0){This.style.left=0+"px";}
			if(details.offsetLeft>=detailsBac.offsetWidth-200){This.style.left=detailsBac.offsetWidth-200+"px";}
			if(details.offsetTop<0){This.style.top=0+"px";}
			if(details.offsetTop>=detailsBac.offsetHeight-details.offsetHeight){This.style.top=detailsBac.offsetHeight-details.offsetHeight+"px";}
        };
        document.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
            if(This.releaseCapture){ //Ϊ�˼���IE6�϶���������ֵļ������⣬������.setCapture�ɶԳ���
                This.releaseCapture()
            }
        }
        return false;
    }
}