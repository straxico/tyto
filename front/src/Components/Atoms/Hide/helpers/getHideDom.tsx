const getHideDom = (on: Devices[], viewport: Devices) => {
  return on.indexOf(viewport) == -1;
};
export default getHideDom;
