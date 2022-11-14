import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ListItem from '../components/ListItem';
import useAsync from '../hooks/useAsync';
import { PROXY_URL } from "../config";
import useIntersection from '../hooks/useIntersection';

export default function Feed() {

  const [paginationId, setPaginationId] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const elemRef = React.useRef(null);
  
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
  const isIntersecting = useIntersection(elemRef, {rootMargin: '20%'});
  const { data, loading} = useAsync(fetcher, isIntersecting);

  useEffect(() => {
    if(data?.data){
      const list = data.data;
      setFeedList(prevList => {
        let prev = prevList.length > 0 ? prevList : []
        return [...prev, ...list]
      });
      // setPaginationId(list[list.length-1].id);
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
       <div ref={elemRef} style={{ padding: "20px" }}></div>
    </div>
  );
}
