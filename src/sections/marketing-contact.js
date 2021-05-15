/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import {
  jsx,
  Container,
  Input,
  Label,
  Textarea,
  Heading,
  Box,
  Button,
} from "theme-ui";

export default function MarketingContact() {
  const [show, setShow] = useState(false);
  return (
    <div sx={{ marginBottom: "100px" }}>
      <Container sx={styles.form}>
        <Box sx={{ textAlign: "center" }}>
          <Heading as="h1" variant="heroPrimary" color="#fff">
            Contact Us Now!
          </Heading>
        </Box>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          mb={3}
          sx={{ backgroundColor: "#fff", color: "#acacac" }}
          onFocus={() => setShow(true)}
        />
        <span
          sx={show ? { display: "block" } : { display: "none" }}
          className="animationBox"
        >
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            mb={3}
            sx={{ backgroundColor: "#fff", color: "#acacac" }}
          />
          <Label htmlFor="subject">Subject</Label>
          <Input
            name="subject"
            mb={3}
            sx={{ backgroundColor: "#fff", color: "#acacac" }}
          />
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            rows={6}
            mb={3}
            sx={{ backgroundColor: "#fff", color: "#acacac" }}
          />
        </span>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="primary">Submit</Button>
        </Box>
      </Container>
    </div>
  );
}

const styles = {
  form: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
  },
};
