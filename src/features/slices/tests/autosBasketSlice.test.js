// import {
//     autoBasketReducer,
//     addInBasket,
//     deleteFromBasket,
//     clearBasket,
//     toggleModalStatus,
// } from '../autoBasketSlice';
// // const { autoBasketReducer,  addInBasket, deleteFromBasket, } = require('../autoBasketSlice');

// describe('autoBasketReducer test', () => {
//     const state = {
//         itemsBasket: [],
//         loading: 'idle',
//         error: null,
//         isModal: false,
//     };
//     const testItem = {
//         id: '21-347-6215',
//         name: 'Guss',
//         price: 762,
//         img: 'https://images.pexels.com/photos/337909/',
//         color: 'Blue',
//     };
//     const state2 = {
//         itemsBasket: [
//             {
//                 id: '21-347-6215',
//                 name: 'Guss',
//                 price: 762,
//                 img: 'https://images.pexels.com/photos/337909/',
//                 color: 'Blue',
//                 quantity: 1,
//             },
//         ],
//         loading: 'idle',
//         error: null,
//         isModal: true,
//     };

//     test('add to basket if item is not in the cart', () => {
//         expect(autoBasketReducer(state, addInBasket(testItem))).toEqual({
//             itemsBasket: [{ ...testItem, quantity: 1 }],
//             loading: 'idle',
//             error: null,
//             isModal: false,
//         });
//     });
//     test('add to basket if item is in the cart', () => {
//         expect(autoBasketReducer(state2, addInBasket({ ...testItem }))).toEqual(
//             {
//                 itemsBasket: [{ ...testItem, quantity: 2 }],
//                 loading: 'idle',
//                 error: null,
//                 isModal: true,
//             }
//         );
//     });
//     test('delete from basket', () => {
//         expect(
//             autoBasketReducer(state2, deleteFromBasket({ ...testItem }))
//         ).toEqual({
//             itemsBasket: [],
//             loading: 'idle',
//             error: null,
//             isModal: true,
//         });
//     });
//     test('clear basket', () => {
//         expect(autoBasketReducer(state2, clearBasket())).toEqual({
//             itemsBasket: [],
//             loading: 'idle',
//             error: null,
//             isModal: true,
//         });
//     });
//     test('toggle Modal Status open', () => {
//         expect(autoBasketReducer(state, toggleModalStatus(true))).toEqual({
//             itemsBasket: [],
//             loading: 'idle',
//             error: null,
//             isModal: true,
//         });
//     });
//     test('toggle Modal Status close', () => {
//         expect(autoBasketReducer(state2, toggleModalStatus(false))).toEqual({
//             itemsBasket: [
//                 {
//                     id: '21-347-6215',
//                     name: 'Guss',
//                     price: 762,
//                     img: 'https://images.pexels.com/photos/337909/',
//                     color: 'Blue',
//                     quantity: 1,
//                 },
//             ],
//             loading: 'idle',
//             error: null,
//             isModal: false,
//         });
//     });
// });
