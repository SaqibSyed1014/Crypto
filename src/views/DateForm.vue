<template>
  <form >
    <div class="dateForm-wrapper my-5">
      <div class="form-group row my-3">
        <label for="StartingDate" class="col-4 col-form-label text-center">Starting Date</label>
        <div class="col-7">
          <input v-model="startingDate" class="form-control" type="datetime-local" id="StartingDate">
        </div>
      </div>
      <div class="form-group row my-3">
        <label for="EndingDate" class="col-4 col-form-label text-center">Ending Date</label>
        <div class="col-7">
          <input v-model="endingDate" class="form-control" type="datetime-local" id="EndingDate">
        </div>
      </div>
      <h4 class="text-center errorMsg" v-if="error">Please Fill the Form!</h4>
      <div class="text-center my-4">
        <button type="button" @click="submitForm" class="btn btn-dark">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "DateForm",
  data(){
    return{
      startingDate: '',
      endingDate: '',
      currencyId: '',
      error: false,
    }
  },
  methods: {
    submitForm(){
      if(this.startingDate == '' || this.endingDate == ''){
        this.error = true
        return false
      }
      else {
        this.$router.push('/chart')
        const used=localStorage.getItem('is_account_input_used')
        const account_id=localStorage.getItem('account_id')
        if( used == true){
          console.log('dispatching updateInput')
          this.$store.dispatch('updateInput', {
            acc_id: account_id,
            startingDate: this.startingDate,
            endingDate: this.endingDate,
            currencyId: this.currencyId
          })

        }
        else {
          this.currencyId = localStorage.getItem('currency_id')
          console.log('dispatching sendingFormChart')
          this.$store.dispatch('sendingFormChart', {
            acc_id: account_id,
            startingDate: this.startingDate,
            endingDate: this.endingDate,
            currencyId: this.currencyId
          })

        }
      }
    }
  }
}
</script>

<style scoped>

</style>