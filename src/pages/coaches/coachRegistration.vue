<template>
    <section>
        <base-card>
        <h2>Register as a coach now!</h2>
<coach-form @save-data="saveData"></coach-form>
</base-card>
    </section>
</template>

<script>
import coachForm from '../../components/coaches/coachForm.vue'

export default {
components:{
coachForm
},

methods:{
        saveData(data){
            debugger
            this.$store.dispatch('coaches/',data);
            debugger
            this.$router.replace('/coaches');
        }
}
}
</script>