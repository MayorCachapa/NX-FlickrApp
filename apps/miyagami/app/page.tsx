
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const response = await fetch('http://localhost:3333/api', {
    cache: "no-store",
  })
  const data = await response.json();

  return (
    <div className="">
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}
