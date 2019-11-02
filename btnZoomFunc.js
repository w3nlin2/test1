$('<button class="inc" style="position:absolute;right:0;bottom:60px">+</button><button class="dec" style="position:absolute;right:0;bottom:0">-</button>').appendTo("div#main");
            
            $("button").on("click",function(){
                if($(this).hasClass("inc")){  
                    //console.log(myChart.getOption().geo[0].zoom);
                    var zVal=myChart.getOption().geo[0].zoom;
                    zVal+=0.2;
                    myChart.setOption({geo:{zoom:zVal}});
                    zoomFunc();
                   }
                else if($(this).hasClass("dec")){
                    var zVal=myChart.getOption().geo[0].zoom;
                    if(zVal>0.2){zVal-=0.2;}
                    myChart.setOption({geo:{zoom:zVal}});
                    zoomFunc();
                    }
                    
            })