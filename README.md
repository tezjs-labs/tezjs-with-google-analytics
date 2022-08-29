#  Google Analytics with tezjs

- Create a new fresh project with tezjs and install required node modules 

- Install add **analytics** and **@analytics/google-analytics** node modules with npm

```
  npm install  analytics
  npm install  @analytics/google-analytics
```

- Now add the plugins directory under your project's root directory

- Then make a new index.ts file under the plugins directory
  ``` plugins/index.ts ```


- Import installed module **analytics** and **@analytics/google-analytics** in index.ts

```
  import Analytics from 'analytics'  
  import google Analytics from '@analytics/google-analytics'
```

- and add the below code in index.ts

 ```
   const analytics =  Analytics({
    app: 'you application name',
    plugins: [
      googleAnalytics({
        measurementIds: ["Your measurementIds"]
      })
    ]
  })

 ```
update measurementIds of google analytics.


**Note:** You can find your measurementIds in google analytics under admin->Data Streams->click on your site-> MEASUREMENT ID under Web stream details


 - export one default function with one parameter 

```  
  export default function(vue:any){
    vue.config.globalProperties.$analytics = analytics
    vue.use(vue.config.globalProperties, '$analytics')
  } 
 ```  

In the above function, assign analytics property with a global property so in a whole application you can
use it whenever you want.