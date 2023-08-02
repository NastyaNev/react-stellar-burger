export const totalPriceSelector = (state) => {
    const mooved = state.constructorReducer.mooved;
    const bun = state.constructorReducer.bun;
    const prices = mooved.map((item) => item.price);
    const bunPrice = bun ? bun.price * 2 : 0;

    return prices.reduce(function (previousValue, item) {
      return previousValue + item;
    }, 0) + bunPrice;
  };