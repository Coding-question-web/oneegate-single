/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { Container, Box, Heading, Text, Button } from "theme-ui";
import { useColorMode } from "theme-ui";
import { motion } from "framer-motion";

export default function Banner() {
  const [colorMode] = useColorMode();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <section sx={styles.banner} id="home">
      <video
        src="/investment/video.mp4"
        muted
        autoPlay
        loop
        sx={styles.video}
      ></video>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.6 } },
            }}
          >
            <Heading
              as="h1"
              variant="heroPrimary"
              color={colorMode === "default" ? "#0F2137" : "#fff"}
            >
              <p>Invest on One Egate</p>
              <p>With Money 💰 or Crypto ₿</p>
            </Heading>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.8 } },
            }}
          >
            <Text
              as="p"
              variant="heroSecondary"
              color={colorMode === "default" ? "#0F2137" : "#fff"}
            >
              We manage things for you based on the amount you invested along
              with monthly, or yearly returns on your paid package!
            </Text>
          </motion.div>
          <Button variant="primary">Explore</Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  video: {
    position: "absolute",
    zIndex: -199,
    bottom: 0,
    right: 0,
  },
  banner: {
    height: "100vh",
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
  },
};
