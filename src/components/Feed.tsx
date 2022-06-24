import { Box } from "@mui/material";
import Post from "./Post";
const Feed = ({ fl, p }: { fl: number; p: number }) => {
  return (
    <Box flex="4">
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
