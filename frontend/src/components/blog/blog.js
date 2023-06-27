import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogCard({ author, title, description, time, id }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-detail/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/blog/delete-blog/${id}`
      );
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  };

  const dateString = `${time}`;
  const formattedDate = formatDate(dateString);
  return (
    <Card
      sx={{
        width: "70%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        "&:hover": {
          boxShadow: "20px 20px 50px #ccc",
        },
      }}
    >
      <Box display={"flex"}>
        <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
          <ModeEditIcon color="info" />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        title={author}
        subheader={formattedDate}
      />
      <CardContent>
        <Typography variant="h6" color="text" textAlign={"justify"}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={"justify"}
        >
          <br />
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
