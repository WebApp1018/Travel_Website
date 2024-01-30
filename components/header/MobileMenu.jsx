"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href="/"
                  className={router.pathname === "/" ? "menu-active-link" : ""}
                />
              }
            >
              Home
            </MenuItem>
            {/* End Home  Menu */}

            <MenuItem
              component={
                <Link
                  href="/hotel/hotel-list-v1"
                  className={
                    router.pathname === "/hotel/hotel-list-v1"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Hotels
            </MenuItem>
            {/* End Hotels  Menu */}

            <MenuItem
              component={
                <Link
                  href="/flight/flight-list-v1"
                  className={
                    router.pathname === "/flight/flight-list-v1"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Flights
            </MenuItem>
            {/* End Flights  Menu */}

            <MenuItem
              component={
                <Link
                  href="/rental/rental-list-v1"
                  className={
                    router.pathname === "/rental/rental-list-v1"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Holidays
            </MenuItem>
            {/* End Holidays  Menu */}

            <MenuItem
              component={
                <Link
                  href="/others-pages/about"
                  className={
                    router.pathname === "/others-pages/about"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Who we are
            </MenuItem>
            {/* End Who we are  Menu */}

            <MenuItem
              component={
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
