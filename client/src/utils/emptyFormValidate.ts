export const isAnyInputEmpty = (data: {}) => {
  return Object.values(data).some(el => el === '');
};
