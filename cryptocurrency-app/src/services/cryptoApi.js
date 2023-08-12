import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoAPiHeaders={
    'X-RapidAPI-Key': '5993f902b8mshc12c46803594a66p12c663jsncc7d851ba210',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoAPiHeaders})

export const cryptoApi=createApi({
    reducerpath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest(`/coins`)

            // query:()=>`/coins`

        })

    })
})

export const { useGetCryptosQuery} =cryptoApi;



