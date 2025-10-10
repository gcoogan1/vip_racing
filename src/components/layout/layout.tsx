import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import { useScrollToTop } from "../../util/hooks/useScrollToTop"

const Layout = () => {
  useScrollToTop();
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout