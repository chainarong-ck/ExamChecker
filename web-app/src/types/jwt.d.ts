import { JWTPayload } from "jose";

export interface TokenPayload extends JWTPayload {
    user: {
        id: number;
        role: string;
        username: string;
    };
}
