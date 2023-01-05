import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>something</Htag>
      <Button appearence="primary">Button</Button>
      <Button appearence="ghost" arrow="down">Button</Button>
      <P size="s">Hello world</P>
      <P>Hello world</P>
      <P size="l">Hello world</P>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);