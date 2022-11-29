export const getPosts = async ()=>{
  // const resp = await fetch('http://localhost:3000/api/posts',{
  //   method: 'POST',
  //   body: 'all',
  // });
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return data;
}
export const getPostOne = async (id)=>{
  // const res = await fetch('http://localhost:3000/api/posts',{
  //   method: 'POST',
  //   body: `${id}`,
  // });
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
}