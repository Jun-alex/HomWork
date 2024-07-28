import {Wrapper} from "./components.jsx";
import {Logo} from "../Logo/index.jsx";
import {Stack} from "@mui/material";
import {Button} from "../Button/index.jsx";
import {route} from "../../redux/api/route.jsx";

export function Header() {
  return (
    <Wrapper component="header">
      <Logo />
      <Stack spacing={2} direction="row">
        <Button reactHref={route.main.path}>Main</Button>
        <Button reactHref={route.about.path}>About</Button>
      </Stack>
    </Wrapper>
  )
}
