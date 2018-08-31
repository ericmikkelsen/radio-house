export default (str) => {
    let kebab = str.toLowerCase().replace( new RegExp(" ", "g"),'-'  )
    return kebab;
}