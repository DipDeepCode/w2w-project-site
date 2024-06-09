import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AuthCreate = axios.create({
    baseURL: `https://dipdeepcode.ru/api/auth`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export const postAuthCreate = createAsyncThunk(
    "authCreate/postAuthCreate", 
    async ({phoneNumber, email, password}, {rejectWithValue}) => { 

try {
        const response = await AuthCreate.post(`/create`, {
            phoneNumber: phoneNumber,
            email: email,
            password: password
        });

        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;
        console.log(`create ${data}`)
            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);