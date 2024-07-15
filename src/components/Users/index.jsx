import React from "react";
import classNames from "classnames";
import { FaTrash } from "react-icons/fa";
import styles from "./Users.module.css";

function Users({ user, isSelected, toggleUserSelection, deleteUser }) {
  const userCardClass = classNames(
    styles.userCardWrapper,
    user.gender === "male" ? styles.male : styles.female,
    isSelected && styles.selected
  );

  const handleDeleteClick = e => {
    e.stopPropagation();
    deleteUser(user.id);
  };

  return (
    <div className={userCardClass} onClick={() => toggleUserSelection(user.id)}>
      <div className={styles.cardContainer}>
        <img
          className={styles.userImg}
          src={user.imgSrc}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <div className={styles.userInfoWrapper}>
          <h2 className={styles.userName}>
            {user.firstName} {user.lastName}
          </h2>
          <p className={styles.userAge}>Age: {user.age}</p>
        </div>
      </div>
      <FaTrash className={styles.trashBtn} onClick={handleDeleteClick} />
    </div>
  );
}

export default Users;
