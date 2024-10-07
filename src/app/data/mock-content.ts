import { GamingConsole } from "../GamingConsole";

export class MockContent {
    // List of gaming consoles
    static gamingConsoleList: GamingConsole[] = [
        { id: 1, brand: 'Sony', model: 'PlayStation 5', releaseYear: 2020, storageCapacity: 825, hasVRSupport: true },
        {
            id: 2,
            brand: 'Microsoft',
            model: 'Xbox Series X',
            releaseYear: 2020,
            storageCapacity: 1000,
            hasVRSupport: true
        },
        {
            id: 3,
            brand: 'Nintendo',
            model: 'Switch',
            releaseYear: 2017,
            storageCapacity: 32,
            hasVRSupport: false
        },
        {
            id: 4,
            brand: 'Sony',
            model: 'PlayStation 4',
            releaseYear: 2013,
            storageCapacity: 500,
            hasVRSupport: true
        },
        {
            id: 5,
            brand: 'Microsoft',
            model: 'Xbox One',
            releaseYear: 2013,
            storageCapacity: 500,
            hasVRSupport: false
        }
    ];
}
