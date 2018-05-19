<template>
    <div>
        This is trivia appp
        <!--{{trivias }}-->

        <ul v-for="trivia in trivias"
            :key="trivia.id"
            @click="toggleTrivia(trivia.id)"

        >
            <li>{{ trivia.question}}</li>

        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'


    export default {
        name: 'TriviaApp',

        created() {
            this.fetchTrivias()
        },

        data() {

            return {

                selectedTraviasIds: []
            }

        },

        computed: {
            ...mapGetters({
                trivias: 'getTrivias'


            })


        },

        methods: {
            ...mapActions([
                'fetchTrivias'

            ]),

            toggleTrivia(triviaId) {

                let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId)

                let isSelectedTriviasIds = this.selectedTrivias

                if (isSelectedTriviaId) {
                    return this.selectedTriviasIds.splice(triviaIdIndex, 1)
                }
                this.selectedTriviasIds.push(trivia.id);
            }
        }


    }
</script>
