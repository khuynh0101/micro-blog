const isEnterKey = (event, executeEnterKeyFunction) => {
    if (event.keyCode === 13)
    {
        executeEnterKeyFunction();
    }
}
export default isEnterKey;

// const formatDate = () =>{
//     return '';
//      const dateNowInSeconds = Date.now();
//      if (dateNowInSeconds - date < 60 )
//          return 'less than a minute'
//      return date;

// }
// export default {isEnterKey, formatDate};