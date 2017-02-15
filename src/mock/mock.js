/**
 * Created by mayako on 2017/2/4.
 */
import Mock from 'mockjs';

export default function () {
  Mock.mock('http://img','get', function(options){

     return {'result':{
       imgList:
       [
        {
          'name'    : '@name',
          'src': 'http://localhost:8081/ffa/src/assets/i/img_2748.png'
        },
       {
         'name'    : '@name',
         'src': 'http://localhost:8081/ffa/src/assets/i/img_2749.png'
       }
      ],
       title:'[国家地理]无锡万象城站',
       titleInfo:'上海浦东新区xxxxxx',
       days:'36天后结束',
       ticket:[{
         title:'学生票',
         titleContent:'祖国的花朵？？',
         titlePrice:'36'
       },{
         title:'成人票',
         titleContent:'祖国的花朵？？',
         titlePrice:'48'
       }],
       price:'36'
  }}

  });
  Mock.mock('http://getlist0','get',{

    'result|10':[
      {
        'name'    : '@name',
        'date|1-364': 1,
        'color'    : '@color',
        'sta' : 0
      }
    ]

  });
  Mock.mock('http://getlist1','get',{

    'result|10':[
      {
        'name'    : '@name',
        'date|1-364': 1,
        'color'    : '@color',
        'sta' : 1
      }
    ]

  });
  Mock.mock('http://getlist2','get',{

    'result|10':[
      {
        'name'    : '@name',
        'date|1-364': 1,
        'color'    : '@color',
        'sta' : 2
      }
    ]

  });
  Mock.mock('http://getsupport1','get',{

    'result|15':[
      {
        'name'    : '@name',
        'date|1-364': 1,
        'color'    : '@color',
        'sta' : 1
      }
    ]

  });
}

