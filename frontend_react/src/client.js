import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'qq72nbf5',
    dataset: 'production',
    apiVersion: '2020-02-01',
    useCdn: true,
    token: 'skPVMF2gOySh75X6gwK2lqbNTHsBDhBdNbWg3sBxilcUznBhsVa9AQyJEmawdrT4A8q82MamharAeSA9SxGytqapo0OGY0rBdPaWhboUbocn18bsTkJz1mRB7PtWxDIQ8w4J9HhkAb7Fwc7UsavKVAr3YrIM6iiFmFNaqOaqah0UC1zX2BUy',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);