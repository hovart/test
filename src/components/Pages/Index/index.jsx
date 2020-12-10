import React, { useState } from 'react';

import s from './styles.module.scss';
import { Container } from 'react-bootstrap';
import Button from '../../UiKit/Button';
import EditingItem from '../../EditingItem';

const exampleData = {
  name: 'Vespa 125',
  image: '/images/moto/moto-img-1.png',
  maxPieces: 15,
};

function Index() {
  const [data, setData] = useState(null);

  const toggleData = () => {
    if (!data) setData(exampleData);
    else setData(null);
  };

  return (
    <Container fluid>
      <div className={s.buttonBox}>
        <Button onClick={toggleData} w="200px" h="50px">
          {!data ? 'Open' : 'Close'} Modal
        </Button>
      </div>
      <EditingItem data={data} removeData={() => setData(null)} />
    </Container>
  );
}

export default Index;
