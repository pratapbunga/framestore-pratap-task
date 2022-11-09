import Layout from "./components/Layout";
import Feed from "./module/Feed";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Feed />
      </Layout>
    </div>
  );
}
export default App;
