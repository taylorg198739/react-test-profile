import React, { FC, memo } from 'react'
import Rating from 'react-rating'

import { Profile } from './types'
import './styles.css'


interface ProfileProps {
  data: Profile;
  onLike: (id: string, isLiked: boolean) => void;
}

const ProfileComponent: FC<ProfileProps> = memo(({ data, onLike }) => {
  const { _id, name, title, country, city, profile_view, website_view, rating, isLiked } = data

  return (
    <div className="profile">
      <div className="header">
        <span className="title">Developer Profile 15-again</span>
        <button onClick={() => onLike(_id, !isLiked)}>
          <img src={`./assets/images/heart-${isLiked ? 'fill' : 'empty'}.svg`} alt="❤" />
        </button>
      </div>
      <div className="body">
        <img src="./assets/images/profile.png" alt={name} />
        <p className="name">{name}</p>
        <p>{title}</p>
        <p>{city}, {country}</p>
      </div>
      <div className="footer">
        <div className="item">
          <p>{profile_view.toLocaleString()}</p>
          <p>Profile Views 222</p>
        </div>
        <div className="item">
          <p>{website_view.toLocaleString()}</p>
          <p>Website Views</p>
        </div>
        <div className="item">
          <Rating
            initialRating={rating}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            readonly
          />
          <p>Avg. Rating</p>
        </div>
      </div>
    </div>
  )
});

export default ProfileComponent;
