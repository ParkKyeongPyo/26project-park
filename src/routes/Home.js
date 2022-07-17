import { Link } from "react-router-dom";
import MenuBar from "../components/menu";
import menuStyles from "../CSS/homeMenu.module.css";

function Home() {
  const onClick = () => {};
  /*<div className={menuStyles.flex}>
                <Link className={menuStyles.item1} to={"/"}>Home</Link>
                <Link className={menuStyles.item1} to={"/Jobchosing"}>직업선택</Link>
                <Link className={menuStyles.item2} to={"/login"}>Login</Link>
            </div> */

  return (
    <div>
      <MenuBar/>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
