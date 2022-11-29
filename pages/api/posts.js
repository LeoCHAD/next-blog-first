// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { body } = req;
  try {
    if(body === 'all') {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      res.status(200).json(data);
      // res.status(200).json({id: 0, body: 'upauoa all moment'});
    }
    else{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${body}`);
      const data = await response.json();
      res.status(200).json(data);
      // res.status(200).json({id: body, body: 'upauoa individual post'});
    }
  } catch (err) {
    res.status(300).json({ id: 0, body: null });
  }
}
