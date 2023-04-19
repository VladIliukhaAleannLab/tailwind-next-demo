import Layout from "@/components/Layout";
import { GRID } from "@/data/grid";

export default function Home({ grid }) {
  console.log({ grid });
  return (
    <Layout>
      <h1 className="font-recoleta">Home</h1>
      <h2 className="font-inter font-medium">Home</h2>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      grid: GRID,
    },
  };
};
