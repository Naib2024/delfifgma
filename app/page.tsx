import Head from "@/components/Head"
import SeeOurMenu from"../components/SeeOurMenu/indext"
import Menu from '../components/Menu/index'
import Chef from '../components/Chef/index'
import ReserveTable from '../components/ReserveTable/index'
import OpenTime from "../components/OpenTime/index"
import Footer from'../components/layout/Footer/index'

const Page = () => {
  return (
    <>
      {/* firts section */}
      <Head />
      {/* second side */}
      <SeeOurMenu />
      {/* third section */}
      <div className='  m-auto my-7'>
      <h1 className="text-4xl text-center">Our popular menu</h1>
        <Menu />
      </div>
      {/* 4 */}
      <ReserveTable />
      {/* 5 */}
      <Chef />
      {/* 6 */}
      <OpenTime />
      {/* 7 */}
      <Footer />
    </>
  )
}

export default Page;
