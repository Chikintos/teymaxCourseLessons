const emp =
    [
    {
        content: 'Frontend Misha',
        id: 'fe',
        relations: ['pm', 'be', 'ds']
    },
    {
        content: 'Design Pasha',
        id: 'ds',
        relations: ['pm', 'fe']
    },
    {
        content: 'Project Manager Sanya',
        id: 'pm',
        relations: ['ba', 'fe', 'be', 'ds']
    },
    {
        content: 'Backend Grisha',
        id: 'be',
        relations: ['pm', 'fe', 'ba']
    },
    {
        content: 'Business Analyst Sveta',
        id: 'ba',
        relations: ['pm']
    }
]
 for (let i=0;i<emp.length;i+=1){
     console.log(i)
     let el=document.createElement('div')
     el.innerHTML = "<h1>"+emp[i].content+"</h1>"
     el.className= "passive"
     el.id=emp[i].id
     document.body.append(el)
     el.addEventListener("click", () => {
         for (let i=0;i<emp.length;i+=1)
         {
             document.getElementById(emp[i].id).className='passive'
         }
         el.className='active'
         for(let i=0;i<emp.length;i+=1){
             if(emp[i].relations.includes(el.id)){
                 document.getElementById(emp[i].id).className="active"
             }
         }
     })
 }
