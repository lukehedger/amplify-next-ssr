export default function SSRPage({ hello }) {
  return <h1>{hello}</h1>;
}

export async function getServerSideProps() {
  return { props: { hello: "Hello, from the Server!" } };
}
