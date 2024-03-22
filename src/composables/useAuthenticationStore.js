import http from "@/utils/http"
import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import {onMounted, ref} from "vue";

export const useAuthenticationStore = defineStore('auth', () => {

    const state = useStorage('auth-state', { token: null, user: null });
    const user = ref(null);

    function setBearerToken(token) {
        http.setDefaults('Authorization', token)
        state.value['token'] = token;
    }

    function removeBearerToken() {
        http.setDefaults('Authorization', null)
        state.value['token'] = null;
    }

    function setUser(data) {
        user.value = data.user
        state.value['user'] = data.user
        setBearerToken(data.token)
    }

    function removeUser() {
        user.value = null;
        state.value['user'] = null;
        removeBearerToken()
    }

    onMounted(() => {
        if (Boolean(state.value['user']) && !user.value) {
            setUser({ user: state.value['user'], token: state.value['token'] })
        }
    })

    return {
        user, setUser, removeUser
    }
})