import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

const SuspenseLoader = () => {
  return (
    <Box>
      <CircularProgress />

      <Typography>Loading...</Typography>
    </Box>
  );
};

export default SuspenseLoader;
