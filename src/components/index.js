import React, { useState, useEffect } from "react";
import data from "../jsondata.json";
import Card from "./card/card";
import Form from "./form/form";
import Modal from "./modal/modal";
import Dialog from "./confirm-dialog";

const Home = () => {
  const [jsonData, setData] = useState([]);
  const [showModal, setModal] = useState(false);
  const [user, setUser] = useState({});
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    let newList = data.map((item) => ({ ...item, like: false }));
    setData(newList);
    //eslint-disable-next-line
  }, [data]);

  // handling likes
  const handleLikes = (obj) => {
    let listUpdate = jsonData.map((item) => {
      if (item.id === obj.id) {
        return { ...item, like: !obj.like };
      } else return item;
    });
    setData(listUpdate);
  };

  // handling delete item
  const deleteCard = (user) => {
    // eslint-disable-next-line
    let listUpdate = jsonData.filter((item) => {
      if (item.id !== user.id) return item;
    });
    setData(listUpdate);
  };

  // handle edit;
  const editCard = (obj) => {
    setUser(obj);
    setModal(true);
  };

  // update list
  const updateList = (obj) => {
    setModal(false);
    let newList = jsonData.map((item) => {
      if (item.id === obj.id) {
        return { ...item, ...obj };
      } else return item;
    });
    setData(newList);
  };

  //cancle delete prompt
  const cancelDelet = () => {
    setConfirm(false);
  };

  //confirm delete
  const confirmDelete = (user) => {
    deleteCard(user);
    setConfirm(false);
  };

  return (
    <div className="main_box" style={styles.container}>
      {jsonData &&
        jsonData?.map((item, index) => {
          return (
            <Card
              key={item.id}
              img={item.picture}
              username={item.first}
              url={item.country}
              {...item}
              handleLikes={handleLikes}
              deleteCard={() => {
                setConfirm(true);
                setUser(item);
              }}
              editCard={editCard}
            />
          );
        })}

      {showModal && (
        <Modal closeHandle={setModal}>
          <Form closeHandle={setModal} updateList={updateList} {...user} />
        </Modal>
      )}

      {confirm && (
        <Dialog
          confirmDelete={() => confirmDelete(user)}
          cancelDelet={cancelDelet}
        />
      )}
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 310px)",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  },
};
