import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST (request:Request, response:Response){
 
    const currrrentUser = await getCurrentUser();
    if(!currrrentUser) return NextResponse.error();

    const body = await request.json();

    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price
    } = body;
    
    console.log(body);

    Object.keys(body).forEach((value)=>{
       if(!body[value]){
        NextResponse.error();
       }
    })

    const listing = await prisma.listing.create({
        data:{
            title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue:location.value,
        price:parseInt(price , 10),
        userId:currrrentUser.id,
        }
    });

 return NextResponse.json(listing)
}