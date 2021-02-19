<template>   
     <div>
        <h1>상세 내용</h1>
        <div>
            <div v-for="(user, index) in users" :key="index">
                <li>{{user.id}}</li>
                <li>{{user.name}}</li>
                <li>{{user.year}}</li>
                <li>{{user.director}}</li>
                <li>{{user.poster}}</li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    created(){
        this.$http.get('/api/v1/test')
        .then((res) => {
            return res.data
        })
        .then((data) => {
            this.users = data;
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
</script>