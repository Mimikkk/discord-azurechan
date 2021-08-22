const service = {
  async fetchNumbers(count: number) {
    return [...Array(count).keys()];
  },
};

export default service;
