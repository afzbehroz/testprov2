export default function Child({ handleColor }) {
  return (
    <select onChange={(e) => handleColor(e.target.value)}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  );
}
