// import { fetchPokemons } from './pokeRepository';

// // jest.mock("./pokeRepository'");

// describe('Given the pokeRepository', () => {
//     describe('When we instanciate ', () => {
//         test('Then it should return an object with all the pokemons', async () => {
//             const pokeMock = {
//                 name: 'pokeName',
//                 id: 'id',
//                 imgSrc: 'img',
//             };

//             global.fetch = jest.fn().mockResolvedValue({
//                 json: jest.fn().mockResolvedValue({}),
//                 ok: true,
//             });
//             const result = (await fetchPokemons()).map(pokeMock);

//             expect(fetch).toHaveBeenCalled();
//             expect(result).toBe({});
//         });
//     });
// });
