import { gql } from "apollo-server-express";

const typeDefs = gql`
type Artwork {
    id: String!
    author: String!
    title: String!
    date: String!
}
type Query {
    getArtworksFromYears(yearFrom: String, yearTo: String): [Artwork!]
}
`;

export default typeDefs;