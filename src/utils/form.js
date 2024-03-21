import http from './http/index.js'
import {ref} from "vue";
import Error from "./http/error.js"

export default class Form {
    data = ref({});
    error = ref({});
    constructor(data) {
        this.data.value = data;
    }

    async post(endpoint, data = this.data.value, config = {}) {
        try {
            return (await http.post(endpoint, data, config)).data
        } catch (e) {
            this.error.value = new Error(e);
        }
    }

    async patch(endpoint, data = this.data.value, config = {}) {
        try {
            return (await http.patch(endpoint, data, config)).data
        } catch (e) {
            this.error.value = new Error(e);
        }
    }

    async delete(endpoint, config = {}) {
        try {
            return (await http.delete(endpoint, config)).data
        } catch (e) {
            this.error.value = new Error(e);
        }
    }

    async get(endpoint, config = {}) {
        try {
            return (await http.post(endpoint, config)).data
        } catch (e) {
            this.error.value = new Error(e);
        }
    }
}