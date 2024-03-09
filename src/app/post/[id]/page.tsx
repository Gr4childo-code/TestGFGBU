import { getPost } from '@/api/post/getPost';
import styles from './page.module.scss';
const PostPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await getPost(id);

  if (!post) {
    return {
      notFound: true
    };
  }

  return (
    post && (
      <div className={styles.postContainer}>
        <div className={styles.postContent}>
          <h1 className={styles.postTitle}>
            {post.id} - {post.title}
          </h1>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      </div>
    )
  );
};

export default PostPage;
