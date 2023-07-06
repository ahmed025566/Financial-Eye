import stockReducer, { fetchStock } from '../redux/features/stock/stockSlice';

const initialState = {
  data: [],
  keys: [],
  Views: [],
  laoding: false,
  error: '',
};

it('Should have the correct initial state', () => {
  expect(stockReducer(undefined, {})).toEqual(initialState);
});

it('Should handle the pending case correctly', () => {
  expect(
    stockReducer(initialState, fetchStock.pending()).laoding,
  ).toBeTruthy();
});

it('should handle the fullfulied case correctly', () => {
  const response = [

  ];

  const data = [

  ];

  const newState = stockReducer(
    initialState,
    fetchStock.fulfilled(response),
  );

  expect(newState.laoding).toBeFalsy();
  expect(newState.data).toEqual(data);
});

it('Should handle the rejected case correctly', () => {
  const newState = stockReducer(
    initialState,
    fetchStock.rejected(new Error('Failed to fetch')),
  );

  expect(newState.laoding).toBeFalsy();
  expect(newState.error).toBeDefined();
});
