import React from "react";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">Shree's Blog</Typography>
          <Box display={"flex"} marginLeft="auto">
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/blogs"
            >
              Home
            </Button>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/create-blog"
            >
              Create
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
