// app/lib/api-client.ts

import { Auth } from "../swagger-gen/Auth";
import { User } from "../swagger-gen/User";

class ApiClient {
    auth: Auth
    user: User;


    constructor(baseUrl: string) {
        const config = { baseUrl };
        this.user = new User(config);
        this.auth = new Auth(config);
    }
}

const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000');

export { apiClient };