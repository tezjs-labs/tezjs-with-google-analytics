import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'tezjs-with-google-analytics',
  plugins: [
    googleAnalytics({
      measurementIds: ["Your measurementIds"]
    })
  ]
})

export default function (vue: any) {
  vue.config.globalProperties.$analytics = analytics
  vue.use(vue.config.globalProperties, '$analytics')
}
