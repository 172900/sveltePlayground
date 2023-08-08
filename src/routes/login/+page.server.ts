import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies, locals }) => {
    const user = { name: cookies.get('sessionid') }
    locals.user = user
    console.log(cookies.getAll())
    return { user };
}) satisfies PageServerLoad;

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email')?.toString();
        const password = data.get('password');

        if (email) { cookies.set('sessionid', email);}
        console.log('test')

        return { success: true };
    },
    register: async (event) => {
        // TODO register the user
    },
    logout: async (event) => {
      event.cookies.delete('sessionid')
      event.locals.user = null
    }
} satisfies Actions;