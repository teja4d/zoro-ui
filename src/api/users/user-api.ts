import { ApiErrorResponse, UserRegisterRequest, ApiSuccessResponseUserDto, ApiSuccessResponseUserRegisterResponse } from '../swagger-gen/data-contracts';
import { User } from '../swagger-gen/User';

const auth = new User({
    baseUrl: 'http://localhost:5000',
});

export const registerUser = async (registerData: UserRegisterRequest): Promise<ApiSuccessResponseUserRegisterResponse | ApiErrorResponse> => {
    const { username, email, password, password2 } = registerData;
    try {
        if (!username || !email || !password || !password2) {
            return { success: false, error: "Please enter all the fields" };
        }
        if (password !== password2) {
            return { success: false, error: "Passwords do not match" };
        }
        const response = await auth.register(registerData);
        return response.data;
    } catch (error: any) {
        return error.error as ApiErrorResponse;
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
