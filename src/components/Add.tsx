import {
  Fab,
  Modal,
  Tooltip,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight: 280,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add new post"
        sx={{ positoin: "fixed", bottom: "10px", left: "10px" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            color="gray"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
            component="h2"
          >
            Create Post
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.wallpaperscraft.com/image/single/coffee_cappuccino_foam_cinnamon_corn_108167_300x168.jpg"
            />
            <Typography color="gray" sx={{ fontWeight: "500", ml: "8px" }}>
              Jonh Harden
            </Typography>
          </div>
          <TextField
            sx={{ width: "100%", m: "6px 0" }}
            id="standard"
            multiline
            rows={3}
            label="What on your mind!"
            variant="standard"
          />
          <Stack gap={2} direction="row" mt={2} mb={2}>
            <EmojiEmotionsIcon color="warning" fontSize="large" />
            <ImageIcon color="error" fontSize="large" />
            <VideoCameraBackIcon color="secondary" fontSize="large" />
            <PersonAddIcon color="primary" fontSize="large" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            sx={{ mt: "5px" }}
          >
            <Button>POST</Button>
            <Button sx={{ maxWidth: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
