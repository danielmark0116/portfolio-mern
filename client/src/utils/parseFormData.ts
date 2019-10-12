export const parseFormData = (data: any) => {
  let formData = new FormData();

  Object.keys(data).forEach((item, index) => {
    formData.set(item, data[item]);
  });

  return formData;
};
