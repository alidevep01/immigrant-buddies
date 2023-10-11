function Buddies({ buddies }) {
  return (
    <ul>
      {buddies.map((buddy) => (
        <li key={buddy.id}>{buddy.name}</li>
      ))}
    </ul>
  );
}
export default Buddies;
