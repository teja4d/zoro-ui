'use server'
import { Auth } from '../swagger-gen/Auth';
import { UserLoginRequest, ApiErrorResponse } from '../swagger-gen/data-contracts';

const auth = new Auth({
    baseUrl: 'http://localhost:5000',
});


export async function authenticate(loginData:FormData): Promise<ApiErrorResponse | undefined> {
    const username = loginData.get('username') as string;
    const password = loginData.get('password') as string;

    if (!username || !password) {
        return { error: "Please enter both username and password" } as ApiErrorResponse;
    }
    const userLoginRequest: UserLoginRequest = { username, password };
    try {
       const result =  await auth.login(userLoginRequest);
       console.log(result);
    } catch (error: any) {
        return error.error as ApiErrorResponse;
    }
}

export default authenticate;

