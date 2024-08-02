export default function useDate(){

    function getMondayDate(d:Date){
        const date = new Date(d);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        const newDate = new Date(d.setDate(diff));
        newDate.setHours(0,0,0.0);
        return newDate;
    };

    function getBeforeWeekMondayDate(d:Date){
        const monday = getMondayDate(d);
        const day = monday.getDay();
        const diff = monday.getDate() - day -6;
        const newDate = new Date(d.setDate(diff));
        newDate.setHours(0,0,0.0);
        return newDate;
    };

    
return{
    getMondayDate,
    getBeforeWeekMondayDate,
}
}