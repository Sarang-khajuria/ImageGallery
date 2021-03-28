import React, {useState} from 'react';
import './images.css';
import {apiEndPoint} from '../../Constants/constants'
const Images = (props) => {

  const url = apiEndPoint;
  const [imagesArr, setImages] = useState([])
  const [page, setPage] = useState(1)
  const fetchImages = (page, limit) => {
    return fetch(`${url}?page=${page}&limit=${props.limit}`)
    .then(response => response.json())
    .then(data => {
      setImages([...imagesArr, ...data])
    })
  }

  const fetchNewImages = () => {
    setPage(page + 1);
    fetchImages(page+1)
  }

  React.useEffect(() => {
    fetchImages(page)
  },[])

  const getImageHeight = (image) => {
    let height = Math.floor(image.height / 8)
    if(height < 350)
      height = 350;
    return height + 'px'
  }

  const renderImagesArray = () => {
    return (<div className="images">
      {
        imagesArr.map(item => {
          return <img key={item.url}src={item.download_url}/>
        })
      }
    </div>)
  }

  return(
    <>
      { imagesArr.length
        ? renderImagesArray()
        : null
      }
      <div class='btn'>
        <button onClick={fetchNewImages}> Load more data</button>
      </div>
    </>
  )
}

export default Images