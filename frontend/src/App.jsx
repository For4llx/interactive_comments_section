import React, { useState, useEffect } from 'react'; import { ThemeProvider } from "styled-components";
import { Theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';
import AppContainer from "./components/AppContainer"
import AppButton from "./components/AppButton"
import Comment from "./components/Comment"
import CommentModal from "./components/CommentModal"
import CommentAdd from "./components/CommentAdd"
import CommentList from "./components/CommentList"
import Counter from "./components/Counter";
import Comments from "./containers/Comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/comments/');
      const comments = await response.json();
      setComments(comments);
    };
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Comments />
    </ThemeProvider >
  )
}

export default App

/*
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CommentModal
        buttonDelete={<AppButton large delete>Yes, Delete</AppButton>}
        buttonCancel={<AppButton large cancel>No, Cancel</AppButton>}
      />
      <AppContainer>
        <CommentList
          comment={<Comment
            counter={<Counter />}
            counterMobile={<Counter mobile />}
            username="amyrobinson"
            picture="./assets/images/avatars/image-amyrobson.png"
            timestamp="1 month ago"
            content="Impressive! Though it seems the drag feature could be improved.
                  But overall it looks incredible. You’ve nailed the design and the
                  responsiveness at various breakpoints works really well."
          />}
          reply={<Comment
            counter={<Counter />}
            counterMobile={<Counter mobile />}
            username="amyrobinson"
            picture="./assets/images/avatars/image-amyrobson.png"
            timestamp="1 month ago"
            content="Impressive! Though it seems the drag feature could be improved.
                  But overall it looks incredible. You’ve nailed the design and the
                  responsiveness at various breakpoints works really well."
            replyTo={<CommentAdd
              username="amyrobinson"
              picture="./assets/images/avatars/image-amyrobson.png"
              button={<AppButton>Reply</AppButton>}
            />}
          />}
        />
        <CommentAdd
          username="amyrobinson"
          picture="./assets/images/avatars/image-amyrobson.png"
          button={<AppButton>Send</AppButton>}
        />
      </AppContainer>
    </ThemeProvider >
*/