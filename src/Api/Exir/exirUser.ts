import ExirAxios from "./config";

const getExirUser = ({ token }: { token: string }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const data = ExirAxios.get("/user", config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
export default getExirUser;
