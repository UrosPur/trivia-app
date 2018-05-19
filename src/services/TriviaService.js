import Axios from 'axios'


class TriviaService{

    constructor(){

        this.client = Axios.create({
            baseURL: 'http://jservice.io/api'
        })


    }

    getRandomeTrivias(){

        return this.client.get('random',{
            params:{
                count:30
            }
        })

    }

    // getJokeCategories(){
    //
    //     return this.client.getJokeCategories()
    //
    // }

}


 const triviaService = new TriviaService();


// export with renaming
export { triviaService as TriviaService }
