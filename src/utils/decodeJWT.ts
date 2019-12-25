import User from "../entities/User";
import jwt from "jsonwebtoken";

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN as string) as any ;
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    return undefined;
  }
};

export default decodeJWT;
