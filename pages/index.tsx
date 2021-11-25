import {Button, Htag} from "../components";
import {P} from "../components";


export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
        <Button appearance='primary' arrow="right">Кнопка</Button>
        <Button appearance='ghost' arrow='down'>Кнопка</Button>
        <P size='small'>Параграф</P>
        <P size='medium'>Параграф</P>
        <P size='large'>Параграф</P>
    </div>
  );
}
