import { error } from '@sveltejs/kit';

export function load({ params }) {
        return {
            parent: 'Hello world!',
        };
    

    throw error(404, 'Not Good');
}