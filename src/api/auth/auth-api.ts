import { Auth } from '../swagger-gen/Auth';
import { ApiSuccessResponseString } from '../swagger-gen/data-contracts';
import { UserLoginRequest, ApiErrorResponse, UserRegisterRequest, ApiSuccessResponseIUser } from '../swagger-gen/data-contracts';

const auth = new Auth({
    baseUrl: 'http://localhost:5000',
});

export const loginUser = async (loginData: UserLoginRequest): Promise<ApiSuccessResponseString | ApiErrorResponse | void> => {
    try {
        const response = await auth.login(loginData)
        if (response.ok) {
            return response.data;
        }

    } catch (error: any) {
        console.error('Error logging in:', error);
        return error;
    }
};

export const registerUser = async (registerData: UserRegisterRequest): Promise<boolean | undefined> => {
    try {
        const response = await auth.register(registerData);

        if (response.ok) {
            return true;
        }
    } catch (error) {

        return false;
    }
};

export const getUserDetails = async (username: string): Promise<ApiSuccessResponseIUser | ApiErrorResponse | null> => {
    try {
        const response = await auth.userDetails(username);
        if (response.ok) {
            return response.data;
        }
        return null;
    } catch (error: any) {
        return error;
    }
};
