const randomID = (name: string) => {
  return `${name + Math.floor(Math.random() * 100000)}-id-${Math.floor(Math.random() * 100000)}`;
};

export default randomID;
