import React from 'react';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <li className={styles.item} key={item.id}>
          {item.isOnline ? (
            <span
              className={styles.status}
              style={{ backgroundColor: 'green' }}
            />
          ) : (
            <span
              className={styles.status}
              style={{ backgroundColor: 'red' }}
            />
          )}

          <img className={styles.avatar} src={item.avatar} alt="" />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
