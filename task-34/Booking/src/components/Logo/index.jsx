import {Wrapper} from "./components.jsx";
import {route} from "../../redux/api/route.jsx";
import {Icon} from "../Header/components.jsx";
export function Logo() {
  return (
    <Wrapper to={route.main.path}>
      <Icon />
      Booking
    </Wrapper>
  )
}
