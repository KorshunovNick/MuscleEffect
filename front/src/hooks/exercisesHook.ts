import { getExercises } from "../api/api"

interface IExercise{
    title: string
    steps: string[]
    muscleGoup: string
    id:string
  }

 export const GetExercises = {
    exercisesFetch: [],
    setExercises:async function(muscleGoup:string){
        const data = await getExercises(muscleGoup)
        this.exercisesFetch = data
    }
    ,
    getExercisesFetch(){
        return this.exercisesFetch
    }
}



