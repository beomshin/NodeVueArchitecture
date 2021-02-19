<template>
    
    <div>

        <h1>My Name is {{this.$store.state.name}}</h1>
        <h2>age is {{age}}</h2>
        <h3>gender is {{gender}}</h3>

        <input v-model="this.$store.state.name" type="text">

        <br>
        <input v-model="age" type="text">

        <br/>
        <select v-model="gender">
            <option value="M">M</option>
            <option value="F">F</option>
        </select>

        <button @click="changeName()">click</button>
        <button @click="changeName2()">click2</button>

        <br/>
        ID : <input v-model="id" type="text" />
        <br/>
        Pw : <input v-model="pw" type="password" />
        <br/>
        <button @click="enrollUser()">submmit</button>
        
        
    </div>

    

</template>

<script>


export default {

    data (){
        return {
            age : undefined,
            gender : 'M',
            id : '',
            pw : ''
        }
    }
    ,created() {
        this.$http.post('/api/v1/user', {
            name : 'whon'
        })
        .then((res) => {
            return res.data
        })
        .then((data) => {
          this.$store.state.name   = data.name;
        })
        .catch((err) => {
            console.log(err);   
        })
    },
    methods: {
        changeName(){
            this.$store.dispatch('changeNameAction');
        },
        changeName2(){
            this.$store.dispatch('changeNameAction2');
        },
        enrollUser(){
            this.$store.dispatch('enrollUser', this._data)
            .then(() => {
                this.$router.push('/');
            });
        }
    },
    
    
}
</script>