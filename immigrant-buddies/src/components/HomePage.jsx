import SearchBuddies from "./SearchBuddies";
import Buddies from "./Buddies";
import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [buddies, setBuddies] = useState([]);

  const handleSearch = async () => {
    try {
      // TODO: Make an API call to search for users.
      const response = await fetch("/api/search-users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchQuery,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBuddies(data.users);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to fetch buddies. Please try again.");
    }
  };

  return (
    <div>
      <h1>Welcome to the website!</h1>
      <SearchBuddies
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
      />
      <Buddies buddies={buddies} />
    </div>
  );
}

export default HomePage;
