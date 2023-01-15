import { configureStore } from "@reduxjs/toolkit";
import sliceSlide from "./Slice";

export default configureStore({
  reducer: {
    slide: sliceSlide,
  },
});
