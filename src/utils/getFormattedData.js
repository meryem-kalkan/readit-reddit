export const getFormattedNumber = (num) => {
    if (num >= 10000) {
 return (num / 1000).toFixed() + 'k';
    } else if (num >= 1000 ) {
    return (num /1000).toFixed(1) / 1 + 'k';
} else {
    return num;
}
}

export const getFormattedTime = (time) => {
   const currentDate = new Date();
   const currentTime = (currentDate.getTime() / 1000);
   const creationTime = time;
   const timeDifference = currentTime - creationTime;

   let formattedTime = ''

   if (timeDifference < 60) {
    formattedTime = ' 1 min. ago';
   } else if (timeDifference < 3600) {
    formattedTime = (timeDifference / 60).toFixed() + ' min. ago';
   } else if (timeDifference < 86400) {
    formattedTime = (timeDifference / 3600).toFixed() + ' hr. ago';
   } else if (timeDifference < 172800) {
    formattedTime = '1 day ago';
   } else if (timeDifference < 2628288) {
    formattedTime = (timeDifference / 86400).toFixed() + ' days ago';
   } else if (timeDifference < 31536000) {
    formattedTime = (timeDifference / 2628288).toFixed() + ' mo. ago';
   } else if (timeDifference >= 31536000) {
    formattedTime = (timeDifference / 31536000).toFixed() + ' yr. ago';
   } 
   return formattedTime;
}