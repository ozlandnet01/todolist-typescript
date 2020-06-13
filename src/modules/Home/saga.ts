import { takeLatest, put, call } from "redux-saga/effects";
import { GET_ALL_TASK, Action, INSERT_NEW_TASK } from "./types";
import { getAllTaskSuccess, insertNewTaskSuccess } from "./action";
import firebase from "firebase";
function* getAllTaskSaga(params: Action) {
  try {
    var config = {
      apiKey: "AIzaSyDcdChKu977kSzVvGQmODduOKtcXluIVRw",
      authDomain: "todolist-62c34.firebaseapp.com",
      databaseURL: "https://todolist-62c34.firebaseio.com",
      storageBucket: "todolist-62c34.appspot.com",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var postRef = firebase
      .database()
      .ref("posts")
      .orderByChild("dateTime")
      .limitToLast(1);

    var response = yield call(function () {
      return new Promise(function (resolve, reject) {
        postRef.once("value", function (snap) {
          let data = {};
          const returnValue = snap.val();
          for (let obj in snap.val()) {
            data = returnValue[obj].data;
          }
          resolve(data);
        });
      });
    });
    yield put(getAllTaskSuccess(response));

    // var newPostKey = firebase.database().ref("todo");
    // console.log(newPostKey);
    // yield starCountRef.once("value", function (snapshot) {
    //   const task = snapshot.val();
    //   const value = {
    //     data: task,
    //   };
    //   triggerPut(value);
    //   put(getAllTaskSuccess(value));
    // });
  } catch (error) {
    console.log(error);
    //yield put(getAllTaskFail());
  }
}

function* insertNewTaskSaga(params: Action) {
  try {
    var value = {} as { [key: string]: any };

    value["data"] = params.data;
    value["dateTime"] = new Date();
    console.log(123);
    var config = {
      apiKey: "AIzaSyDcdChKu977kSzVvGQmODduOKtcXluIVRw",
      authDomain: "todolist-62c34.firebaseapp.com",
      databaseURL: "https://todolist-62c34.firebaseio.com",
      storageBucket: "todolist-62c34.appspot.com",
    };
    firebase.initializeApp(config);
    var newPostKey = firebase.database().ref().child("todo").push().key;

    var updates = {} as { [key: string]: any };
    updates["/posts/" + newPostKey] = value;
    updates["/user-posts/" + newPostKey] = value;

    //alert(1);

    yield put(insertNewTaskSuccess(value));
  } catch (error) {
    console.log(error);
    //yield put(getAllTaskFail());
  }
}

export const watcherGetTask = [
  takeLatest(GET_ALL_TASK, getAllTaskSaga),
  takeLatest(INSERT_NEW_TASK, insertNewTaskSaga),
];
