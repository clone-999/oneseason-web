import Banner from "../components/Banner";
import Header from "../components/Header";
import Layout from "../components/Layout";


export default function Home() {
  
  return (
    <Layout>
      <Header />

      <div className="page-content bg-white">
        <Banner />
      </div>


    </Layout>
  )
}
