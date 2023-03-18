import React from 'react';
import Posting from './Posting';

const craigPost = require('../postings')
                
let postList = craigPost.postings.map((data, i) => {
  return <Posting data={data} key={i} />
})

function Gallery(){
    return (
      <div>
        <h1>Gallery</h1>
        <div>
            {postList}
        </div>
      </div>
    )
}

export default Gallery;