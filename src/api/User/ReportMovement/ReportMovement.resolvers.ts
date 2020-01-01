import { Resolvers } from "src/types/resolvers";
import privateResolver from "src/utils/privateResolver";
import {
  ReportMovementMutationArgs,
  ReportMovementResponse
} from "src/types/graph";
import User from "src/entities/User";

const resolvers: Resolvers = {
  Mutation: {
    ReportMovement: privateResolver(
      async (
        _,
        args: ReportMovementMutationArgs,
        { req }
      ): Promise<ReportMovementResponse> => {
          const user: User
      }
    )
  }
};

export default resolvers;
