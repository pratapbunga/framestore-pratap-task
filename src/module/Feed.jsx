import React from 'react';
import axios from 'axios';

import ListItem from '../components/ListItem';
import useAsync from '../hooks/useAsync';


export default function Feed() {
  const [state, setstate] = React.useState(0);

  const fetcher = async () => {
    const ACCESS_TOKEN = '93c534d9f3876e03c61235a8496365721f1e54b1';
    const url = `https://api.walls.io/v1/posts?access_token=${ACCESS_TOKEN}&fields=id,comment,type,external_image,external_name,post_image,post_video,post_link,created,modified&limit=50&include_inactive=1&sort=-created,-id&before=${state}&media_types=video,image`   

    try {
      const response = await axios.get(`http://localhost:8080/cors?`, {params:{ url}});
      const data = await response.data.data;     
      return data;
    }
    catch (e) {
      console.log(e)
    }
  };

  const { data, loading} = useAsync(fetcher);

  if(loading === true) return <p>loading....</p>

  return (
    <div className="flex flex-col items-center container">
      <h1>Framestore Social Media Feed</h1>
      <br />
      <ul className="location-list">
      {data?.map((item, i) => {
          return (
            <ListItem
              key={item.comment + i.toString()}
              id={item.id}
              comment={item.comment}
              postImage={item.post_image}
              type={item.type}
              externalName={item.external_name}
              created={item.created}   
              postVideo={item.post_video} 
              postLink={item.post_link}       
            />
          );
        })}
      </ul>
    </div>
  );
}
