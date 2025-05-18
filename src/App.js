import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/pages/Categories/Categories";
import CategorySearch from "./components/pages/CategorySearch/CategorySearch";

function App() {

  return (
      <main>
          <Container>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/categories" element={<Categories />} />
                  <Route exact path="/category/:categoryId" element={<CategorySearch />} />
                  <Route exact path="/post/:postId" element={<Post />} />
                  <Route exact path="/post/add" element={<AddPost />} />
                  <Route exact path="/post/edit/:postId" element={<EditPost />} />
                  <Route exact path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </Container>
      </main>
  );
}

export default App;
