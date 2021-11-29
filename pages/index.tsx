import {Button, Htag, Rating, Tag} from "../components";
import {P} from "../components";
import {useEffect, useState} from "react";
import {Layout, withLayout} from "../layout/Layout";


function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('unmount');
    };
  });

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
        <Button appearance='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
        <Button appearance='ghost' arrow='down'>Кнопка</Button>
        <P size='small'>Параграф</P>
        <P size='medium'>Параграф</P>
        <P size='large'>Параграф</P>
        <Tag size='s'>Ghost</Tag>
        <Tag size='s' color='red'>Red</Tag>
        <Tag size='s' color='green'>Green</Tag>
        <Tag color='primary'>Green</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);