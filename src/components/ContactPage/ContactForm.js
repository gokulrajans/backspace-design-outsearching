import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import ContactCard from './ContactCard/ContactCard';

const ContactForm = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    contactNumber: "",
    email: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});

  // Styled Components
  const StyledTextField = styled(TextField)({
    marginBottom: "16px",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  });

  const StyledButton = styled(Button)({
    backgroundColor: "#1976D2",
    borderRadius: '12px',
    color: "#fff",
    padding: "12px 24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#4f19d2",
    borderRadius: '12px',
    },
  });

  // Validation Rules
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.requirement) newErrors.requirement = "Requirement is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission Handler
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Data:", formData);
    }
  };

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <StyledTextField
            fullWidth
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
            required
          />
          <StyledTextField
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber}
            required
          />
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <StyledTextField
            fullWidth
            label="Requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            error={!!errors.requirement}
            helperText={errors.requirement}
            required
            multiline
            rows={4}
          />
          <StyledButton fullWidth onClick={handleSubmit}>
            Send Requirement
          </StyledButton>
        </Grid>

        {/* Right Side Contact Info */}
        <Grid item xs={12} md={6} marginTop={"40px"}>
          <ContactCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
