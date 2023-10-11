function SearchBuddies({ searchQuery, handleSearch, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for buddies..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    />
  );
}

export default SearchBuddies;
