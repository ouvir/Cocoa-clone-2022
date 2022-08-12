import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__btn">
          <a class="nav__link" href="friends.html">
            <i class="fa-regular fa-user fa-2x"></i>
          </a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="chats.html">
            <span class="nav__notification badge">1</span>
            <i class="fa-regular fa-comment fa-2x"></i>
          </a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="find.html">
            <i class="fa-solid fa-magnifying-glass fa-2x"></i>
          </a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="more.html">
            <div class="nav__notification--dot badge--dot"></div>
            <i class="fa-solid fa-ellipsis fa-2x"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
