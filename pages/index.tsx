import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/graadientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="profile"
      title="Brandon Tabaska"
      description="15 Public Playlists"
      image="https://a-z-animals.com/media/2021/07/Lemur.jpg"
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
