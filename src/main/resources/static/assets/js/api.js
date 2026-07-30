const API_BASE_URL =
"http://localhost:8080/api";

const api = {

    async get(endpoint){

        const response =
        await fetch(
            `${API_BASE_URL}${endpoint}`,
            {
                headers:this.headers()
            }
        );

        return this.handleResponse(
            response
        );
    },

    async post(endpoint,data){

        const response =
        await fetch(
            `${API_BASE_URL}${endpoint}`,
            {
                method:"POST",

                headers:this.headers(),

                body:JSON.stringify(
                    data
                )
            }
        );

        return this.handleResponse(
            response
        );
    },

    headers(){

        return {

            "Content-Type":
            "application/json",

            "Authorization":
            `Bearer ${
                localStorage.getItem(
                    "token"
                )
            }`
        };
    },

    async handleResponse(
        response
    ){

        if(!response.ok){

            throw new Error(
                "Request Failed"
            );
        }

        return await response.json();
    }
};