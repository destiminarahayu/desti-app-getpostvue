<template>
<q-page class="flex flex-center">
  <div class="q-pa-md">
    <q-table
      title="DataProject"
      :data="data"
      :columns="columns"
      row-key="name"
      dark
      color="amber"
    />
  </div>
</q-page>
</template>
      

<style>
</style>

<script>
import Vue from 'vue'
import project from"../api/project/index";

export default {
  data () {
    return {
      columns: [
        {
          name: 'ID',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          sortable: true
        },
        {
          name: 'nameProject',
          required: true,
          label: 'Project Name',
          align: 'left',
          field: row => row.projectName,
          sortable: true
        },
        {
          name: 'capacity',
          required: true,
          label: 'Capacity',
          align: 'left',
          field: row => row.capacity,
          sortable: true
        },
        {
          name: 'status',
          required: true,
          label: 'Project Status',
          align: 'left',
          field: row => row.status,
          sortable: true
        },
        {
          name: 'paymentStatus',
          required: true,
          label: 'Payment Status',
          align: 'left',
          field: row => row.paymentStatus,
          sortable: true
        },
        {
          name: 'createAt',
          required: true,
          label: 'Timestamp',
          align: 'left',
          field: row => row.createAt,
          sortable: true
        },
        
      ],
      data: []
    }
  },

  beforeCreate(){
      let self = this

      project.getAllProject(window).then(function (datas){
          return datas
      }).then(function(res){
          console.log(res)
          self.data = res
      }).catch(function(err){
          console.log(err)
      })
  }
}
</script>