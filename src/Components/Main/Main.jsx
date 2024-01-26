import MovieList from "./Cine/MovieList";
import SideBar from "./SideBar";

export default function Main() {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/* <!-- Sidebar --> */}
        <SideBar />

        {/* <!-- Content --> */}
        <MovieList />
      </div>
    </main>
  );
}
