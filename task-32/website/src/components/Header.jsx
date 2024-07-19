import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Oleksandr Lynnyk
                </Typography>
                <Button color="inherit" component={Link} to="/">Главная</Button>
                <Button color="inherit" component={Link} to="/todo">TODO</Button>
                <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
            </Toolbar>
        </AppBar>
    );
}

