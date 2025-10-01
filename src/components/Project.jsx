import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import { motion } from "framer-motion";

const data = [
  {
    src: "https://i.pinimg.com/736x/b5/3b/f1/b53bf1fd71eeadcf0ac907ec47a933cf.jpg",
    title: "Forever-Shopping App",
    description: "MERN Stack",
    link: "https://github.com/vineet210803/Ecommerce",
  },
  {
    src: "https://i.pinimg.com/1200x/1e/10/83/1e1083c9d20b157328d519daff8e4f8c.jpg",
    title: "Passkey",
    description: "MERN Stack",
    link: "https://github.com/vineet210803/Passkey-MERN",
  },
  {
    src: "https://i.pinimg.com/1200x/3d/fa/49/3dfa498b2d7ed9bfa135b5b851033b45.jpg",
    title: "Linktree",
    description: "NEXT.js",
    link: "https://github.com/vineet210803/Linktree-Next.js",
  },
  {
    src: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Employee Management System",
    description: "REACT.js",
    link: "https://github.com/vineet210803/Employee_Management_System-React.js",
  },
  {
    src: "https://images.unsplash.com/photo-1723505613384-b55168b80568?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "My TODO App",
    description: "REACT.js",
    link: "https://github.com/vineet210803/MyToDoApp",
  },
  // 👉 Add more items here to test scrolling
];

export default function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Card
        variant="outlined"
        sx={{
          width: 400,
          height: 400, // ✅ fixed height
          p: 0,
          transform: "scale(1.25)",
        //   opacity:"0.5",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px) saturate(150%)",
          WebkitBackdropFilter: "blur(10px) saturate(150%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List
          sx={{
            py: "var(--ListDivider-gap)",
            flexGrow: 1,
            overflowY: "auto", // ✅ scroll only when needed
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "rgba(255, 255, 255, 0.5)",
            },
          }}
        >
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ListItem>
                  <ListItemButton
                    component="a"
                    href={item.link}
                    target="_blank"
                    sx={{
                      gap: 2,
                      alignItems: "flex-start",
                      borderRadius: "8px",
                      width: "100%",
                      backgroundColor: "transparent !important", // ✅ prevent white hover
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.15) !important",
                        backdropFilter: "blur(3px)",
                        transform: "scale(1)",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <AspectRatio sx={{ flexBasis: 120 }}>
                      <img
                        srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.src}?w=120&fit=crop&auto=format`}
                        alt={item.title}
                      />
                    </AspectRatio>
                    <ListItemContent>
                      <Typography sx={{ fontWeight: "md", color: "white" }}>
                        {item.title}
                      </Typography>
                      <Typography level="body-sm" sx={{ color: "lightgray" }}>
                        {item.description}
                      </Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </motion.div>
              {index !== data.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </motion.div>
  );
}
