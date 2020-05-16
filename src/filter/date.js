export default (value) => {
    const date = new Date(value)
    console.log(date);
    return date.toLocaleDateString(['de-ch'],{weekday: 'long', month: 'short', day:'2-digit',year:'numeric'})
}
