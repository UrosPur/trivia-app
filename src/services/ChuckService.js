import ChuckClient from 'chucknorris-io';


class ChuckService{

    constructor(){

        this.client = new ChuckClient

    }

    getRandomeJoke(category = ''){

        return this.client.getRandomJoke(category)

    }

    // getJokeCategories(){
    //
    //     return this.client.getJokeCategories()
    //
    // }

}



const chuckService = new ChuckService();

// export with renaming
export { chuckService as ChuckService }