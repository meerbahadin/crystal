import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { initialAuthState } from './initialState';

/**
 * An atom represents a piece of state. All you need is to specify an initial value,
 * which can be primitive values like strings and numbers, objects and arrays.
 *  You can create as many primitive atoms as you want.
 */

/**
 * Hydration basically means if the app is fully loaded in a client side to avoid some conflict and request dublication
 */
const hydratedAtom = atom<boolean>(false);

/**
 * Auth atom hold user authentication info like token and it uses "atomWithStorage" function because the data need to be
 * saved and synced with locale storage
 */
const authAtom = atomWithStorage('user', initialAuthState);

/**
 * Language atom hold the language and the locale of the app
 */
const localeAtom = atomWithStorage<string>('locale', 'en');

/**
 * Exports
 */
export { localeAtom, authAtom, hydratedAtom };
