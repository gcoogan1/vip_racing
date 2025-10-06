import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"

const Layout = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout