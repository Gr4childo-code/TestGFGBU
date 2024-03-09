import React from 'react';
import styles from './PostComponent.module.scss';
import Link from 'next/link';
const PostComponent: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.container}>
        <p className={styles.title}>
          {post.id} - <span>{post.title}</span>
        </p>
        <p className={styles.body}>{post.body}</p>
      </div>
    </Link>
  );
};

export default PostComponent;
