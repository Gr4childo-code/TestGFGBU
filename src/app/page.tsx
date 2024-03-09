'use client';
import PostComponent from '@/components/Post/PostComponent';
import styles from './page.module.scss';
import { getPosts } from '@/api/post/getPosts';
import { Pagination } from '@/components/Pagination/Pagination';
import { useEffect, useState } from 'react';
export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      if (data) {
        setPosts(data);
      }
    };

    getData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.posts}>
        {posts && currentPosts.map(post => <PostComponent key={post.id} post={post} />)}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate} />
    </main>
  );
}
