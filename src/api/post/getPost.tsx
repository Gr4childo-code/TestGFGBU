export const getPost = async (id: string): Promise<IPost | undefined> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data: IPost = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
