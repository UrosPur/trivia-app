<template>
    <div class="container" style="padding-top:15px">
        <div class="row">
            <div class="col-sm-8">
                {{ randomJoke.value }}
            </div>

            <div class="col-sm-4">
                <button class="btn btn-primary">get new joke</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'


    export default {
        name: "Chuck",

        computed: {

            ...mapGetters({
                randomJoke: 'getRandomJoke'
            })
        },

        methods: {
            ...mapActions([
                'fetchRandomJoke'
            ])

        },
        created() {
            this.fetchRandomJoke();
        }

    }

</script>

<style scoped>

</style>