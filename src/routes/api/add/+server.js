
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  
    const { a, b } = await request.json();
    console.log(a, b)
    return json(a + b);
}