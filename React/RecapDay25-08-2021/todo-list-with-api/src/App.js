import { useEffect, useState } from 'react';
import './App.css';
import AddFrom from './component/AddFrom';
import Header from './component/Header';
import Lists from './component/Lists';
import { ListsContext } from './context/ListsContext';
// import { TODOLISTS } from './mocks/todoLists';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const sortListsByName = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

function App() {
  const [lists, setLists] = useState([]);
  const [history, setHistory] = useState([]);
  // console.log(history);

  const API = 'http://localhost:8080';

  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const res = await axios.get(API + '/todo');
        // console.log(res.data.todos);
        setLists(res.data.todos.sort(sortListsByName));
      } catch (err) {
        console.log(err);
      }
    };
    getTodoLists();
  }, []);

  const addList = async name => {
    try {
      // const newLists = [...lists, { name: name, id: uuidv4(), status: false }];
      // setLists(newLists);
      const res = await axios.post(API + '/todo', {
        name: name,
        status: false,
      });
      // console.log(list);
      const todo = res.data.todo;
      const newLists = [todo, ...lists];
      setLists(newLists.sort(sortListsByName));

      // history
      const cloneListsBeforeChange = [...lists];
      const cloneHistory = [...history];
      if (cloneHistory.length === 5) {
        cloneHistory.pop();
        cloneHistory.unshift({
          type: 'add',
          lists: cloneListsBeforeChange,
          whereId: todo.id,
        });
      } else {
        cloneHistory.unshift({
          type: 'add',
          lists: cloneListsBeforeChange,
          whereId: todo.id,
        });
      }
      setHistory(cloneHistory);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodoList = async (id, list) => {
    try {
      const newLists = [...lists];
      const { name, status } = list;
      await axios.put(API + `/todo/${id}`, { name, status });
      const idx = newLists.findIndex(item => item.id === id);
      newLists[idx] = list;
      setLists(newLists.sort(sortListsByName));

      // history
      const cloneListsBeforeChange = [...lists];
      const cloneHistory = [...history];
      if (cloneHistory.length === 5) {
        cloneHistory.pop();
        cloneHistory.unshift({
          type: 'update',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      } else {
        cloneHistory.unshift({
          type: 'update',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      }
      setHistory(cloneHistory);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteList = async id => {
    try {
      await axios.delete(API + `/todo/${id}`);
      const newLists = lists.filter(item => item.id !== id);
      setLists(newLists.sort(sortListsByName));

      // history
      const cloneListsBeforeChange = [...lists];
      const cloneHistory = [...history];
      if (cloneHistory.length === 5) {
        cloneHistory.pop();
        cloneHistory.unshift({
          type: 'delete',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      } else {
        cloneHistory.unshift({
          type: 'delete',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      }
      setHistory(cloneHistory);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleListSuccess = async id => {
    try {
      //  Clone แบบนี้เพราะว่ามันเป็น deep (มีข้อจำกัดนะ)
      const newLists = JSON.parse(JSON.stringify(lists));
      const idx = newLists.findIndex(item => item.id === id);
      newLists[idx].status = !newLists[idx].status;
      const { name, status } = newLists[idx];
      await axios.put(API + `/todo/${id}`, { name, status });
      setLists(newLists.sort(sortListsByName));

      // history
      const cloneListsBeforeChange = [...lists];
      const cloneHistory = [...history];
      if (cloneHistory.length === 5) {
        cloneHistory.pop();
        cloneHistory.unshift({
          type: 'update',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      } else {
        cloneHistory.unshift({
          type: 'update',
          lists: cloneListsBeforeChange,
          whereId: id,
        });
      }
      setHistory(cloneHistory);
    } catch (err) {
      console.log(err);
    }
  };

  const undoTodoList = async () => {
    if (history.length > 0) {
      const clone = [...history[0].lists];
      if (history[0].type !== 'delete') {
        setLists(
          clone.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          })
        );
      }

      // จัดการกับ backend
      switch (history[0].type) {
        case 'add': {
          await axios.delete(API + `/todo/${history[0].whereId}`);
          break;
        }
        case 'update': {
          const cloneLists = [...history[0].lists];
          const targetList = cloneLists.find(
            item => item.id === history[0].whereId
          );
          const { name, status } = targetList;
          await axios.put(API + `/todo/${history[0].whereId}`, {
            name,
            status,
          });
          break;
        }
        // เหลือ Case Before ทำการ Delete ยังไม่รู้ว่าจักการ backend อย่างไรให้มันลบแล้ว Undo อยู่ตำแหน่งเดิม
        //  ที่ทำอยู่ยังไม่ใช่ตำแหน่งเดิม
        case 'delete': {
          const cloneLists = [...history[0].lists];
          // หาว่าตัวที่ลบไปคืออะไร
          const targetList = cloneLists.find(
            item => item.id === history[0].whereId
          );
          const { name, status } = targetList;
          const res = await axios.post(API + `/todo`, {
            name,
            status,
          });
          const todo = res.data.todo;
          const newLists = [todo, ...lists];
          setLists(
            newLists.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          );
          break;
        }
        default:
          break;
      }

      // history เอาตัวที่ undo ออก
      setHistory(current => {
        const clone = [...current];
        clone.shift();
        return clone;
      });
    } else {
      alert('Can not undo.');
    }
  };

  return (
    <div className="container-md my-3 py-3 rounded bg-light">
      <ListsContext.Provider
        value={{
          lists,
          updateTodoList,
          deleteList,
          toggleListSuccess,
          undoTodoList,
        }}
      >
        <Header />
        <AddFrom addList={addList} />
        <Lists />
      </ListsContext.Provider>
    </div>
  );
}

export default App;
