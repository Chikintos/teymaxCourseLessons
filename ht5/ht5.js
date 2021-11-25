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

var el=document.createElement('div')
var el1=document.createElement('div')
var el2=document.createElement('div')
var el3=document.createElement('div')
