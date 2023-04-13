interface IExercises{
    number:number
    steps:string[] 
}
const Exercise = ()=>{
   const exercises:IExercises[] = [{number:1,steps:["Взять штангу","Опустить к середине груди","Поднять штангу","Поставить на место"]},{number:2,steps:['Встать',"Присесть","Выпрыгнуть"]}]
        
    // return (
    //    <div>
    //     {exercises.map((e:IExercises)=>{
    //         <h1>Упражнение {e.number}</h1>
    //         {e.steps.map((e,i)=>{
    //             <p>{i+1}.{e}</p>
    //         })}
    //     })}
    //     </div>
    // )
}
export default Exercise