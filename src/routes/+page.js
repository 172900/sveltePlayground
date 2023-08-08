import { error } from '@sveltejs/kit';

export function load({ params }) {
        return {
            rootPage: 'Hello world!',
        };
    

    throw error(404, 'Not Good');
}