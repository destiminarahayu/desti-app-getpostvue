import VueResource from 'vue-resource'
import vue from 'vue'
import {getApiNoAuth} from './../utils'

vue.use(VueResource)
export default {
    getAllProject (window){
        return getApiNoAuth().get('Projects')
        .then (function(response){
            console.log(response)
            return response.data
        }).catch (function(err) {
            console.log(err)
        })
    },
}