import https from "https";
import axios, { AxiosInstance } from "axios";
import { Artwork } from "../interfaces/Artwork";

export class ZachetaAPI {
    private _axiosInstance: AxiosInstance;

    constructor() {
        this._axiosInstance = axios.create({ 
            httpsAgent: new https.Agent(
                { rejectUnauthorized: false })
            });
        this._axiosInstance.defaults.baseURL = "https://apihackaton.zacheta.art.pl";
        this._axiosInstance.defaults.headers.common["Authorization"] = 'Bearer YOUR_API_KEY';
        this._axiosInstance.defaults.headers.common["Accept"] = '*/*';
    }

    public async getArtworksFromYears(dateFrom: string, dateTo: string): Promise<Artwork[]> {
        let result = new Array();
        let query = "/api/v1/artworks";

        if (dateFrom || dateTo) {
            query += "?Date";
            if (dateFrom) {
                query += `[$gte]=${ dateFrom }`;
            }
            if (dateTo) {
                if (dateFrom) {
                    query += `&Date[$lte]=${ dateTo }`;
                }
                else {
                    query += `[$lte]=${ dateTo }`;
                }
            }
        }
        console.log(query);

        let artworksData = await this._axiosInstance.get(query, { responseType: 'json' });
        for (let artwork of artworksData.data.data) {
            let artistData = await this._axiosInstance.get(`/api/v1/artists?Artworks[id]=${ artwork.id }`, { responseType: 'json' });

            if (artistData.data.data[0]) {
                let artist = artistData.data.data[0].attributes;

                let artistName = '';
                if (artist.FirstName) {
                    artistName = artist.FirstName + ' ';
                }
                if (artist.LastName) {
                    artistName += artist.LastName;
                }

                let artworkTitle = artwork.attributes.Title[0].Title;
                let artworkDate = artwork.attributes.Date;

                result.push({ id: artwork.id, author: artistName, title: artworkTitle, date: artworkDate });
            }
        }

        return result;
    }
}