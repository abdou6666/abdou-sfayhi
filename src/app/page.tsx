import Header from "@/components/Header";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen">
      <div className="w-1/2 h-screen flex flex-col justify-around ">
        <Header />
        <div className="flex flex-col justify-around items-center">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  )
}
