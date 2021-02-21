<template>
    
    <v-app>
        <Test/>
    <div>
        <h1>My Name is {{this.$store.state.name}}</h1>
        <h2>age is {{age}}</h2>
        <h3>gender is {{gender}}</h3>
        <h4>{{num}}</h4>
        <v-text-field label="Name" hide-details="auto" v-model="this.$store.state.name" type="text" />

        <br>
        <v-text-field label="age" hide-details="auto"  v-model="age" type="text" />

        <br/>
        <v-col cols="6">
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
        <br/>
        <v-btn @click="changeName()">click</v-btn>
        <v-btn @click="changeName2()">click2</v-btn>
        <v-btn @click="goBack()">back</v-btn>
        <br/>
        ID : <v-text-field label="id" hide-details="auto" v-model="id" type="text" />
        <br/>
        Pw : <v-text-field label="pw" hide-details="auto"  v-model="pw" type="password" />
        <br/>
        <v-btn @click="enrollUser()">submmit</v-btn>


        <validation-provider rules="email|required||max:3" v-slot="{errors}" >
            <v-text-field name="email"  label="email"  v-model="email" type="text" /> 
            <span>{{ errors[0] }}</span>
        </validation-provider>
    
        
    </div>
    </v-app>
    

</template>

<script>

import { mapState } from 'vuex';

export default {
    
    data (){
        return {
            age : undefined,
            gender : 'M',
            email : '',
            todos : undefined,
            id : '',
            pw : '',
            select: { state: 'Florida', abbr: 'FL' },
            items: [
            { state: 'Florida', abbr: 'FL' },
            { state: 'Georgia', abbr: 'GA' },
            { state: 'Nebraska', abbr: 'NE' },
            { state: 'California', abbr: 'CA' },
            { state: 'New York', abbr: 'NY' },
            ],
        }
    },
    // created() {
    //     this.$http.post('/api/v1/user', {
    //         name : 'whon'
    //     })
    //     .then((res) => {
    //         return res.data
    //     })
    //     .then((data) => {
    //       this.$store.state.name   = data.name;
    //     })
    //     .catch((err) => {
    //         console.log(err);   
    //     })
    // },
    methods: {
        changeName(){
            this.$store.dispatch('changeNameAction');
        },
        changeName2(){
            this.$store.dispatch('changeNameAction2');
        },
        enrollUser(){

            this.$validator.validateAll().then( success => {
                if(success){
                    console.log("success");
                }else{
                    console.log("fail");
                }
            })

            this.$store.dispatch('enrollUser', this._data)
            .then(() => {
                alert("회원가입 성공");
                this.$router.push('/');
            });
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    computed: {
      ...mapState(['num']),
    },

    
}
</script>