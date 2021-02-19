
const INCREASE_NUM_ACTION = "increaseNumAction"
const CHANGE_NAME_ACTION = "changeNameAction"
const CHANGE_NAME_ACTION2 = "changeNameAction2"
const ENROLL_USER = "enrollUser"
import axios from 'axios'

export default {

    [INCREASE_NUM_ACTION] (context) {
       setTimeout( () => {
        context.commit('increaseNum')
       }, 2000)
    },

    [CHANGE_NAME_ACTION] (context) {
        setTimeout(() => {
            return axios.get('/api/v1/user/change')
        .then((res) => {
            return res.data
        })
        .then((data) => {
            context.commit('changeName', data.name)
        })
        .catch((err) => {
            console.log(err);
        })
        }, 2000);
    },

    [CHANGE_NAME_ACTION2] (context) {
        
    return axios.get('/api/v1/user/change2')
        .then((res) => {
            return res.data
        })
        .then((data) => {
            context.commit('changeName', data.name)
        })
        .catch((err) => {
            console.log(err);
        })
    },
 
    [ENROLL_USER] (context, reqData) {
        return axios.post('/api/v1/user/enroll', reqData)
        .then((res) => {
            return res.data
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


}