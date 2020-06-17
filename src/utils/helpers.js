const isEnterKey = (event, executeEnterKeyFunction) => {
    if (event.keyCode === 13)
    {
        executeEnterKeyFunction();
    }
}

export default isEnterKey;
