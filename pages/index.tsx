import { useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home( { menu }: HomeProps ): JSX.Element {
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
      <Input placeholder="test"/>
      <Textarea placeholder="test 1"/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
} 