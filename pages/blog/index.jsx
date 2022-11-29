import React from 'react'
import PageLayout from '../../components/PageLayout'
import styles from '../../styles/Home.module.css'
import { getPosts } from '../../services/postsService'
import Link from 'next/link'

export default function blog({ data }) {
  return (
    <PageLayout title='Blog' desc='Blog page'>
    <section className={styles.container}>
      <h1>Blog and posts</h1>
        {data.map((post) => {
          return (
            <article key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h3>
                  {post.id} - {post.title}
                </h3>
              </Link>
              <p>{post.body}</p>
            </article>
          );
        })}
      </section>
    </PageLayout>
  )
}
export const getStaticProps = async () => {
  try {
    const data = await getPosts();
    return { 
      props: {
        data,
      },
    };
  } catch (error) {
    console.log('ostiaso** ',error);
  }
};
