import React from 'react';

import classes from './DemoList.module.css';
import { useMemo } from 'react';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('items sorted');
    return items.sort((a, b) => a - b);
  }, [items])

  console.log('demo running');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
