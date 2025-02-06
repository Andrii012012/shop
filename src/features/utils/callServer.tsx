import axios from "axios";

export const callServer = async (url: string, rejectWithValue: (message: string) => void) => {
  try {
    const response = await axios(url);

    if (response.status === 200) {
      return response.data;
    }

  } catch (err: any) {
    return rejectWithValue(err.message);
  }
};
