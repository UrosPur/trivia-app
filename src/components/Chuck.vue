<template>
    <div class="container" style="padding-top:15px">
        <div class="row">

            <div class="card" style="width: 18rem;">
                <img style="height: 100px; width: 100px" class="card-img-top" :src="randomJoke.iconUrl"
                     alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" v-text="randomJoke.value"></p>
                </div>
                <input class="form-control mb-2" type="text" placeholder="enter joke category"
                       @input="setCategory"
                />
                <button @click="getRanJoke" class="btn btn-primary">get new joke</button>
            </div>


        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import {store} from '.././store'


    export default {
        name: "Chuck",

        computed: {

            ...mapGetters({
                randomJoke: 'getRandomJoke'
            })
        },

        methods: {
            // ...mapActions([
            //     'fetchRandomJoke'
            // ]),

            getRanJoke(){


                store.dispatch('fetchRandomJoke', () => {})

            },

            ...mapMutations([

                'setJokeCategory'

            ]),

            setCategory(event) {

                console.log(event.target.value)

                this.setJokeCategory(event.target.value)


            }

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