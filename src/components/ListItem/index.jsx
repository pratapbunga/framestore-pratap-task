import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import { relativeDays } from '../../utils';

function ListItem({
  id, comment, created,external_image, externalName, postImage, postLink, postVideo, type
}) {
  return (
    <li data-key={id} className="list-item">
        <div className="column-image">
          <img src={postImage} alt={comment} />
          {postVideo && <SocialIcon network='youtube' bgColor="#fff" style={{ height: 40, width: 40, position: 'absolute', left: "calc(50% - 20px)", top: "calc(50% - 20px)" }}/>}
          {type === 'youtube' && <SocialIcon network='youtube' bgColor="#ccc" fgColor="rgb(255, 51, 51)" style={{ height: 40, width: 40, position: 'absolute', left: "calc(50% - 20px)", top: "calc(50% - 20px)" }}/>}
        </div>
        <div className="column">
          <div className='top-row'>
            <div className='title'>{externalName + " " + type}</div>
            <div><span className='created-time'>{relativeDays(new Date(created))}</span><SocialIcon network={type} style={{ height: 40, width: 40 }}/></div>
          </div>
          <div className="description">{comment}</div>
        </div>
    </li>
  );
}

export default React.memo(ListItem);

ListItem.propTypes = {
  created: PropTypes.string.isRequired,
  externalName: PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  postLink: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
