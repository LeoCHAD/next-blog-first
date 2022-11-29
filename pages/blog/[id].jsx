import React from 'react'
import PageLayout from '../../components/PageLayout';
import Image from 'next/image'
import Link from 'next/link'
import { getPostOne, getPosts } from '../../services/postsService';

export default function Post({ data }) {
  return (
    <PageLayout title={data.title || 'Post'} desc='post page'>
    <section>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <Image width='400' height={370} src='http://localhost:3000/img/casita.jpg' alt='alt image' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates odit eum, laudantium praesentium quibusdam repellat sed optio corporis reprehenderit obcaecati, repudiandae, nostrum nisi mollitia totam doloremque blanditiis rerum tempora?</p>
      <Link href='/blog'>Back to Blog</Link>
    </section>
    </PageLayout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post)=>({params: {id: post.id.toString()}}))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getPostOne(params.id);

  return {
    props: {
      data
    }
  }
}