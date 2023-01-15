import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../Components/Config/Config";

export const fetchSlides = createAsyncThunk(
  "carousel/fetchSlides",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("ОШИБКА");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const sliceSlide = createSlice({
  name: "carousel",
  initialState: {
    status: null,
    error: null,
    current: 0,
    slides: null,
  },
  reducers: {
    goToNext(state) {
      if (state.current === state.slides.length - 1) {
        state.current = 0;
      } else {
        state.current = state.current + 1;
      }
    },
    goToPrevios(state) {
      if (state.current === 0) {
        state.current = state.slides.length - 1;
      } else {
        state.current = state.current - 1;
      }
    },
    goToSlide(state) {},
  },
  extraReducers: {
    [fetchSlides.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSlides.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
      state.status = "resolved";
      state.slides = action.payload;
    },
    [fetchSlides.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { goToNext, goToPrevios } = sliceSlide.actions;

export default sliceSlide.reducer;
