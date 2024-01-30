import Link from "next/link";
import { homeItems, pageItems, dashboardItems } from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/home" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li
          className={
            router.pathname === "/hotel/hotel-list-v1" ? "current" : ""
          }
        >
          <Link href="/hotel/hotel-list-v1" className="-yellow-1">
            Hotels
          </Link>
        </li>

        <li
          className={
            router.pathname === "/flight/flight-list-v1" ? "current" : ""
          }
        >
          <Link href="/flight/flight-list-v1">Flights</Link>
        </li>

        <li
          className={
            router.pathname === "/rental/rental-list-v1" ? "current" : ""
          }
        >
          <Link href="/rental/rental-list-v1">Holidays</Link>
        </li>

        <li
          className={router.pathname === "/others-pages/about" ? "current" : ""}
        >
          <Link href="/others-pages/about">Who we are</Link>
        </li>

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>

        <li
          className={`${
            isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}

        <li
          className={`${
            isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
