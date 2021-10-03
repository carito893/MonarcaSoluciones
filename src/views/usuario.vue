export <template>
  
</template>

<script>
export default {
    data() {
        return {
            beneficios: []
        }
    },
created() {

},
methods: {
    listarBeneficios(){
        this.axios.get('/beneficios')
        .then(res=>{
            this.beneficios=res.data;

        })
        .catch(e=>{
            console.log(e.response);

        })
    }
}
}

</script>

<style>

</style>