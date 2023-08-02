import ViewTask from './ViewTask/ViewTask';
import './Todo.css';
import TodoService from '../../services/TodoServices';
import { useEffect, useState } from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import Modal from 'react-modal';
import FormCreate from '../../components/form/Form';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      margin: '0',
      padding: '0',
      
    },
  };
  

function Todo() {
    const [todosCompleted, setTodosCompleted] = useState(null); 
    const [todosNotCompleted, setTodosNotCompleted   ] = useState(null); 
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const todos = await TodoService.getTodos();
        const todosCompleted = todos.data.filter((todo) => todo.completed === 1);
        const todosNotCompleted = todos.data.filter((todo) => todo.completed === 0);
        setTodosCompleted(todosCompleted);
        setTodosNotCompleted(todosNotCompleted);
    }

    const onRefresh = () => {
        getTodos();
    }

    const onModal = () => {
        console.log("onModal");
        setOpenModal(!openModal);
    }

    const onCreate = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[0].value;

        const todo = {
            title,
            description
        }

        const response = await TodoService.createTodo(todo);
        if (response.status === true) {
            onRefresh();
            onModal();
        } else {
            alert(response.message);
        }
    }


    return (
        <>  
            <div className='todo-header'>
                <button className='' onClick={onModal}>
                    <BsPlusCircleFill className="add-icon" size={35}/>
                </button>
                <h1>TodoList</h1>
            </div>
            <div className="todo-container">
                {
                    todosCompleted && todosNotCompleted && (
                       <>
                        <ViewTask title={"Tareas por hacer"} todos={todosNotCompleted} onRefresh={onRefresh}/>
                        <ViewTask title={"Tareas hechas"} todos={todosCompleted} onRefresh={onRefresh}/>
                       </>
                    )
                }
            </div>
            <Modal
                isOpen={openModal}
                style={customStyles}
                onRequestClose={onModal}
                contentLabel="Example Modal"

            >
                <FormCreate onSubmit={onCreate}/>

            </Modal>
        </>
    )
}

export default Todo;














