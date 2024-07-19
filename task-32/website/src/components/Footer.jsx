import { Box, Link, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box component="footer" py={3} textAlign="center" bgcolor="primary.main" color="white">
            <Typography variant="body1">
                © 2024 Oleksandr Lynnyk
            </Typography>
            <Typography variant="body1">
                Контактная информация:
            </Typography>
            <Link href="mailto:sasamarten082@gmail.com" color="inherit">sasamarten082@gmail.com</Link><br/>
            <Link href="tel:+380508681483" color="inherit">+380508681483</Link><br/>
            <Link href="https://www.linkedin.com/in/oleksandr-lynnyk-517104295/" color="inherit">LinkedIn</Link><br/>
            <Link href="https://t.me/Illuminato_r" color="inherit">Telegram</Link>
        </Box>
    );
}

