import prismaClient from "../prisma";
import { io } from "../app";

class ProfileUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    // SELECT * FROM MESSAGES LIMIT 3 ORDERBY CREATED_AT DESC

    return user;
  }
}

export { ProfileUserService };
