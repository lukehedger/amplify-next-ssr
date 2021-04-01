export default function SSGPage({ hello }) {
  return <h1>{hello}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return { props: { hello: `Hello, static ${params.id}!` } };
}
