import { Auth } from '../swagger-gen/Auth';
import { UserLoginRequest, ApiErrorResponse, ApiSuccessResponseUserLoginResponse, } from '../swagger-gen/data-contracts';

const auth = new Auth({
    baseUrl: 'http://localhost:5000',
});

export const loginUser = async (loginData: UserLoginRequest): Promise<ApiSuccessResponseUserLoginResponse | ApiErrorResponse> => {
    try {
        const response = await auth.login(loginData);
        return response.data;
    } catch (error: any) {
        return error.error as ApiErrorResponse;
    }
};