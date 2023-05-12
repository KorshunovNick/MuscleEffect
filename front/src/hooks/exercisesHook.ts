import { getExercises } from "../api/api"
import { useCallback, useState } from "react";

interface IExercise{
    title: string
    steps: string[]
    muscleGoup: string
    id:string
  }

 export const GetExercises = ()=> {
    const [muscleGroup,setMuscleGroup] = useState('lats');

    const changeMuscleGroup = (event:any)=>{
        console.log(event.target.closest('g'))
        const link  = event.target.parentElement.getAttribute('id')
        setMuscleGroup(link)
    }
    return {changeMuscleGroup,muscleGroup}
}



