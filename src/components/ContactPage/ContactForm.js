import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const ContactForm = () => {
  // Styled Components
  const StyledTextField = styled(TextField)({
    marginBottom: "16px",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  });

  const StyledButton = styled(Button)({
    backgroundColor: "#ff007f",
    color: "#fff",
    padding: "12px 24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e60073",
    },
  });

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* Left Side Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Kindly share with us your requirement
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            We are always willing to help you with our services
          </Typography>
          <StyledTextField
            fullWidth
            label="Name"
            required
            InputProps={{
              startAdornment: (
                <span role="img" aria-label="user">
                  👤
                </span>
              ),
            }}
          />
          <StyledTextField
            fullWidth
            label="Country"
            required
            InputProps={{
              startAdornment: (
                <span role="img" aria-label="globe">
                  🌍
                </span>
              ),
            }}
          />
          <StyledTextField
            fullWidth
            label="Contact Number"
            InputProps={{
              startAdornment: (
                <span role="img" aria-label="phone">
                  📞
                </span>
              ),
            }}
          />
          <StyledTextField
            fullWidth
            label="Email"
            required
            type="email"
            InputProps={{
              startAdornment: (
                <span role="img" aria-label="email">
                  📧
                </span>
              ),
            }}
          />
          <StyledTextField
            fullWidth
            label="Requirement"
            required
            multiline
            rows={4}
            InputProps={{
              startAdornment: (
                <span role="img" aria-label="requirement">
                  📝
                </span>
              ),
            }}
          />
          <StyledButton fullWidth>Send Requirement</StyledButton>
        </Grid>

        {/* Right Side Contact Info */}
        <Grid item xs={12} md={6} marginTop={'40px'}>
          <Box mb={4} display={"flex"} width={'100%'} justifyContent={'center'}>
            <div justifyContent={'center'}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                India Office
              </Typography>
              <Typography variant="body1">
                Y8, Block - EP, Sector V, Salt Lake
                <br />
                Kolkata - 700091, INDIA
              </Typography>
              <Typography variant="body1">
                📞 +91-8420197208 / +91-8420353945
              </Typography>
              <Typography variant="body1">
                📧 enquiry@webguru-india.com
              </Typography>
            </div>
          </Box>
          <Box mb={4} display={"flex"} width={'100%'} justifyContent={'center'}>
            <div justifyContent={'center'}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                India Office
              </Typography>
              <Typography variant="body1">
                Y8, Block - EP, Sector V, Salt Lake
                <br />
                Kolkata - 700091, INDIA
              </Typography>
              <Typography variant="body1">
                📞 +91-8420197208 / +91-8420353945
              </Typography>
              <Typography variant="body1">
                📧 enquiry@webguru-india.com
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
