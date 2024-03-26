// import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'vy1ydd7l',
    dataset: 'production',
    apiVersion:'2024-03-25',
     useCdn: false,
     token: process.env.NEXT_TOKEN
})
 const builder =  imageUrlBuilder(client);
export function urlFor(source){
    return builder.image(source)
}
//  export const urlFor = (source)=> builder.image(source)