import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export default function ModalContact({ contact, close }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact was deleted");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
      }}
    >
      <Box
        sx={{
          border: "1.5px solid #a2a3a3",
          // backgroundColor: "#f2f1f0",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          <ErrorIcon
            sx={{ fontSize: "40px", color: "#e36f71", marginBottom: "20px" }}
          />
        </Box>
        <Box
          sx={{
            fontSize: 16,
            color: "#524f4e",
            textAlign: "center",
            // backgroundColor: "#ebebed",
            border: "2px solid #e36f71",
            borderRadius: "8px",
            padding: "6px",
            marginBottom: "30px",
            fontFamily: "",
          }}
        >
          Are you sure you want to delete the contact
          <Typography
            sx={{
              fontSize: 18,
              color: "#524f4e",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {contact.name} ?
          </Typography>
        </Box>

        <Box
          sx={{
            display: " flex",
            justifyContent: "space-evenly",
            // gap: "20px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#e36f71",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "red",
              },
            }}
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingInline: "30px",
              backgroundColor: "primary.light",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={close}
          >
            No
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
