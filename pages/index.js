import Head from 'next/head'
import Form from '../Components/Form'
import Main from "../Components/Main";
import { useSelector } from "react-redux";
;

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row justify-center align-center w-screen h-screen items-center">
      <Head>
        <title>Tack Pay </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*user contain db and auth data */}
      {!user ? <><div className="w-80 h-20 lg:mr-64">
        <img className="w-72 h-28" src="/tackpay-logo-color.png" />
        <h3 className="text-2xl">Basta rifiutare mance</h3>
      </div>
      <Form /></> : <Main />}
      
    </div>
  )
}
