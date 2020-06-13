import React, { useEffect, useState } from "react";
import NavigationBar from "../../container/NavigationBar/navigationBar";
import {
  getAllTask,
  changeTaskStatus,
  insertNewTask,
  searchTodoByKeyword,
} from "./action";
import { connect } from "react-redux";
import List from "../../components/List/listContainer";
import StyledHomeLayout from "./StyledHomeLayout";
import Modal from "../../components/Modal/modal";
import AuxComponent from "../../hoc/AuxComponent";
import AddTodoLayout from "../../components/AddNewTodo/addTodoLayout";
import getFilteredTodos from "./selector";
//import { TASK_STATUS } from "./types";

function Home(props: any) {
  const [addingTodo, setAddingTodo] = useState(false);

  useEffect(() => {
    // const tasks = [
    //   {
    //     id: 1,
    //     toDo:
    //       "Est esse et velit esse aliquip esse laboris laborum in labore et.",
    //     detail: "BCD",
    //     status: TASK_STATUS.DONE,
    //   },
    //   {
    //     id: 2,
    //     toDo:
    //       "Adipisicing ea ut non cupidatat aliqua ea commodo in tempor magna et culpa labore cupidatat.",
    //     detail: "ASFDS",
    //     status: TASK_STATUS.PENDING,
    //   },
    // ];

    // props.insertNewTask(tasks);
    props.getAllTask();
  }, []);

  const toggleAddingTask = () => {
    setAddingTodo((currentAddingTodo) => !currentAddingTodo);
  };

  const onSearchTyped = (e: any) => {
    props.searchTodoByKeyword(e.target.value);
  };

  const modal = (
    <AuxComponent>
      <Modal isShow={addingTodo} clicked={toggleAddingTask}>
        <AddTodoLayout />
      </Modal>
    </AuxComponent>
  );

  return (
    <StyledHomeLayout>
      {modal}
      <NavigationBar
        onAddNewTaskClicked={toggleAddingTask}
        onSearchTyped={onSearchTyped}
      />
      <List task={props.task} onChangeTaskStatus={props.changeTaskStatus} />
    </StyledHomeLayout>
  );
}

const mapStateToProps = (state: any) => {
  return {
    task: getFilteredTodos(state.home),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllTask: () => dispatch(getAllTask()),
    changeTaskStatus: (id: number) => dispatch(changeTaskStatus(id)),
    insertNewTask: (val: any) => {
      dispatch(insertNewTask(val));
    },
    searchTodoByKeyword: (val: string) => dispatch(searchTodoByKeyword(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
