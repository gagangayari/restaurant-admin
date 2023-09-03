import * as fromOrder from './order.actions';

describe('orderOrders', () => {
  it('should return an action', () => {
    expect(fromOrder.orderOrders().type).toBe('[Order] Order Orders');
  });
});
