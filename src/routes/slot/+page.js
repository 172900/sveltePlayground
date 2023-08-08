import { error } from '@sveltejs/kit';

export function load({ params }) {
        return {
            rootPage: 'Hello slot world!',
        };
    

    throw error(404, 'Not Good');
}