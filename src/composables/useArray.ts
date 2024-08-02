export default function useArray(){


function groupBy(property:string, array:any[]){
    if(property == "data")property = "data_id";
    const data:{id: string; data: any[]}[] = [];
    for(const a of array){
        const dataFinded = data.find(arr => arr.id == a[property]);
    if(dataFinded)
    dataFinded.data.push(a);
    else
    data.push({id: a[property], data:[a]});
    }
return data;
};

return{
    groupBy,
};
};