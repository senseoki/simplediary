import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "kduck",
    content: "test 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "aaa",
    content: "test 1",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "bbb",
    content: "test 1",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "ccc",
    content: "test 1",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "ddd",
    content: "test 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  console.log("Appfaskdjfalskdjfalskdj")
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
