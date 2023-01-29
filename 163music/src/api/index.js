import axios from 'axios'
export function getBanner(type=2){
    return axios.get(`http://localhost:3000/banner?type=${type}`)
}
export function getMusicList(limit=10){
    return axios.get(`http://localhost:3000/personalized?limit=${limit}`)
}
export function getPlaylistDetail(id){
    return axios.get(`http://localhost:3000/playlist/detail?id=${id}`)
}
export function getLyric(id){
    return axios.get(`http://localhost:3000/lyric?id=${id}`)
}
export function searchMusic(keyword){
    return axios.get(`http://localhost:3000/search?keywords=${keyword}`)
}
export function phonelogin(phone,pwd){
    return axios.get(`http://localhost:3000/login/cellphone?phone=${phone}&password=${pwd}`)
}
export function getuser(id){
    return axios.get(`http://localhost:3000/user/detail?uid=${id}`)
}
export default{
    getBanner,getMusicList,getPlaylistDetail,getLyric,searchMusic,phonelogin,getuser
}