import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[828px] mx-auto text-center mb-10`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-300 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/*Chat Component*/}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
