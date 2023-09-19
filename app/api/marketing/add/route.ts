import { AddToMarketingDTO, addToMailChimp } from "@/lib/externalRequest/mailChimp";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    let name, email, city;

    const json = await req.json() as { name: string, email: string, city: string };
    name = json.name;
    email = json.email;
    city = json.city;
    let firstName, lastName = '';
    if (name.split(' ').length > 1) {
        firstName = name.split(' ')[0]
        lastName = name.split(' ')[1];
    } else {
        firstName = name.split(' ')[0]
    }
    await addToMailChimp({ firstName, lastName, email, city })
    return NextResponse.json({ message: "success" }, { status: 200 })
}