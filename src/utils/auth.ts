import { AccessTokenPayload } from "@/defines/jwt/types";
import { decode } from "jsonwebtoken";

export const getJwtPayload = (jwt?: string | undefined) => {
	return jwt ? (decode(jwt) as AccessTokenPayload) : null;
};
