<template>
    <div class="container" style="padding-top:15px">
        <div class="row">
            <div class="col-sm-4">

                <div class="card" style="width: 18rem;">
                    <img style="height: 100px; width: 100px" class="card-img-top" :src="randomJoke.iconUrl"
                         alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text" v-text="randomJoke.value"></p>
                    </div>
                </div>

            </div>

            <div class="col-sm-4">
                <button @click="fetchRandomJoke" class="btn btn-primary">get new joke</button>
            </div>
            <div class="col-sm-4">
                <div class="col-sm-6">
                    <label>Select category</label>
                </div>
                <div class="col-sm-6">
                    <input type="text"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import {store} from '.././store'


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
        // created() {
        //     this.fetchRandomJoke();
        // },
        beforeRouteEnter(to, from, next) {

            store.dispatch('fetchRandomJoke', next)


        }

    }

</script>

<style scoped>

</style>