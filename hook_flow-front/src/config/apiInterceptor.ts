import { api } from './api'

export function setupInterceptors() {
    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            if(!error.response) return Promise.reject(error);
            if(error.config.url?.includes("/auth/refresh")) return Promise.reject(error);
            if(error.response.status !== 401) return Promise.reject(error);

            try { 
                await api.post("/auth/refresh");
                return api(error.config);
            } catch(error) {
                return Promise.reject(error);
            }            
        }
    );
}