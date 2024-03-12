import React, { FC, ReactNode, useState } from 'react';

import DotsSvg from '../../assets/svg/dots.svg';

import styles from './actions-bar.module.css';

const ActionsBar: FC<Props> = ({ actions }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prevState => !prevState)
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.actionsBtn}
        disabled={!actions.length}
      >
        <DotsSvg />
      </button>
      <ul className={isVisible ? styles.actions : styles.hiddenActions}>
        {actions.map(action => (
          <li className={styles.actionRow} onClick={action.onClick} key={action.name}>
            {action.icon}
            <span className={styles.actionName}>{action.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  actions: {
    name: string;
    icon: ReactNode;
    onClick: () => void;
  }[];
};

export default ActionsBar;
