import "@/globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";

export default function Login() {
  return (
    <main className="h-screen">
      <Head>
        <title>Login - Cinema</title>
      </Head>
      <Navbar></Navbar>
        <div className="grid place-items-center mt-56">
          <div className="grid grid-cols-1 gap-5">
          <h1 className="font-light text-center text-4xl relative bottom-8">SIGN IN</h1> 

          <input className="bg-transparent border-2 border-gray-700 rounded-lg p-2 w-72" placeholder="E-Mail"></input>
          <input type="password" className="bg-transparent border-2 border-gray-700 rounded-lg p-2 w-72" placeholder="Password"></input>

          <a className="text-gray-300 relative bottom-3 hover:cursor-pointer">Forgot Password?</a>

          <div className="flex justify-center"><button className="duration-300 border text-white w-24 rounded-lg p-2 hover:bg-white hover:text-black hover:duration-300">LOGIN</button></div>
          <a className="text-gray-300 text-center relative hover:cursor-pointer">Or</a>

          <div className="flex justify-center items-center"><button className="flex justify-center items-center duration-300 border border-gray-500 text-gray-300 w-72 rounded-lg p-2 hover:border-gray-600 hover:text-gray-600 hover:duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google mr-2" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>Sign in with Google</button></div>

          <a className="text-gray-100 text-center relative hover:cursor-pointer">Don´t you have an account? Sign Up!</a>
          </div>
        </div>
    </main>
  )
}
