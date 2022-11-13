import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ListItem from '../components/ListItem';
import useAsync from '../hooks/useAsync';
import { PROXY_URL } from "../config";

export default function Feed() {

  const [paginationId, setPaginationId] = useState(0);
  const [feedList, setFeedList] = useState([]);
  
  const fetcher = async () => {
    try {
      const response = await axios.get(PROXY_URL, {params:{ before: paginationId}});
      const result = await response.data.result;
      return result;
    }
    catch (e) {
      console.log(e)
    }
  };

  const { data, loading} = useAsync(fetcher);
  useEffect(() => {
    if(data?.data){
      const list = data.data;
      setFeedList(list);
      setPaginationId(list[list.length-1].id);
    }
  }, [data]);

  if(loading === true) return <p>loading....</p>

  return (
    <div className="container">
      <h1>Social Media Feed</h1>
      <br />
      <ul className="list">
      {feedList?.map((item, i) => {
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
