myChart.on('click', function (params) {
        console.log(params.event.topTarget.z2);
    //点击文字区域
    if(params.event.topTarget.z2==10||params.event.topTarget.z2==11||params.event.topTarget.z2==101||params.event.topTarget.z2==100){
        console.log(params);
     
        if($("ul.ulCla")!=undefined||$("ul.ulCla")!=null){$("ul.ulCla").remove()}

        var detailsBac=document.createElement("div");
        detailsBac.className="detailsBac";
        detailsBac.style.width="100%";
        detailsBac.style.height="100%";
        detailsBac.style.position="absolute";
        detailsBac.style.top=0;
        detailsBac.style.left=0;
        detailsBac.style.zIndex=100;
        detailsBac.style.background="rgba(0,0,0,0)";

        var details=document.createElement("div");
        details.className="details";
        details.style.width="200px";
        details.style.textAlign="center";
        details.style.position="absolute";
        details.style.color="white";
        details.style.top=params.event.offsetY-20+"px";
        details.style.left=params.event.offsetX+20+"px";
        details.style.background="rgba(0, 0, 0,0.8)";
        details.style.borderRadius="5px";
        detailsBac.appendChild(details);

        var oP1=document.createElement("p");
        oP1.innerHTML=`<span>人口 :</span>&nbsp;<span>500.000</span>万`;
        details.appendChild(oP1);

        var oP2=document.createElement("p");
        oP2.innerHTML=`<span>GDP :</span>&nbsp;<span>90.000</span>万亿元`;
        details.appendChild(oP2);

        var oDiv=document.createElement("div");
        oDiv.className="unknownButton";
        oDiv.innerHTML=`<button>button1</button><button>button2</button>`;
        details.appendChild(oDiv);

        var oDelete=document.createElement("span");
        oDelete.className="iconfont icon-shanchu delete";
        details.appendChild(oDelete);
        oDelete.onclick=function(){
            detailsBac.remove();
        }

        var oMain=document.getElementById("main");
        oMain.appendChild(detailsBac);
        
        drag2(details);
        
    }










    
                                                     
        
             });




             myChart.on('mousedown', function (params) {

                //点击文字以外的区域
if(params.event.topTarget.z2==0||params.event.topTarget.z2==1){
    console.log(params);
    //console.log(params.event.target.style.fill);
    console.log(params.event.offsetX);
    console.log(params.event.offsetY);
    if(document.getElementsByClassName("ulCla")[0]!=undefined){
        document.getElementsByClassName("ulCla")[0].remove();
    }
    
 
    var oUl=document.createElement("ul");
    oUl.className="ulCla";
    
    oUl.style.width=160+"px";
    oUl.style.height=20+"px";
    oUl.style.borderRadius=5+"px";
    oUl.style.color="white";
    oUl.style.position="absolute";
    oUl.style.left=params.event.offsetX+"px";
    oUl.style.top=params.event.offsetY+"px";
    var oLi=document.createElement("li");
    oLi.style.textAlign="center";
    oLi.style.width=160+"px";
    oLi.style.boxShadow="0 0 2px 2px white inset"
    
    oLi.innerHTML="--可选颜色--";
    oUl.appendChild(oLi);

    var oDelete2=document.createElement("span");
        oDelete2.className="iconfont icon-shanchu delete";
        oDelete2.style.marginTop="-2px";
        oLi.appendChild(oDelete2);
        oDelete2.onclick=function(){
            oUl.remove();
        }

    oUl.onclick=function(event){
     

        if(oUl.children.length==1){
            var oLi1=document.createElement("li");
    oLi1.innerHTML="红";
    var oLi2=document.createElement("li");
    oLi2.innerHTML="橙";
    var oLi3=document.createElement("li");
    oLi3.innerHTML="黄";
    var oLi4=document.createElement("li");
    oLi4.innerHTML="绿";
    var oLi5=document.createElement("li");
    oLi5.innerHTML="青";
    var oLi6=document.createElement("li");
    oLi6.innerHTML="蓝";
    var oLi7=document.createElement("li");
    oLi7.innerHTML="紫";
    oLi1.onclick=oLi2.onclick=oLi3.onclick=oLi4.onclick=oLi5.onclick=oLi6.onclick=oLi7.onclick=function(event){
        
        window.zVal=1;
        var mapColor="";
        
        this.style.background="red";
        if(this.innerText=="红"){mapColor="red"}
        if(this.innerText=="橙"){mapColor="orange"}
        if(this.innerText=="黄"){mapColor="yellow"}
        if(this.innerText=="绿"){mapColor="green"}
        if(this.innerText=="青"){mapColor="cyan"}
        if(this.innerText=="蓝"){mapColor="blue"}
        if(this.innerText=="紫"){mapColor="purple"}
        //chart(val,mapColor);
        myChart.setOption({
            itemStyle:{
                emphasis:{label:{show:true,Color:"blue"}},
                areaColor:mapColor,
            }
        })
        

        document.getElementsByClassName("ulCla")[0].remove();
        window.event? window.event.cancelBubble = true : event.stopPropagation();
        event.preventDefault();
        return false;
    }
    oUl.appendChild(oLi1);oUl.appendChild(oLi2);oUl.appendChild(oLi3);
    oUl.appendChild(oLi4);oUl.appendChild(oLi5);oUl.appendChild(oLi6);
    oUl.appendChild(oLi7);
        }
    

   
    
}
    main .appendChild(oUl);
}    

             })

    