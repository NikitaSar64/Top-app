import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>something</Htag>
      <Button appearence="primary">Button</Button>
      <Button appearence="ghost" arrow="down">Button</Button>
    </>
  );
}
