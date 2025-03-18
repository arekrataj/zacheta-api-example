import { IResolvers } from "@graphql-tools/utils";  // https://stackoverflow.com/questions/68690827/cant-import-iresolvers-from-graphql-tools
import { GqlContext } from "./GqlContext"
import { Artwork } from "./interfaces/Artwork"
import { ZachetaAPI } from "./apis/zacheta"

const zachetaAPI = new ZachetaAPI();

const resolvers: IResolvers = {
    Query: {
        getArtworksFromYears: async (
            obj: any,
            args: {
                yearFrom: string;
                yearTo: string;
            },
            ctx: GqlContext,
            info: any
        ): Promise<Artwork[]> => {
            return zachetaAPI.getArtworksFromYears(args.yearFrom, args.yearTo);
        }
    }
};

export default resolvers;