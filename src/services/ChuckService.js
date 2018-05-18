import ChuckClient from 'chucknorris-io';


class ChuckService{

    constructor(){

        this.client = new ChuckClient

    }

    getRandomeJoke(){

        return this.client.getRandomJoke()

    }

}



const chuckService = new ChuckService();

// export with renaming
export { chuckService as ChuckService }