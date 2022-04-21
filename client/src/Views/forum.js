import { Container, Table } from "react-bootstrap"
import NewPostModal from "../Components/newPostModal"

const today = new Date()
const posts = [
  {
    title: "Dificultad para caminar con protesis x",
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    views: 25
  },
  {
    title: "Esta protesis me ha ayudado mucho",
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    views: 10
  },
  {
    title: "Miren estos dispositivos",
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    views: 65
  }
]


const Forum = (props) => {
  return (
    <Container>
      <NewPostModal/>
      <Table style={{color: "whitesmoke"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post, idx) => {
              return (
                <tr>
                  <td>{idx}</td>
                  <td>{post.title}</td>
                  <td>{post.views}</td>
                </tr>)
            })
          }
        </tbody>

      </Table>

    </Container>
  );
}

export default Forum;