import { useState } from "react"
import { useEffect } from "react"
import MovieDetails from "./MovieDetails"

const ShowDetail = ({match}) => {

    const [info, setInfo] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getMovieData = async() => {
            let id = match.params.movieID
            if(id){
                let response = await fetch("https://www.omdbapi.com/?apikey=23ae3a68&i=" + id)
                let movieInfo = await response.json()
                setInfo(movieInfo)
            }
        }
        getMovieData()

    }, [match.params.movieID])


    useEffect(() => {
        const getMovieComments = async() => {
            let id = match.params.movieID
            if(id){
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id ,{
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMTIyMDJkNTI2MjAwMTViNmRkN2EiLCJpYXQiOjE2MzA1MjU0NTMsImV4cCI6MTYzMTczNTA1M30.5nL3jWvM63Ou_PbskbnbAuORUpst9l2UuhvYNA3-ZWU"
                    }
                })
                let movieComments = await response.json()
                setComments(movieComments)
            }
        }
        getMovieComments()

    }, [match.params.movieID])

    return(
        <div>
            {
                info && <MovieDetails movie={info} comments={comments} />
            }
        </div>
    )



}

export default ShowDetail