"use client";
import CodeRunner from "@/components/CodeRunner";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <HomePage />
      {/* <CodeRunner
        codeFilePath="/code-examples/helloWorld.c" 
        apiEndpoint="/api/compile" 
      /> */}
      <Footer />
    </div>
  );
}
