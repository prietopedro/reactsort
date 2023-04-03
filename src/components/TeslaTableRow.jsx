function TeslaTableRow({ region, model, sales }) {
  return (
    <tr>
      <td>{region}</td>
      <td>{model}</td>
      <td>{sales}</td>
    </tr>
  );
}

export default TeslaTableRow;
