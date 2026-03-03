import { NextRequest, NextResponse } from "next/server";
import { createNewRecipe } from "@/lib/recipes/recipes.services";
import { authClient } from "@/lib/auth-client"


export async function POST(req: NextRequest) {
  try {
    
    const { data: session } = await authClient.getSession()
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const recipe = await createNewRecipe(session.user.id, body);

    return NextResponse.json(recipe);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}