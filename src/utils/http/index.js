import axios from 'axios';

class HTTP {
    instance;
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            timeout: 2000,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async get(endpoint, config = {}) {
        return await this.instance.get(endpoint, config);
    }

    async post(endpoint, data = {}, config = {}) {
        return await this.instance.post(endpoint, data, config);
    }

    async patch(endpoint, data, config = {}) {
        return await this.instance.patch(endpoint, data, config);
    }

    async delete(endpoint, config = {}) {
        return await this.instance.delete(endpoint, config);
    }

    setDefaults(props, value) {
        switch (props) {
            case 'Authorization':
                this.instance.defaults.headers.common['Authorization'] = `Bearer ${value}`;
                break;
        }
    }
}

export default new HTTP;