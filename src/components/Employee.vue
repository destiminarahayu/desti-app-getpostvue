<template>
  <q-page class="flex flex-center">
      <p>{{employeeData}}</p>
      <div class="row">
        <div class="col-sm-6">
          <p> ini firstname </p>
          <button class="primary" @click="getFirstNameOnly()">Firstname</button>
          <div>
            <p>{{firstNameDataOnly}}</p>
          </div>
          <div class="col-sm-6">
            <p> ini lastname</p>
            <button class="primary" @click="getLastNameOnly()">Lastname</button>
          <div>
             <p>{{lastNameDataOnly}}</p>
          </div>
       </div>
      </div>
      </div>
    <button class="primary" @click="createNewEmployee()">new eployee</button>
  </q-page>
</template>

<style>
</style>

<script>
import Vue from 'vue'
import employee from"../api/employee/index";

export default {
  name: 'Employee',

  data () {
    return {
        employeeData:{},
        totalEmployee:0,
        nameEmployee:'desti',
        firstNameDataOnly:[],
        lastNameDataOnly:[],
        param:{
              "firstname": "mantan",
              "lastname": "terindah",
              "email": "mt@gmail.com",
              "phone": "09876654"
        }
    }
  },

  methods:{
    getFirstNameOnly(){
      const self = this;
      employee.getEmployee(window).then(function(datas){
        console.log('ini data nama depan', datas)
        for(let i=0; i<datas.length; i++){
          self.firstNameDataOnly.push(datas[i].firstname)
        }
        return datas;
      }).catch(function(err){
        console.log(err)
      });
    
  },
    getLastNameOnly(){
      const self = this;
      employee.getEmployee(window).then(function(datas){
        console.log('ini data nama belakang', datas)
        for(let i=0; i<datas.length; i++){
          self.lastNameDataOnly.push(datas[i].lastname)
        }
        return datas;
      }).catch(function(err){
        console.log(err)
      });
    },
    createNewEmployee(){
      const self = this;
      employee.postEmployee(window, self.param).then(function(result){
        return result;
      }).catch(function(err){
        console.log(err)
      });
    }
  },

  beforeCreate(){
      let self = this

      employee.getEmployee(window).then(function (datas){
          return datas
      }).then(function(res){
          console.log(res)
          self.employeeData = res
      }).catch(function(err){
          console.log(err)
      })
  }
}
</script>