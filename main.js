/*
    步骤总结:
    1.获取div容器，置入echarts.init，得到myCharts，初始化
    2.写入口函数:将地图数据geojson的url作为形参置入 
    3.注册地图:echarts.registerMap('test', chinaJson);
    4.圆点标注的映射函数
    5.option配置
    6.js动态设置数据:myChart.setOption(option, true); 
    7.补充:还有两大块圆点标注的大量数据，因为数据量太多，所以写在了外部js变量中
*/

//1-初始化echarts
var oMain = document.getElementById("main");
var myChart = echarts.init(oMain);

//2-入口函数 //获取地图数据，以参数形式传入函数 
$.get('newMap01.json', function (chinaJson) {
    //3-注册地图 //将数据注册到geo地图，"test"与option里的geo的map值对应
    echarts.registerMap('test', chinaJson);  
    
//以下注释是网络素材的写法，可以这么写也可以不这么写    
//option = null;

/*这里实际还有一块内容:写在了外部js文件中
--normalGeoCoordMap变量，这个变量已经写在了外部js文件中，散点，初始的各个镇的标注数据
--对象:var normalGeoCoordMap={"柳园": [-136825586927.04608,157001438373.43805],...}这种形式*/

//4-标注映射函数
/* 标注数据映射函数:将坐标与值对应并映射在地图上
--这个函数是网络素材，不是自己写的
--如果要修改，只要修改normalGeoCoordMap这个位置的数据名就可以 */
var convertData = function (data) {
    var res = [];for (var i = 0; i < data.length; i++) {var geoCoord = normalGeoCoordMap[data[i].name];
        if (geoCoord) {res.push({name: data[i].name,value: geoCoord.concat(data[i].value)});}}return res;};

//5-option配置
//option:echarts配置
option = {
    //tooltip:悬浮框
    tooltip: {trigger: 'item',formatter: function (params) {return params.name;}},
    /*geo:地图配置
    --map:地图名 与入口函数下的地图注册里的第一个参数相对应
    --roam:缩放 //label区域块文字(默认黑色) //itemstyle:设置边框颜色、边框大小 //其他参数查官方文档 */
    geo: { map: 'test', roam:true,layoutCenter: ['50%', '50%'],layoutSize: 700,aspectScale:1,label:{show:true},
    itemStyle:{borderColor:"white",borderWidth:4}},
    
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            
            /*data:存放所有的标注数据,效果:将数据呈现出标注
            --convertData为上面那个函数 
            --normalDataArr为变量，这个变量已经写在了外部js文件中，
            --数组:var normalDataArr=[{name: "游洋镇", value: 110},...] */
            data: convertData(normalDataArr), 
            //symbolSize:圆点标注大小
            symbolSize: 8,
            
            //label显示每一个区域块的蓝色文字(默认蓝色),上面geo的也有一个label(默认黑色)
            /*label:{show:true,position:"right",distance:20,formatter: '{b}',color:"blue",}*/
        }
    ]
};

//以下注释是网络素材的写法，可以这么写也可以不这么写
/*if (option && typeof option === "object") {
    myChart.setOption(option, true);
}*/

//6.最后一步:js动态设置数据
//myChart.setOption:以js的形式动态设置echarts数据,与之相对应的myChart.getOption(),以js的形式动态获取echarts数据
myChart.setOption(option, true);

});






