import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import AppleSpinner from "./AppleSpinner";
export default function LoadingAlert({ open }: { open: boolean }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={open}
      >
        {/* <CircularProgress /> */}
        <AppleSpinner />
      </Backdrop>
    </div>
  );
}
