import API from 'api/axios';

const PlaceGetAllApi = async () => {
  try {
    const response = await API.get('/place/all');
    console.log({ data: response.data });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const AddPlaceApi = async (data: AddPlaceApiData) => {
  try {
    const response = await API.post('/place', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const DeletePlaceApi = async (placeId: number) => {
  try {
    const response = await API.delete(`/place/${placeId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const placeImageUpload = async (file: any) => {
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const response = await API.post('s3/upload', file, config);
    return response.data;
  } catch (err) {
    return err;
  }
};

export default PlaceGetAllApi;
