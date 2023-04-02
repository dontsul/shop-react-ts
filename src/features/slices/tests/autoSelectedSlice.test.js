// import {
//     autoSelectedReducer,
//     toggleSelected,
//     setItemsSelected,
// } from '../autoSelectedSlice';

// describe('auto Selected slice', () => {
//     const state = {
//         itemsSelected: [],
//         loading: 'idle',
//         error: null,
//     };

//     const testItem = {
//         id: '21-347-6215',
//         name: 'Guss',
//         price: 762,
//         img: 'https://images.pexels.com/photos/337909/',
//         color: 'Blue',
//     };

//     test('toggle Selected', () => {
//         expect(autoSelectedReducer(state, toggleSelected(testItem))).toEqual({
//             ...state,
//             itemsSelected: [testItem],
//         });
//     });
// });
