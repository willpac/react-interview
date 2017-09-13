import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import CartItem from '../src/components/CartItem';
import Cart from '../src/components/Cart';

const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
];
describe('Cart', () => {

    it('should render a <CartItem /> for every item in `props.items`', () => {
        const wrapper = shallow(<Cart items={mockShoes} />);
        expect(wrapper.find(CartItem).length).toEqual(mockShoes.length);
    });

    it('should pass `props.onCartItemRemove` to each <CartItem />', () => {

        const wrapper = shallow(<Cart items={mockShoes} onCartItemRemove={() => jest.fn()} />);
        expect(wrapper.find(CartItem).first().props().onCartItemRemove).not.toBeUndefined();
        expect(wrapper.find(CartItem).first().props().onCartItemRemove).toBeInstanceOf(Function);
    });

});

describe("CartItem",() => {
 describe('when clicking the cart item', () => {
    it('should call the function passed in to `props.onCartItemRemove` with the CartItem as the first arg', () => {
      const selectSpy = jest.fn();
      const wrapper = shallow(<CartItem {...mockShoes[0]} onCartItemRemove={selectSpy} />);
      const button = wrapper.find('a').first();
      expect(selectSpy.mock.calls.length).toEqual(0);
      button.simulate('click');
      expect(selectSpy.mock.calls.length).toEqual(1);
      expect(selectSpy.mock.calls[0][0]).toEqual(expect.objectContaining(mockShoes[0]));
    });
})
});

describe("App", () => {
    it('should render a <Cart />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Cart).length).toEqual(1);
    });


});