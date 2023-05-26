import './App.css'
import Card from './Card'
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]
function App() {

  return (
    <> <section className='App'>
    {
      users.map(({ userName, name, isFollowing }) => (
        <Card
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </Card>
      ))
    }
  </section>
     
    </>
  )
}

export default App
