import Header from "../Header";

function LayoutDefault({ children }) {
  return(
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default LayoutDefault;