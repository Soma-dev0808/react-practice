import React, { useState } from 'react'

import '../style/RotateImage.css';

const getImageArray = (size) => {
    if (!size) return []
    const imageArray = [];
    let count = 0;
    for (let i = 0; i < size; i++) {
        imageArray.push([]);
        for (let j = 0; j < size; j++) {
            count += 1
            imageArray[i].push(count)
        }
    }
    return imageArray;
}

const getColor = (num) => {
    let color = ''
    switch (num) {
        case 1:
            color = 'red'
            break;
        case 2:
            color = 'blue'
            break;
        case 3:
            color = 'green'
            break;
        case 4:
            color = 'purple'
            break;
        case 5:
            color = 'yellow'
            break;
        case 6:
            color = 'gray'
            break;
        case 7:
            color = 'aqua'
            break;
        case 8:
            color = 'navy'
            break;
        case 9:
            color = 'white'
            break;
        default:
            color = 'burlywood';
    }

    return color;
}

const RotateImage = () => {

    const [imageArray, setimageArray] = useState((getImageArray(3)));

    const renderMapItems = (value) =>
        <ImageComponent
            key={value + new Date().getMilliseconds() + Math.random()}
            gridIdx={value}
        />


    const handleRotate = () => {
        const newImgArr = [...imageArray];
        const arrayLength = newImgArr.length;

        for (let i = 0; i < arrayLength; i++) {
            for (let j = i; j < arrayLength; j++) {
                [newImgArr[i][j], newImgArr[j][i]] = [newImgArr[j][i], newImgArr[i][j]]
            }
        }

        for (let i = 0; i < arrayLength; i++) {
            let left = 0,
                right = arrayLength - 1;

            while (left < right) {
                [newImgArr[i][left], newImgArr[i][right]] = [newImgArr[i][right], newImgArr[i][left]]
                left++;
                right--;
            }
        }

        setimageArray(newImgArr);
    }

    return (
        <div className='rotate-image-container'>
            <div>RotateImage</div>

            <button
                className='rotate-button'
                onClick={handleRotate}
                type="button"
            >Click to rotate</button>

            <div className='image-container'>
                {
                    imageArray.map(
                        (images) => images.map(renderMapItems)
                    )
                }
            </div>


        </div>
    )
}

const ImageComponent = ({ gridIdx }) => {
    return <div className='grid-items' style={{ backgroundColor: getColor(gridIdx) }}>{gridIdx}</div>
}

export default RotateImage