import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Live from "./pages/Live";

import puppeteer from 'puppeteer';

async function handler(req, res) {
  console.log("a1");
  try {
    console.log("a2");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Adjust the URL as needed
    console.log("a3");
    // Add any Puppeteer actions you need to perform
    // For example, you can take screenshots, interact with the page, etc.
    // await page.screenshot({ path: 'example.png' });
    await browser.close();
    
    res.status(200).json({ message: 'Puppeteer script executed successfully.' });
  } catch (error) {
    console.error('Error executing Puppeteer script:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

function App() {
  const [count, setCount] = useState(0);
  handler();
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live" index element={<Live />} />
    </Routes>
  </BrowserRouter>
  )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>

  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<Layout />}>
  //             <Route index element={<Home />} />
  //             <Route path="blogs" element={<Blogs />} />
  //             <Route path="contact" element={<Contact />} />
  //             <Route path="*" element={<NoPage />} />
  //           </Route>
  //         </Routes>
  //       </BrowserRouter>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
