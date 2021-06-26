import Header from "./Header";
import { Main } from "../../pages/Home.style";
export default function Layout(props) {
  return (
    <Main>
      <Header />
      <main>{props.children}</main>
    </Main>
  );
}
