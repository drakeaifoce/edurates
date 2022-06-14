import { EntityList } from "../components/entities";
import SearchBar from "../components/search/SearchBar";

export function Landing() {
  return (
    <div>
      <SearchBar />
      <EntityList />
    </div>
  )
}
