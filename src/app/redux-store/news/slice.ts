import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
interface AuthenticationState {
  newsList: any;
  originList: any;
  status: "idle" | "loading" | "failed" | "succeeded";
}

const initialState: AuthenticationState = {
  newsList: null,
  originList: null,
  status: "idle",
};

export const createNews = createAsyncThunk(
  "news/create",
  async ({ data }: { data: any }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/news/create",
        {
          ...data,
        }
      );
      console.log("response.data", response.data);

      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }
);

export const getNewsWait = createAsyncThunk("news/get-wait", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/news/get-wait");
    console.log("response.data", response.data);

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
});
export const getNewsApprove = createAsyncThunk("news/get-approve", async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/news/get-approve"
    );
    console.log("response.data", response.data);

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
});
export const getNewsRefuse = createAsyncThunk("news/get-approve", async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/news/get-approve"
    );
    console.log("response.data", response.data);

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
});
export const deleteNews = createAsyncThunk("news/delete", async (ID: any) => {
  try {
    const response = await axios.post("/api/news/delete", ID, {});

    console.log("ssss", response.data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
});

export const updateNews = createAsyncThunk("news/update", async (data: any) => {
  try {
    const response = await axios.post("/api/news/update", data, {});

    console.log("Server response:", response.data);

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
});
function removeAccents(str: any) {
  if (str === undefined || str === null) {
    return "";
  }
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsList = action.payload;
        state.originList = action.payload;
      })
      .addCase(createNews.rejected, (state, action) => {
        state.status = "failed";
        state.newsList = null;
        state.originList = null;
      })
      .addCase(deleteNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getNewsWait.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNewsWait.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsList = action.payload;
        state.originList = action.payload;
      })
      .addCase(getNewsWait.rejected, (state, action) => {
        state.status = "failed";
        state.newsList = null;
        state.originList = null;
      })
      .addCase(getNewsApprove.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNewsApprove.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsList = action.payload;
        state.originList = action.payload;
      })
      .addCase(getNewsApprove.rejected, (state, action) => {
        state.status = "failed";
        state.newsList = null;
        state.originList = null;
      })
      .addCase(updateNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateNews.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const getNewsList = (state: RootState) => state.newsState.newsList;
export default newsSlice.reducer;
