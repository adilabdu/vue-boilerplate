import {useAuthenticationStore} from "@/composables/useAuthenticationStore.js";
import router from "@/router/index.js";

export default class Error {
    constructor(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this.status = error.response.status;

            switch (true) {
                case 399 < error.response.status < 500:
                    // Server responded with a client error
                    this.data = error.response.data;
                    // Clear user data if error is 401
                    router.push({ name: 'homepage' }).then(() => useAuthenticationStore().removeUser())
                    break;
                case error.response.status > 499:
                    // Server responded with server error
                    this.data = {
                        message: 'Something went wrong. Please try again later.'
                    };
                    break;
                default:
                    this.data = {
                        message: 'Problem with redirecting your request. Please try again later.'
                    }
                    break;
            }
        }
        else if (error.request) {
            // The request was made but no response was received
            this.status = 500;
            this.data = {
                message: 'The server could not complete your request. Please try again later.'
            }
        }
        else {
            // Something happened in setting up the request that triggered an Error
            this.status = 400;
            this.data = {
                message: 'Bad request. Please try again later.'
            }
        }
    }

    notify() {
        alert(`(Error ${this.status}) ${this.data.message}`)
    }
}