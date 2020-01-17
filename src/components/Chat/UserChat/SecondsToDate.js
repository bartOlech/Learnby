const toDateTime = (secs) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs + 3600); //add a one hour 
    return t;
}

export default toDateTime;