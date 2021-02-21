const INCREASE_NUM = "increaseNum";
const CHANGE_NAME = "changeName"
export default {
    [INCREASE_NUM] (state , id){
        state.num = state.num + 1 
    },

    [CHANGE_NAME] (state, id){
        state.name = id
    }


}