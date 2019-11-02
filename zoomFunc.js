
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var convertData2 = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = normalGeoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    
        
  
        myChart.on("georoam",function(params){
            
            console.log(params);
            console.log(myChart.getOption().series[0].data);
           // console.log(myChart.getOption().geo[0].zoom);
           zoomFunc();
           
        })



function zoomFunc(){
    if(myChart.getOption().geo[0].zoom>=1.3){
        console.log(typeof myChart.getOption().series[0].data);
        myChart.setOption(
            {   
                series: [
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        roam:true,
                        symbolSize: 4,
                        data: convertData(dataArr),
                        label:{
                            show:true,
                            position:"top",
                            distance:2,
                            formatter: '{b}',
                            color:"blue",
                        }
                    }
                ]
}
        );
    }else{
        myChart.setOption(
            {   
                series: [
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        roam:true,
                        symbolSize: 8,
                        data: convertData2(normalDataArr),
                        label:{
                            show:false,
                        }
                    }
                ]
}
        );
    }
};