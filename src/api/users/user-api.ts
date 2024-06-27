import { UserLoginRequest, ApiErrorResponse, UserRegisterRequest, ApiSuccessResponseUserLoginResponse, ApiSuccessResponseUserDto } from '../swagger-gen/data-contracts';
import { User } from '../swagger-gen/User';

const auth = new User({
    baseUrl: 'http://localhost:5000',
});

export const loginUser = async (loginData: UserLoginRequest): Promise<ApiSuccessResponseUserLoginResponse | ApiErrorResponse> => {
    try {
        const response = await auth.login(loginData);
        if (response.ok) {
            return response.data;
        }
        return response.data;
    } catch (error) {
        return error as ApiErrorResponse;
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

export const getUserDetails = async (username: string): Promise<ApiSuccessResponseUserDto | ApiErrorResponse | null> => {
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
